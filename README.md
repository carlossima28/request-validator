# Instalation

`npm install request-validator-csima --save`

# Description

Parameter **properties**.

* **id**: String property name.
* **type**: String property type.  Allowed values: string, number, boolean, object and array.
* **default_value**: Default value for a property in case that it is undefined.
* **properties**: Array with objects that describe properties.
* **item**: Object that contains validations for elements inside of an array.
* **regex_type**: String regular expresion key to use for the property.  Available for all types.  For types object and array the value used would be the serialized.
* **min_items**: Minimum number of elements.  For object type, it indicates the minumum of properties to be a valid value, while for array type, it indicaste the minimum of elements inside to be a valid value.
* **max_items**: Minimum number of elements.  For object type, it indicates the maximum of properties to be a valid value, while for array type, it indicaste the maximum of elements inside to be a valid value.
* **exact_items**: Exact number of elements.  For object type, it indicates the number of properties to be a valid value, while for array type, it indicaste the number of elements inside to be a valid value.
* **min_length**: Minumum number of characteres.  Only for string type.
* **max_length**: Maximum number of characteres.  Only for string type.
* **exact_length**: Exact number of characteres.  Only for string type.
* **required**: Boolean indicating if the value is necessary and if it will be evaluated.

Parameter **configuration**

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
