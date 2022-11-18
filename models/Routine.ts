import { IRoutine } from "@/interfaces/IRoutine";
import { unref } from 'vue'
import {v4 as uuidV4} from 'uuid';
import { IInterval } from "@/interfaces/IInterval";
import { IUser } from "@/interfaces/IUser";

export class Routine implements IRoutine {
    "id": string = uuidV4()
    "title": string = ''
    "creator": IUser | null = null
    "intervals": IInterval[] = []
    public static copy(routine : Routine) {
       const copiedRoutine = new Routine()
       copiedRoutine.title = unref(routine.title)
       copiedRoutine.creator = unref(routine.creator)
       copiedRoutine.intervals = JSON.parse(JSON.stringify(routine.intervals)) // remove refs/proxys from array and array items
       return copiedRoutine
    }
}
