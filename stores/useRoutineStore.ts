import { defineStore } from 'pinia'
import { IRoutine } from "@/interfaces/IRoutine"
import { IUser } from "@/interfaces/IUser"
import { getPublicRoutines, getUserRoutines } from '@/composables/useRoutine'
import { IInterval } from "@/interfaces/IInterval";
import { Interval } from "@/models/Interval";
import { Routine } from "@/models/Routine";
import {RoutineDetailViewType} from "@/enums/RoutineDetailViewType";
export const useRoutineStore = defineStore('routine', {
    state: () => {
        return {
            userRoutines: [] as IRoutine[],
            publicRoutines: [],
            routineDetail: {
                routine: null as IRoutine | null,
                type: null as RoutineDetailViewType,
                open: false as Boolean,
                color: null
            },
            routineStarted: {
                routine: null as IRoutine | null,
                open: false as Boolean
            }
        }
    },
    actions: {
        openRoutineDetail(routine : IRoutine, routineDetailViewType : RoutineDetailViewType, color? : String) {
            this.routineDetail.routine = routine
            this.routineDetail.type = routineDetailViewType
            this.routineDetail.open = true
            this.routineDetail.color = color || null
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
        copyRoutine(routine : IRoutine) {
            const newCopiedRoutine = Routine.copy(routine)
            this.userRoutines.push(newCopiedRoutine)
            return newCopiedRoutine
        },
        copyInterval(routine : IRoutine, interval : IInterval) {
            routine.intervals.push(Interval.copy(interval))
        },
        deleteInterval(routine : IRoutine, interval : IInterval) {
            routine.intervals = routine.intervals.filter(currInterval => currInterval.id !== interval.id )
        },
        addInterval(routine : IRoutine) {
            routine.intervals.push(new Interval)
        },
        async loadRoutinesByUser(user : IUser) {
            getUserRoutines(user)
        },
        async loadPublicRoutines() {
            try {
                const data = await $fetch('https://6368d90c15219b8496085dc2.mockapi.io/routines')
                this.publicRoutines = data
            }catch (e) {
                console.log(e)
            }
        }
    }
})
