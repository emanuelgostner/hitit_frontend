import {IRepository} from "@/interfaces/repository/IRepository";
import { useFetch } from "@/.nuxt/imports";
import { Ref } from "@vue/reactivity";
import { useUserStore } from "@/stores/useUserStore";
import {IToken} from "@/interfaces/repository/IToken";

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
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context, {
            body: obj,
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>data
    }
    async update(id : string, obj : T) : Promise<Ref<T>> {
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            body: obj,
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>data
    }
    async delete(id : string) : Promise<Ref<boolean>> {
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<boolean>>data
    }
    async getById(id : string) : Promise<Ref<T>> {
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context + '/' + id, {
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T>>data
    }
    async getAll() : Promise<Ref<T[]>> {
        console.log('this.getToken in Reposi', Repository.token)
        const { data } = await useFetch(Repository.apiBaseURL + '/' + this.context + '/', {
            headers: {
                Authorization: Repository.token
            }
        })
        return <Ref<T[]>>data
    }
}
