import { defineStore } from 'pinia'
import { IRoutine } from "@/interfaces/IRoutine"
import { IUser } from "@/interfaces/IUser"
import { getPublicRoutines, getUserRoutines } from '@/composables/useRoutine'
export const useRoutineStore = defineStore('routine', {
    state: () => {
        return {
            test: 'hallo',
            userRoutines: [] as IRoutine[],
            publicRoutines: [],
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
        openRoutineDetail(routine : IRoutine) {
            this.routineDetail.routine = routine
            this.routineDetail.open = true
        },
        closeRoutineDetail() {
            // this.routineDetail.routine = null
            this.routineDetail.open = false
        },
        addRoutine(routine : IRoutine) {
            this.userRoutines.push(routine)
        },
        deleteRoutine(routine : IRoutine) {
            this.userRoutines = this.userRoutines.filter(currRoutine => currRoutine.id !== routine.id )
        },
        async loadRoutinesByUser(user : IUser) {
            getUserRoutines(user)
        },
        async loadPublicRoutines() {
            this.test = '1'
            const data = await $fetch('http://localhost:8888/api/' + 'routines')
            this.test = '2'
            this.publicRoutines = data
            this.test = '3'
        }
    }
})
