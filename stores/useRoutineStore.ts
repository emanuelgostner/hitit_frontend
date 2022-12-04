import { defineStore } from 'pinia'
import { IRoutine } from "@/interfaces/IRoutine"
import { IUser } from "@/interfaces/IUser"
import { IInterval } from "@/interfaces/IInterval";
import { Interval } from "@/models/Interval";
import { Routine } from "@/models/Routine";
import { RoutineDetailViewType } from "@/enums/RoutineDetailViewType";
import { useUserStore } from "@/stores/useUserStore";
import {RoutinesRepository} from "@/repositories/RoutinesRepository";
export const useRoutineStore = defineStore('routine', {
    state: () => {
        return {
            userRoutines: [] as IRoutine[],
            publicRoutines: [] as IRoutine[],
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
        closeRoutineDetail(withSave) {
            // this.routineDetail.routine = null
            const userStore = useUserStore()
            if (userStore.loggedIn && this.routineDetail.routine && withSave ) {
                const routineRepo = new RoutinesRepository('routines')
                const routinePayload = this.routineDetail.routine
                routinePayload.creator = routinePayload.creator.userId
                routineRepo.update(this.routineDetail.routine.id, routinePayload).then((_result) => {
                    console.log('routine updated')
                })
            }
            this.routineDetail.open = false
        },
        startRoutine(routine : IRoutine) {
            this.routineStarted.routine = routine
            this.routineStarted.open = true
        },
        minifyStartedRoutine() {
            this.routineStarted.open = false
        },
        expandStartedRoutine() {
            this.routineStarted.open = true
        },
        cancelStartedRoutine() {
            this.routineStarted.routine = null
            this.routineStarted.open = false
        },
        addRoutine() : IRoutine {
            const userStore = useUserStore()
            const newRoutine = new Routine()
            newRoutine.creator = userStore.user
            if (userStore.loggedIn) {
                const routineRepo = new RoutinesRepository('routines')
                routineRepo.create(newRoutine).then((result) => {
                    newRoutine.id = result.value.id
                })
            }
            this.userRoutines.push(newRoutine)
            return newRoutine
        },
        deleteRoutine(routine : IRoutine) {
            const userStore = useUserStore()
            if (userStore.loggedIn) {
                const routineRepo = new RoutinesRepository('routines')
                routineRepo.delete(routine.id).then((result) => {
                    console.log('routine deleted', result)
                })
            }
            this.userRoutines = this.userRoutines.filter(currRoutine => currRoutine.id !== routine.id )
        },
        copyRoutine(routine : IRoutine) {
            const newCopiedRoutine = Routine.copy(routine)
            const userStore = useUserStore()
            if (userStore.loggedIn) {
                const routineRepo = new RoutinesRepository('routines')
                newCopiedRoutine.creator = userStore.user
                routineRepo.create(newCopiedRoutine).then((result) => {
                    newCopiedRoutine.id = result.value.id
                })
            }
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
            try {
                const routineRepo = new RoutinesRepository('routines')
                const data = await routineRepo.getById(user.userId)
                console.log(data.value)
                // const data = await getPublicRoutines()
                this.userRoutines = data.value
            }catch (e) {
                console.log(e)
            }
        },
        async loadPublicRoutines() {
            try {
                const routineRepo = new RoutinesRepository('routines')
                const data = await routineRepo.getAll()
                console.log(data.value)
                // const data = await getPublicRoutines()
               this.publicRoutines = data.value
            }catch (e) {
                console.log(e)
            }
        }
    }
})
