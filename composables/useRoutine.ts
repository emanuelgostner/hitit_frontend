import { ILazyFetchRoutineResponse } from "@/interfaces/ILazyFetchRoutineResponse";
import { IRoutine } from "@/interfaces/IRoutine";
import { Ref } from "@vue/reactivity";
import { useLazyFetch } from "@/.nuxt/imports";
import {IUser} from "@/interfaces/IUser";
import {RoutinesRepository} from "@/repositories/RoutinesRepository";

const apiBaseURL = 'http://localhost:8888/api/'
// const apiBaseURL = 'https://ded6a83e-a1ca-466c-935c-2dca927c44f2.mock.pstmn.io/'

// const routineRepository = new RoutinesRepository('routines')
export const getAllRoutines = () : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routines')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
export const getUserRoutines = (user : IUser) : ILazyFetchRoutineResponse => {
    const { pending, data } = useLazyFetch(apiBaseURL + 'routines')
    const routines = data as Ref<IRoutine[]>
    return { pending, routines }
}
// export const getPublicRoutines = async (token) => {
//     const { data } = await routineRepository.getAll()
//     return data as Ref<IRoutine[]>
// }
// export const getAllRoutines = () => useLazyFetch
