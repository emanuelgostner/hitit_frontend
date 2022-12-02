import { defineStore } from 'pinia'
import { IUser } from "@/interfaces/IUser"
import { IAuth } from "@/interfaces/IAuth";
import {User} from "@/models/User";
import {Repository} from "@/repositories/Repository";
// const config = useRuntimeConfig()
// const baseURL = config.public.baseURL
const baseURL = "http://localhost:3600"
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            // for initially empty lists
            user: {} as IUser,
            auth: {} as IAuth,
            loggedIn: false as boolean
        }
    },
    actions: {
        setUser(user : IUser) {
            this.user = user
        },
        async authUser(email, password) {
            if (email && password) {
                try {
                    const data : { user : IUser, auth : IAuth } = await $fetch(`${baseURL}/auth`, {
                        method: 'POST',
                        body: { email, password }
                    })
                    this.auth = data.auth
                    this.user = new User(data.user.email, data.user.name, data.user.userId)
                    this.loggedIn = true
                    Repository.token = this.getBearerToken()
                    return { auth: this.auth, user: this.user}
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
                    await this.authUser(email, password)
                    return { auth: this.auth, user: this.user}
                }catch (e) {
                    console.log(e)
                }
            }
        },
        getBearerToken() {
            return 'Bearer ' + this.auth.accessToken
        }
    }
})
