import { IInterval } from "@/interfaces/IInterval";
import { unref } from 'vue'
import {v4 as uuidV4} from 'uuid';

export class Interval implements IInterval {
    "id" : string = uuidV4()
    "exercise" : string = ''
    "duration" : number = 0
    "rest" : number = 0
    "repetitions": number = 1

    public static copy(interval : IInterval, into? : IInterval) {
        const copiedInterval = into ? into : new Interval()
        copiedInterval.exercise = unref(interval.exercise)
        copiedInterval.duration = unref(interval.duration)
        copiedInterval.rest = unref(interval.rest)
        copiedInterval.repetitions = unref(interval.repetitions)
        return copiedInterval
    }
}
