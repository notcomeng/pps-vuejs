import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
    en: {
        messages: {
            required(field){
               return 'foo'
            },
            min(field, args){
                return field + 'ต้องมีอย่างน้อย ' + args[0]
            }
        },
        attributes: {
            firstName: 'ชื่อ'
        }
    }
}

Vue.use(VeeValidate,{
    dictionary: dictionary
})