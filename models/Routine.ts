import { IRoutine } from "@/interfaces/IRoutine";
import {v4 as uuidV4} from 'uuid';
import {IInterval} from "@/interfaces/IInterval";

export class Routine implements IRoutine {
    "id": string = uuidV4()
    "title": string = ''
    "creator": string = ''
    "intervals": IInterval[] = []

    public static copy(routine : Routine) {
       const copiedRoutine = new Routine()
       copiedRoutine.title = routine.title
       copiedRoutine.creator = routine.creator
       copiedRoutine.intervals = routine.intervals
       return copiedRoutine
    }
}
