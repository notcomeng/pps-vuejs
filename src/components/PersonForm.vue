<template>
    
    <div>
        <h1>
        Person
    </h1>
    <div class="field">
        <input v-validate="'required|min:3'" type="text" v-model="person.firstName" name="firstName" class="input"
        :class="className('firstName')">
       <p class="help is-danger">
           {{errors.first('firstName')}}
       </p> 
    </div>
            
   <pre>{{errors}}</pre>
    </div>
    
</template>

<script>
export default {
    methods: {
        className(field) {
            return this.errors.has(field) ? 'input is-danger animated infinite heartBeat delay-2s' : 'input'
        }
    },
    data() {
        return {
            person: {}
        }
    }
}
</script>
