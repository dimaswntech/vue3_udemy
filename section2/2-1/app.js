const vm = Vue.createApp({
    data() {
        return {
            firstName: "Boby",
            lastName: "Bar",
            middleName:'',
            url:"https://google.com",
            anchorHtml:"<a href=\"https://google.com\">Goggle</a>",
            age: 20
        }
    },
    methods: {

        increment(){
            return this.age++
        },
        decrement(){
            return this.age--
        },
        updateLastName(msg, event){
            // event.preventDefault()
            // console.log(msg)
            return this.lastName = event.target.value
        },
        updateMidName(event){
            return this.middleName = event.target.value
        }
    },
    computed : {
        fullName(){
            console.log("fullname()")
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
    },
    watch:{
        age(newVal, oldval){
            console.log("still changed")
            setTimeout(()=>{
                this.age = 20
            }, 2000)
        }
    }
}).mount('#app')
// setTimeout(()=>{
//     vm.firstName = "Hardy"
// }, 2000)