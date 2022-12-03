import {IRepository} from "@/interfaces/repository/IRepository";
import { useFetch } from "@/.nuxt/imports";
import { Ref } from "@vue/reactivity";
import {ref} from "vue";

let token = ''
export abstract class Repository<T> implements IRepository<T> {
    static apiBaseURL = 'http://localhost:3600'
    context

    constructor(context : String) {
        this.context = context
    }
    static set token(newToken) {
        token = newToken
    }
    static get token() {
        return token
    }
    async create(obj : T) : Promise<Ref<T>> {
        const payload = typeof obj === 'object' ? JSON.stringify(obj) : obj
        const data = await $fetch(Repository.apiBaseURL + '/' + this.context, {
            method: 'POST',
            body: payload,
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>ref(data)
    }
    async update(id : string, obj : T) : Promise<Ref<T>> {
        const payload = typeof obj === 'object' ? JSON.stringify(obj) : obj
        const data = await $fetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            method: 'PATCH',
            body: payload,
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>ref(data)
    }
    async delete(id : string) : Promise<Ref<boolean>> {
        const data = await $fetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<boolean>>ref(data)
    }
    async getById(id : string) : Promise<Ref<T>> {
        const data = await $fetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>ref(data)
    }
    async getAll() : Promise<Ref<T[]>> {
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context + '/', {
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T[]>>data
    }
}
