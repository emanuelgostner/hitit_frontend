import { defineStore } from 'pinia'
import { IRoutine } from "@/interfaces/IRoutine";
export const useRoutineStore = defineStore('routine', {
    state: () => {
        return {
            routines: null as IRoutine[] | null,
            routineDetail: {
                routine: null as IRoutine | null,
                open: false as Boolean
            },
            routineStarted: {
                routine: null as IRoutine | null,
                open: false as Boolean
            }
        }
    },
    actions: {
    }
})
