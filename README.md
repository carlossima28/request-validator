# Instalation

`npm install request-validator-csima --save`

# How to use?

```sh
var RequestValidator = require('request-validator-csima');

var request_validator = new RequestValidator(configuration);
var validation_response = request_validator.validate(parameters, properties, extra_validation);
```

# Description

Parameter **configuration** is an object with the following properties.

* **languague**: String languague to use for messages response.  Available: English(**english**) and Spanish(**spanish**)
* **remove_unknown**: Boolean indicating if in the processed parameters, properties not recognized or properties with the the **required** flag as false would be removed.
* **regex**: JSON object with the following format example:

```sh
{
    "regex": {
        "password": "^(?=.*?[A-ZÑ])(?=.*?[a-zñ])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$",
        "email": "(^(?=.{3,40}$)[a-zA-Z0-9_\\.-ñÑ]+@[\\da-zA-Z\\.-ñÑ]+\\.[\\da-zA-Z\\.-ñÑ]+$)"
    },
    "message": {
        "english": {
            "password": "The password must contain at least one number, one uppercase letter...",
            "email": "The string must be in email format"
        },
        "spanish": {
            "password": "La contraseña debe contener al menos un número, una letra minúscula...",
            "email": "La cadena debe estar en formato de correo electrónico",
        }
    }
}
```

Parameter **parameters** is an object to be evaluated.

Parameter **properties** is an object that describes how parameters need to be.  Allowed properties:

* **id**: String property name.
* **type**: String property type.  Allowed values: string, number, boolean, object and array.
* **default_value**: Default value for a property in case that it is undefined.
* **allowed**: Array with the allowed values.  Only for number and string type.
* **allow_single**: Boolean indicating if the value of an array can be directly an element type of the array, so in this case the value will automatically be inside an array when the parameter is processed.  Only for the array type.
* **allow_undefined**: Boolean indicating if the value can be undefined, so when this property is true and the value is undefined the value will not be evaluated.  Available for all types.
* **allow_null**: Boolean indicating if the value can be null, so when this property is true and the value is null the value will not be evaluated.  Available for all types.
* **properties**: Array with objects that describe properties.  Only for the object type.
* **item**: Object that contains validations for elements inside of an array.  Only for the array type.
* **regex**: String regular expresion to use for the property.  Available for all types.  For types object and array the value used would be the serialized.
* **regex_type**: String regular expresion key to use for the property.  Available for all types.  For types object and array the value used would be the serialized.
* **min_items**: Minimum number of elements.  For object type, it indicates the minumum of properties to be a valid value, while for array type, it indicaste the minimum of elements inside to be a valid value.
* **max_items**: Minimum number of elements.  For object type, it indicates the maximum of properties to be a valid value, while for array type, it indicaste the maximum of elements inside to be a valid value.
* **exact_items**: Exact number of elements.  For object type, it indicates the number of properties to be a valid value, while for array type, it indicaste the number of elements inside to be a valid value.
* **min_length**: Minumum number of characteres.  Only for string type.
* **max_length**: Maximum number of characteres.  Only for string type.
* **min_value**: Minumum value allowed.  Only for number type.
* **max_value**: Maximum value allowed.  Only for number type.
* **exact_length**: Exact number of characteres.  Only for string type.
* **required**: Boolean indicating if the value is necessary and if it will be evaluated.

A referential operation is when a property depends on other operation.  To do this the value must be a string that starts and ends with `|`.  To make a reference in the operation for the parameters you need to use `$`.  The resulting value will be the assigned value.  Only available for the property `required`, `allow_undefined` and `allow_null`.  Example:

`required: '|$.persona.age > 20|'`

Parameter **extra_validation** is an optional function callback to make a extra validation for parameters.  The function handles an only parameter, the proccesed parameters, in case to fail the validation, it will be necessary return a string with the fail detail to be shown, otherwise is not necessary to make a return.

The **validation_response** will be an object with next parameters:

* **status**: Boolean that indicates the operation status.
* **message**: String message with the operation description.
* **data**: Parameters proccesed.