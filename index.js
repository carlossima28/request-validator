const Msg = require('./src/messages/languague-manager.js');
require('./src/tools/String.js');

module.exports = class RequestValidator {

  config = {}
  param = {}
  response = {}
  route = []

  constructor(config) {
    this.config.languague = "english";
    this.config.remove_unknown = true;
    this.config.regex = {
      regex: {},
      message: {}
    };

    if (config) {
      this.config.languague = config.languague === true ? config.languague : this.config.languague;
      this.config.remove_unknown = config.remove_unknown === true ? config.remove_unknown : this.remove_unknown;
      this.config.regex = config.regex === undefined ? this.config.regex : config.regex;
    }
  }

  validate(param, arr_prop, extra_validation) {
    try {
      this.param = param;
      this.response.status = true;
      this.response.message = "OK";
      delete this.response.data;

      this.route = ["root"];

      arr_prop = Array.isArray(arr_prop) ? arr_prop : [arr_prop];
      this.validateObject(param, arr_prop)
      if (typeof (extra_validation) === 'function') {
        let resp_extra_validation = extra_validation(param);
        if (resp_extra_validation !== undefined) {
          this.throw(resp_extra_validation);
        }
      }
      this.response.data = param;
    } catch (error) {
      if (this.response.status) {
        this.response.status = false;
        this.response.message = error.message;
      }
    }
    return this.response;
  }

  validateObject(param, arr_prop) {
    if (this.config.remove_unknown) {
      let properties = Object.entries(param);
      for (let i = 0; i < properties.length; i++) {
        let b_delete = true;
        for (let j = 0; j < arr_prop.length; j++) {
          if (properties[i][0] === arr_prop[j].id) {
            b_delete = false;
            break;
          }
        }
        if (b_delete) {
          delete param[properties[i][0]];
        }
      }
    }

    for (let i = 0; i < arr_prop.length; i++) {
      let prop = arr_prop[i];
      prop.required = prop.required === undefined ? true : this.checkPropertyOfProperty(prop.required);

      if (prop.required) {
        this.route.push("['" + prop.id + "']");

        param[prop.id] = param[prop.id] === undefined ? prop.default_value : param[prop.id];

        this.validateTypesObject(param, prop);
        this.validateRegexObject(param, prop);
        this.validateValuesObject(param, prop);
        this.validateItems(param, prop);
        this.validateSizesObject(param, prop);

        this.route.pop();
      } else {
        if (this.config.remove_unknown) {
          delete param[prop.id];
        }
      }
    }
  }

  validateArray(param, prop) {
    prop.required = prop.required === undefined ? true : prop.required;
    for (let i = 0; i < param.length; i++) {
      this.route.push("[" + i + "]");
      prop.index = i;
      param[prop.index] = param[prop.index] === undefined ? prop.default_value : param[prop.index];

      this.validateTypesArray(param, prop);
      this.validateRegexArray(param, prop);
      this.validateValuesArray(param, prop);
      this.validateItems(param, prop);
      this.validateSizesArray(param, prop);

      this.route.pop();
    }
  }

  checkPropertyOfProperty(value) {
    let regex = new RegExp('^[|]+[^|]+[|]$');
    if (regex.test(value)) {
      let query_value;
      let query = 'query_value = (' + value.trimChar('|').replaceAll('$', 'this.param') + ')';
      eval(query);
      return query_value;
    } else {
      return value;
    }
  }

  validateTypesObject(param, prop) {
    if (prop.type !== undefined) {
      switch (prop.type) {
        case 'string':
        case 'boolean':
        case 'number':
          if (typeof (param[prop.id]) !== prop.type) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_object, prop);
          }
          break;
        case 'object':
          if (typeof (param[prop.id]) !== prop.type || Array.isArray(param[prop.id])) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_object, prop);
          }
          break;
        case 'array':
          if (!Array.isArray(param[prop.id])) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_object, prop);
          }
          break;
        default:
          this.setThrow(Msg(this.config.languague).bad_request.unknown_type, prop);
          break;
      }
    }
  }

  validateTypesArray(param, prop) {
    if (prop.type !== undefined) {
      switch (prop.type) {
        case 'string':
        case 'boolean':
        case 'number':
          if (typeof (param[prop.index]) !== prop.type) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_array, prop);
          }
          break;
        case 'object':
          if (typeof (param[prop.index]) !== prop.type || Array.isArray(param[prop.index])) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_array, prop);
          }
          break;
        case 'array':
          if (!Array.isArray(param[prop.index])) {
            this.setThrow(Msg(this.config.languague).bad_request.not_match_type_in_array, prop);
          }
          break;
        default:
          this.setThrow(Msg(this.config.languague).bad_request.unknown_type, prop);
          break;
      }
    }
  }

  validateRegexObject(param, prop) {
    if (prop.regex_type !== undefined) {
      let str;
      switch (prop.type) {
        case 'string':
          str = param[prop.id];
          break;
        case 'object':
        case 'array':
          str = JSON.stringify(param[prop.id]);
          break;
        default:
          str = param[prop.id].toString();
          break;
      }

      if (!(new RegExp(this.config.regex.regex[prop.regex_type])).test(str)) {
        this.setThrow(
          Msg(this.config.languague).bad_request.wrong_pattern_in_object + '  ' + this.config.regex.message[this.config.languague][prop.regex_type],
          prop);
      }
    }
  }

  validateRegexArray(param, prop) {
    if (prop.regex_type !== undefined) {
      let str;
      switch (prop.type) {
        case 'string':
          str = param[prop.index];
          break;
        case 'object':
        case 'array':
          str = JSON.stringify(param[prop.index]);
          break;
        default:
          str = param[prop.index].toString();
          break;
      }

      if (!(new RegExp(this.config.regex.regex[prop.regex_type])).test(str)) {
        this.setThrow(
          Msg(this.config.languague).bad_request.wrong_pattern_in_array + '  ' + this.config.regex.message[this.config.languague][prop.regex_type],
          prop);
      }
    }
  }

  validateSizesObject(param, prop) {
    switch (prop.type) {
      case 'string':
        if (prop.min_length !== undefined) {
          if (param[prop.id].length < prop.min_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_length_in_object, prop);
          }
        }
        if (prop.max_length !== undefined) {
          if (param[prop.id].length > prop.max_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_length_in_object, prop);
          }
        }
        if (prop.exact_length !== undefined) {
          if (param[prop.id].length !== prop.exact_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_length_in_object, prop);
          }
        }
        break;
      case 'array':
        if (prop.min_items !== undefined) {
          if (param[prop.id].length < prop.min_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_items_in_object, prop);
          }
        }
        if (prop.max_items !== undefined) {
          if (param[prop.id].length > prop.max_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_items_in_object, prop);
          }
        }
        if (prop.exact_items !== undefined) {
          if (param[prop.id].length !== prop.exact_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_items_in_object, prop);
          }
        }
        break;
      case 'object':
        if (prop.min_items !== undefined) {
          if (Object.entries(param[prop.id]).length < prop.min_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_items_in_object, prop);
          }
        }
        if (prop.max_items !== undefined) {
          if (Object.entries(param[prop.id]).length > prop.max_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_items_in_object, prop);
          }
        }
        if (prop.exact_items !== undefined) {
          if (Object.entries(param[prop.id]).length !== prop.exact_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_items_in_object, prop);
          }
        }
        break;
      default:
        break;
    }
  }

  validateSizesArray(param, prop) {
    switch (prop.type) {
      case 'string':
        if (prop.min_length !== undefined) {
          if (param[prop.index].length < prop.min_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_length_in_array, prop);
          }
        }
        if (prop.max_length !== undefined) {
          if (param[prop.index].length > prop.max_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_length_in_array, prop);
          }
        }
        if (prop.exact_length !== undefined) {
          if (param[prop.index].length !== prop.exact_length) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_length_in_array, prop);
          }
        }
        break;
      case 'array':
        if (prop.min_items !== undefined) {
          if (param[prop.index].length < prop.min_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_items_in_array, prop);
          }
        }
        if (prop.max_items !== undefined) {
          if (param[prop.index].length > prop.max_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_items_in_array, prop);
          }
        }
        if (prop.exact_items !== undefined) {
          if (param[prop.index].length !== prop.exact_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_items_in_array, prop);
          }
        }
        break;
      case 'object':
        if (prop.min_items !== undefined) {
          if (Object.entries(param[prop.index]).length < prop.min_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_items_in_array, prop);
          }
        }
        if (prop.max_items !== undefined) {
          if (Object.entries(param[prop.index]).length > prop.max_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_items_in_array, prop);
          }
        }
        if (prop.exact_items !== undefined) {
          if (Object.entries(param[prop.index]).length !== prop.exact_items) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_exact_items_in_array, prop);
          }
        }
        break;
      default:
        break;
    }
  }

  validateValuesObject(param, prop) {
    switch (prop.type) {
      case 'number':
        if (prop.min_value !== undefined) {
          if (param[prop.id] < prop.min_value) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_value_in_object, prop);
          }
        }
        if (prop.max_value !== undefined) {
          if (param[prop.id] > prop.max_value) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_value_in_object, prop);
          }
        }
        break;
      default:
        break;
    }
  }

  validateValuesArray(param, prop) {
    switch (prop.type) {
      case 'number':
        if (prop.min_value !== undefined) {
          if (param[prop.index] < prop.min_value) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_minimum_value_in_array, prop);
          }
        }
        if (prop.max_value !== undefined) {
          if (param[prop.index] > prop.max_value) {
            this.setThrow(Msg(this.config.languague).bad_request.wrong_maximum_value_in_array, prop);
          }
        }
        break;
      default:
        break;
    }
  }

  validateItems(param, prop) {
    switch (prop.type) {
      case 'object':
        if (prop.properties !== undefined) {
          this.validateObject(param[prop.id], prop.properties);
        }
        break;
      case 'array':
        if (prop.item != undefined) {
          prop.item.id = prop.id;
          this.validateArray(param[prop.id], prop.item);
        }
        break;
      default:
        break;
    }
  }

  setThrow(message, prop) {
    this.throw(message.replaceAll('[ID]', prop.id)
      .replaceAll('[TYPE]', prop.type)
      .replaceAll('[MIN_ITEMS]', prop.min_items)
      .replaceAll('[MAX_ITEMS]', prop.max_items)
      .replaceAll('[EXACT_ITEMS]', prop.exact_items)
      .replaceAll('[MIN_LENGTH]', prop.min_length)
      .replaceAll('[MAX_LENGTH]', prop.max_length)
      .replaceAll('[EXACT_LENGTH]', prop.exact_length)
      .replaceAll('[MIN_VALUE]', prop.min_value)
      .replaceAll('[MAX_VALUE]', prop.max_value)
      + '  ' + Msg(this.config.languague).bad_request.property_path
        .replace('[PATH]', this.route.join('')));
  }

  throw(message) {
    this.response.status = false;
    this.response.message = message
    throw 401;
  }
}
