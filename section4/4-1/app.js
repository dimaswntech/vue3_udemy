let vm = Vue.createApp({
    // beforeCreate(){
    //     console.log(`beforecreated loo and ${this.message}`)
    // },
    // created(){
    //     console.log(`created loo and ${this.message}`)
    // },
    // beforeMount(){
    //     console.log(`beforemount loo and ${this.message}`)
    // },
    // mounted(){
    //     console.log(`mounted loo and ${this.message}`)
    // },
    // beforeUpdate(){
    //     console.log(`beforeupdate() loo ${this.message}`)
    // },
    // updated(){
    //     console.log(`updated loo ${this.message}`)
    // },
    // beforeUnmount(){
    //     console.log(`beforeunmount loo and ${this.message}`)
    // },
    // unmounted(){
    //     console.log(`unmounted loo and ${this.message}`)
    // },
})
vm.component('hello',{
    template: `<h1>{{message}}</h1>`,
    data(){
        return{
            message:'hewwo'
        }
    }
})
vm.mount('#app')