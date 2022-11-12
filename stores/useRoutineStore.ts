import { defineStore } from 'pinia'
import { IRoutine } from "@/interfaces/IRoutine"
import { IUser } from "@/interfaces/IUser"
import { getUserRoutines } from '@/composables/useRoutine'
import { IInterval } from "@/interfaces/IInterval";
import { Interval } from "@/models/Interval";
import { Routine } from "@/models/Routine";
import { RoutineDetailViewType } from "@/enums/RoutineDetailViewType";
import { useUserStore } from "@/stores/useUserStore";

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
        addRoutine() : IRoutine {
            const userStore = useUserStore()
            const newRoutine = new Routine()
            newRoutine.creator = userStore.user
            this.userRoutines.push(newRoutine)
            return newRoutine
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
            const newInterval = new Interval()
            routine.intervals.push(newInterval)
            return newInterval
        },
        updateInterval(otherInterval : IInterval, intervalToUpdate : IInterval) {
            return Interval.copy(otherInterval, intervalToUpdate)
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
