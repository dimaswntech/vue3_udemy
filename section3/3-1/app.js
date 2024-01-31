Vue.createApp({
    data() {
        return {
            perspective : 100,
            rotateX : 0,
            rotateY : 0,
            rotateZ : 0,
            color : '8d81f3'
        }
    },
    methods:{
        resetAllVal(){
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copyVal() {
            let text = `transform:${this.box.transform}`
            await navigator.clipboard.writeText(text)

            alert("CSS copied")
        }
    },
    computed:{
        box(){
            return[{
                transform:`
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }, {background: `#${this.color}`}]
        },
        // color(){
        //     return{background: `#${this.color}`}
        // }
    }
}).mount('#app')