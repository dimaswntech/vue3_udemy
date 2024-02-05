import {defineStore} from "pinia";
import {auth, userCollection} from "@/includes/firebase.js";

export default defineStore("user", {
    state:()=>({
        userLoggedIn:false
    }),
    actions:{
        async register(val){
            const userCred = await auth.createUserWithEmailAndPassword(
                val.email, val.password
            )
            await userCollection.doc(userCred.user.uid).set({
                name: val.name,
                email: val.email,
                age: val.age,
                country: val.country
            })
            await userCred.user.updateProfile({
            displayName:val.name
            })
            this.userLoggedIn = true
        },
        async authenticate(val){
            await auth.signInWithEmailAndPassword(val.email, val.password)

            this.userLoggedIn = true
        },
        async signOut(){
            await auth.signOut()

            this.userLoggedIn = false
        }
    }
})