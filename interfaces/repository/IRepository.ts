import { Ref } from "@vue/reactivity";

export interface IRepository<T> {
    create(obj : T) : Promise<Ref<T>>
    update(id : string, obj : T) : Promise<Ref<T>>
    delete(id : string) : Promise<Ref<boolean>>
    getById(id : string) : Promise<Ref<T>>
    getAll() : Promise<Ref<T[]>>
}
