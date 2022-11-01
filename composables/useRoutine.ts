import { ILazyFetchRoutineResponse } from "@/interfaces/ILazyFetchRoutineResponse";
import { IRoutine } from "@/interfaces/IRoutine";
import { Ref } from "@vue/reactivity";
import { useLazyFetch } from "@/.nuxt/imports";

const apiBaseURL = 'http://localhost:8888/api/'
// const apiBaseURL = 'https://ded6a83e-a1ca-466c-935c-2dca927c44f2.mock.pstmn.io/'

export const getAllRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routines')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
// @ts-ignore
export const getUserRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routines')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
export const getPublicRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routines')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
// export const getAllRoutines = () => useLazyFetch
