import { defineStore } from 'pinia'
import { IUser } from "@/interfaces/IUser"
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            // for initially empty lists
            user: {} as IUser
        }
    },
    actions: {
        setUser(user : IUser) {
            this.user = user
        }
    }
})
