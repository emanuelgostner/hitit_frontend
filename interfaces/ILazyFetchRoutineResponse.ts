import {Ref} from "@vue/reactivity";
import {IRoutine} from "@/interfaces/IRoutine";

export interface ILazyFetchRoutineResponse {
    pending? : Ref<Boolean>,
    routines : Ref<IRoutine[]>
}
