import { ILazyFetchRoutineResponse } from "@/interfaces/ILazyFetchRoutineResponse";
import { IRoutine } from "@/interfaces/IRoutine";
import { Ref } from "@vue/reactivity";
import { useLazyFetch } from "@/.nuxt/imports";

const apiBaseURL = 'http://localhost:8888/api/'

export const getAllRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routine')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
export const getUserRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routine')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
export const getPublicRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routine')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
// export const getAllRoutines = () => useLazyFetch
