import { defineStore } from 'pinia'
import { IUser } from "@/interfaces/IUser"
import { IAuth } from "@/interfaces/IAuth";
import {User} from "@/models/User";
// const config = useRuntimeConfig()
// const baseURL = config.public.baseURL
const baseURL = "http://localhost:3600"
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            // for initially empty lists
            user: {} as IUser,
            auth: {} as IAuth
        }
    },
    actions: {
        setUser(user : IUser) {
            this.user = user
        },
        async authUser(email, password) {
            if (email && password) {
                try {
                    const data : IAuth = await $fetch(`${baseURL}/auth`, {
                        method: 'POST',
                        body: { email, password }
                    })
                    console.log(data)
                    this.auth = data
                    this.user = new User(email)
                    return this.auth
                }catch (e) {
                    console.log(e)
                }
            }
        },
        async createUser(email, password) {
            if (email && password) {
                try {
                    const data = await $fetch(`${baseURL}/users`, {
                        method: 'POST',
                        body: { email, password }
                    })
                    console.log(data)
                    return data
                }catch (e) {
                    console.log(e)
                }
            }
        }
    }
})
