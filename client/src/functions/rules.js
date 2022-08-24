import { helpers, required,email , minLength ,minValue , maxLength ,maxValue ,numeric} from "@vuelidate/validators";




const require = helpers.withMessage('Ce champs est obligatoire!',required)

const lgmin =(min) =>helpers.withMessage(`Ce champs doit avoir au moins ${min} caractères !`,minLength(min))
const lgmax =(max) =>helpers.withMessage(`Ce champs doit avoir au plus ${max} caractères !`,maxLength(max))

const vlmin =(min) =>helpers.withMessage(`Ce champs doit avoir au moins ${min} valeurs !`,minValue(min))
const vlmax =(max) =>helpers.withMessage(`Ce champs doit avoir au plus ${max} valeurs !`,maxValue(max))

const ValidEmail =helpers.withMessage(`la valeur n'est pas une adresse e-mail valide`,email)
const ValidNumeri =helpers.withMessage('la valeur doit être numérique',numeric)





export{
    require,
    lgmin,
    lgmax,
    ValidEmail,
    ValidNumeri,
    vlmin,
    vlmax

}