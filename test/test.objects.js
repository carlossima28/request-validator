obj = {
  success: {
    "success-type-string": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          string_param: "String"
        }
      },
      param: [{
        string_param: "String"
      }, {
        id: "string_param",
        type: "string"
      }]
    },
    "success-type-boolean": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          boolean_param: true
        }
      },
      param: [{
        boolean_param: true
      }, {
        id: "boolean_param",
        type: "boolean"
      }]
    },
    "success-type-number": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          number_param: 12.24
        }
      },
      param: [{
        number_param: 12.24
      }, {
        id: "number_param",
        type: "number"
      }]
    },
    "success-type-object": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          object_param: {}
        }
      },
      param: [{
        object_param: {}
      }, {
        id: "object_param",
        type: "object"
      }]
    },
    "success-type-array": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          array_param: []
        }
      },
      param: [{
        array_param: []
      }, {
        id: "array_param",
        type: "array"
      }]
    },
    "success-min-items-object": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          object_param: {
            el1: 1
          }
        }
      },
      param: [{
        object_param: {
          el1: 1
        }
      }, {
        id: "object_param",
        type: "object",
        min_items: 1
      }]
    },
    "success-max-items-object": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          object_param: {
            el1: 1,
            el2: 2,
            el3: 3,
            el4: 4,
            el5: 5
          }
        }
      },
      param: [{
        object_param: {
          el1: 1,
          el2: 2,
          el3: 3,
          el4: 4,
          el5: 5
        }
      }, {
        id: "object_param",
        type: "object",
        max_items: 5
      }]
    },
    "success-exact-items-object": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          object_param: {
            el1: 1,
            el2: 2,
            el3: 3,
            el4: 4,
            el5: 5
          }
        }
      },
      param: [{
        object_param: {
          el1: 1,
          el2: 2,
          el3: 3,
          el4: 4,
          el5: 5
        }
      }, {
        id: "object_param",
        type: "object",
        exact_items: 5
      }]
    },
    "success-min-items-array": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          array_param: [1]
        }
      },
      param: [{
        array_param: [1]
      }, {
        id: "array_param",
        type: "array",
        min_items: 1
      }]
    },
    "success-max-items-array": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          array_param: [1, "2", true, 4, "5"]
        }
      },
      param: [{
        array_param: [1, "2", true, 4, "5"]
      }, {
        id: "array_param",
        type: "array",
        max_items: 5
      }]
    },
    "success-exact-items-array": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          array_param: [1, "2", true, 4, "5"]
        }
      },
      param: [{
        array_param: [1, "2", true, 4, "5"]
      }, {
        id: "array_param",
        type: "array",
        exact_items: 5
      }]
    },
    "success-min-length-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          string_param: "Hi"
        }
      },
      param: [{
        string_param: "Hi"
      }, {
        id: "string_param",
        type: "string",
        min_length: 1
      }]
    },
    "success-max-length-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          string_param: "Hi"
        }
      },
      param: [{
        string_param: "Hi"
      }, {
        id: "string_param",
        type: "string",
        max_length: 3
      }]
    },
    "success-exact-length-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          string_param: "Hi"
        }
      },
      param: [{
        string_param: "Hi"
      }, {
        id: "string_param",
        type: "string",
        exact_length: 2
      }]
    },
    "success-properties-object": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          object_param: {
            el_string: "string",
            el_boolean: true,
            el_number: 1000,
            el_array: [],
            el_object: {
              el_number: 2
            }
          }
        }
      },
      param: [{
        object_param: {
          el_string: "string",
          el_boolean: true,
          el_number: 1000,
          el_array: [],
          el_object: {
            el_number: 2
          }
        }
      }, {
        id: "object_param",
        type: "object",
        properties: [{
          id: "el_string",
          type: "string"
        }, {
          id: "el_boolean",
          type: "boolean"
        }, {
          id: "el_number",
          type: "number"
        }, {
          id: "el_array",
          type: "array"
        }, {
          id: "el_object",
          type: "object",
          properties: [{
            id: "el_number",
            type: "number"
          }]
        }]
      }]
    },
    "success-item-type-array": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          array_param: ["one", "two", "three"]
        }
      },
      param: [{
        array_param: ["one", "two", "three"]
      }, {
        id: "array_param",
        type: "array",
        item: {
          type: "string"
        }
      }]
    },
    "success-regex-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          pswd_string: "pswddD1*"
        }
      },
      param: [{
        pswd_string: "pswddD1*"
      }, {
        id: "pswd_string",
        type: "string",
        regex: "^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$"
      }]
    },
    "success-item-regex-array": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          pswd_string: ["pswddD1*"]
        }
      },
      param: [{
        pswd_string: ["pswddD1*"]
      }, {
        id: "pswd_string",
        type: "array",
        item: {
          type: "string",
          regex: "^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$"
        }
      }]
    },
    "success-regex_type-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          pswd_string: "pswddD1*"
        }
      },
      param: [{
        pswd_string: "pswddD1*"
      }, {
        id: "pswd_string",
        type: "string",
        regex_type: "password"
      }]
    },
    "success-item-regex_type-array": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          pswd_string: ["pswddD1*"]
        }
      },
      param: [{
        pswd_string: ["pswddD1*"]
      }, {
        id: "pswd_string",
        type: "array",
        item: {
          type: "string",
          regex_type: "password"
        }
      }]
    },
    "success-required-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          string_param: 5
        }
      },
      param: [{
        string_param: 5
      }, {
        id: "string_param",
        type: "string",
        required: false
      }]
    },
    "success-reference-required-object": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          world: {
            person: {
              sex: 'female',
              age: 28,
              militar_service: {
                country: false
              }
            }
          }
        }
      },
      param: [{
        world: {
          person: {
            sex: 'female',
            age: 28,
            militar_service: {
              country: false
            }
          }
        }
      }, {
        id: "world",
        type: "object",
        properties: [{
          id: "person",
          type: "object",
          properties: [{
            id: "sex",
            type: "string"
          }, {
            id: "age",
            type: "number"
          }, {
            id: "militar_service",
            type: "object",
            required: "|$.world.person.sex === 'male'|",
            properties: [{
              id: "country",
              type: "string"
            }]
          }]
        }]
      }]
    },
    "success-remove_unknown": {
      config: {
        remove_unknown: true
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          person: {
            name: "John"
          }
        }
      },
      param: [{
        person: {
          sex: 'male',
          age: 30,
          name: "John"
        }
      }, {
        id: "person",
        type: "object",
        properties: [{
          id: "sex",
          type: "string",
          required: false
        }, {
          id: "name",
          type: "string"
        }]
      }]
    },
    "success-extra_validation": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          person: {
            sex: 'female'
          }
        }
      },
      param: [{
        person: {
          sex: 'female'
        }
      }, {
        id: "person",
        type: "object",
        properties: [{
          id: "sex",
          type: "string",
          required: true
        }]
      }, function (param) {
        if (param.person.sex === 'male') {
          return 'Must be a female';
        }
      }]
    },
    "success-min-value-number": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          number_param: 20
        }
      },
      param: [{
        number_param: 20
      }, {
        id: "number_param",
        type: "number",
        min_value: 10
      }]
    },
    "success-max-value-number": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          number_param: 20
        }
      },
      param: [{
        number_param: 20
      }, {
        id: "number_param",
        type: "number",
        max_value: 20
      }]
    },
    "success-allowed-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: true,
        message: "OK",
        data: {
          status: "A"
        }
      },
      param: [{
        status: "A"
      }, {
        id: "status",
        type: "string",
        allowed: ["A", "S", "E"]
      }]
    },
  },
  fail: {
    "fail-type-string": {
      resp: {
        status: false,
        message: "The type for 'string_param' must be 'string'.  The path of the fail value is root['string_param']."
      },
      param: [{
        string_param: 10
      }, {
        id: "string_param",
        type: "string"
      }]
    },
    "fail-type-boolean": {
      resp: {
        status: false,
        message: "The type for 'boolean_param' must be 'boolean'.  The path of the fail value is root['boolean_param']."
      },
      param: [{
        boolean_param: "true"
      }, {
        id: "boolean_param",
        type: "boolean"
      }]
    },
    "fail-type-number": {
      resp: {
        status: false,
        message: "The type for 'number_param' must be 'number'.  The path of the fail value is root['number_param']."
      },
      param: [{
        number_param: "245"
      }, {
        id: "number_param",
        type: "number"
      }]
    },
    "fail-type-object": {
      resp: {
        status: false,
        message: "The type for 'object_param' must be 'object'.  The path of the fail value is root['object_param']."
      },
      param: [{
        object_param: []
      }, {
        id: "object_param",
        type: "object"
      }]
    },
    "fail-type-array": {
      resp: {
        status: false,
        message: "The type for 'array_param' must be 'array'.  The path of the fail value is root['array_param']."
      },
      param: [{
        object_param: {}
      }, {
        id: "array_param",
        type: "array"
      }]
    },
    "fail-min-items-object": {
      resp: {
        status: false,
        message: "The minimum of items for 'object_param' are 1.  The path of the fail value is root['object_param']."
      },
      param: [{
        object_param: {}
      }, {
        id: "object_param",
        type: "object",
        min_items: 1
      }]
    },
    "fail-max-items-object": {
      resp: {
        status: false,
        message: "The maximum of items for 'object_param' are 5.  The path of the fail value is root['object_param']."
      },
      param: [{
        object_param: {
          el1: 1,
          el2: 2,
          el3: 3,
          el4: 4,
          el5: 5,
          el6: 6
        }
      }, {
        id: "object_param",
        type: "object",
        max_items: 5
      }]
    },
    "fail-exact-items-object": {
      resp: {
        status: false,
        message: "The number of items for 'object_param' must be 5.  The path of the fail value is root['object_param']."
      },
      param: [{
        object_param: {
          el1: 1,
          el2: 2,
          el3: 3,
          el4: 4,
          el5: 5,
          el6: 6
        }
      }, {
        id: "object_param",
        type: "object",
        exact_items: 5
      }]
    },
    "fail-min-items-array": {
      resp: {
        status: false,
        message: "The minimum of items for 'array_param' are 1.  The path of the fail value is root['array_param']."
      },
      param: [{
        array_param: []
      }, {
        id: "array_param",
        type: "array",
        min_items: 1
      }]
    },
    "fail-max-items-array": {
      resp: {
        status: false,
        message: "The maximum of items for 'array_param' are 5.  The path of the fail value is root['array_param']."
      },
      param: [{
        array_param: [1, "2", true, 4, "5", false]
      }, {
        id: "array_param",
        type: "array",
        max_items: 5
      }]
    },
    "fail-exact-items-array": {
      resp: {
        status: false,
        message: "The number of items for 'array_param' must be 5.  The path of the fail value is root['array_param']."
      },
      param: [{
        array_param: [1, "2", true, 4, "5", false]
      }, {
        id: "array_param",
        type: "array",
        exact_items: 5
      }]
    },
    "fail-min-length-string": {
      resp: {
        status: false,
        message: "The minimum length for 'string_param' is 1.  The path of the fail value is root['string_param']."
      },
      param: [{
        string_param: ""
      }, {
        id: "string_param",
        type: "string",
        min_length: 1
      }]
    },
    "fail-max-length-string": {
      resp: {
        status: false,
        message: "The maximum length for 'string_param' is 5.  The path of the fail value is root['string_param']."
      },
      param: [{
        string_param: "maximum length"
      }, {
        id: "string_param",
        type: "string",
        max_length: 5
      }]
    },
    "fail-exact-length-string": {
      resp: {
        status: false,
        message: "The length for 'string_param' must be 5.  The path of the fail value is root['string_param']."
      },
      param: [{
        string_param: "maximum length"
      }, {
        id: "string_param",
        type: "string",
        exact_length: 5
      }]
    },
    "fail-properties-object": {
      resp: {
        status: false,
        message: "The type for 'el_number' must be 'number'.  The path of the fail value is root['object_param']['el_object']['el_number']."
      },
      param: [{
        object_param: {
          el_string: "string",
          el_boolean: true,
          el_number: 1000,
          el_array: [],
          el_object: {
            el_number: "2"
          }
        }
      }, {
        id: "object_param",
        type: "object",
        properties: [{
          id: "el_string",
          type: "string"
        }, {
          id: "el_boolean",
          type: "boolean"
        }, {
          id: "el_number",
          type: "number"
        }, {
          id: "el_array",
          type: "array"
        }, {
          id: "el_object",
          type: "object",
          properties: [{
            id: "el_number",
            type: "number"
          }]
        }]
      }]
    },
    "fail-item-type-array": {
      resp: {
        status: false,
        message: "A value inside of 'array_param' must be 'string'.  The path of the fail value is root['array_param'][1]."
      },
      param: [{
        array_param: ["one", 2, "three"]
      }, {
        id: "array_param",
        type: "array",
        item: {
          type: "string"
        }
      }]
    },
    "fail-regex-string": {
      resp: {
        status: false,
        message: "The pattern for 'pswd_string' is incorrect.  The path of the fail value is root['pswd_string']."
      },
      param: [{
        pswd_string: "pswddd1*"
      }, {
        id: "pswd_string",
        type: "string",
        regex: "^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$"
      }]
    },
    "fail-item-regex-array": {
      resp: {
        status: false,
        message: "The pattern for a value inside of 'pswd_string' is incorrect.  The path of the fail value is root['pswd_string'][0]."
      },
      param: [{
        pswd_string: ["pswddd1*"]
      }, {
        id: "pswd_string",
        type: "array",
        item: {
          type: "string",
          regex: "^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$"
        }
      }]
    },
    "fail-regex_type-string": {
      resp: {
        status: false,
        message: "The pattern for 'pswd_string' is incorrect.  The password must contain at least one number, one uppercase letter, one lowercase letter, and one of the following special characters (#?! @ $% ^ & * -). The size of the string must be a length between 8 and 40.  The path of the fail value is root['pswd_string']."
      },
      param: [{
        pswd_string: "pswddd1*"
      }, {
        id: "pswd_string",
        type: "string",
        regex_type: "password"
      }]
    },
    "fail-item-regex_type-array": {
      resp: {
        status: false,
        message: "The pattern for a value inside of 'pswd_string' is incorrect.  The password must contain at least one number, one uppercase letter, one lowercase letter, and one of the following special characters (#?! @ $% ^ & * -). The size of the string must be a length between 8 and 40.  The path of the fail value is root['pswd_string'][0]."
      },
      param: [{
        pswd_string: ["pswddd1*"]
      }, {
        id: "pswd_string",
        type: "array",
        item: {
          type: "string",
          regex_type: "password"
        }
      }]
    },
    "fail-required-string": {
      resp: {
        status: false,
        message: "The type for 'string_param' must be 'string'.  The path of the fail value is root['string_param']."
      },
      param: [{
        string_param: 5
      }, {
        id: "string_param",
        type: "string",
        required: true
      }]
    },
    "fail-reference-required-object": {
      resp: {
        status: false,
        message: "The type for 'militar_service' must be 'object'.  The path of the fail value is root['world']['person']['militar_service']."
      },
      param: [{
        world: {
          person: {
            sex: 'male',
            age: 28
          }
        }
      }, {
        id: "world",
        type: "object",
        properties: [{
          id: "person",
          type: "object",
          properties: [{
            id: "sex",
            type: "string"
          }, {
            id: "age",
            type: "number"
          }, {
            id: "militar_service",
            type: "object",
            required: "|$.world.person.sex === 'male'|",
            properties: [{
              id: "country",
              type: "string"
            }]
          }]
        }]
      }]
    },
    "fail-extra_validation": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: false,
        message: "Must be a female"
      },
      param: [{
        person: {
          sex: 'male'
        }
      }, {
        id: "person",
        type: "object",
        properties: [{
          id: "sex",
          type: "string",
          required: true
        }]
      }, function (param) {
        if (param.person.sex === 'male') {
          return 'Must be a female';
        }
      }]
    },
    "fail-min-value-number": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: false,
        message: "The minimum value for 'number_param' is 10.  The path of the fail value is root['number_param']."
      },
      param: [{
        number_param: 5
      }, {
        id: "number_param",
        type: "number",
        min_value: 10
      }]
    },
    "fail-max-value-number": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: false,
        message: "The maximum value for 'number_param' is 20.  The path of the fail value is root['number_param']."
      },
      param: [{
        number_param: 25
      }, {
        id: "number_param",
        type: "number",
        max_value: 20
      }]
    },
    "fail-allowed-string": {
      config: {
        remove_unknown: false
      },
      resp: {
        status: false,
        message: "The value for 'status' is not allowed.  Allowed values: [\"A\",\"S\",\"E\"].  The path of the fail value is root['status']."
      },
      param: [{
        status: "R"
      }, {
        id: "status",
        type: "string",
        allowed: ["A", "S", "E"]
      }]
    },
  }
}

dispatch = function (context, fn, args) {
  fn = (typeof fn == "function") ? fn : window[fn];
  return fn.apply(context, args || []);
}