import { IInterval } from "@/interfaces/IInterval";
import {v4 as uuidV4} from 'uuid';

export class Interval implements IInterval {
    "id" : string = uuidV4()
    "exercise" : string = ''
    "duration" : number = 0
    "rest" : number = 0
    "repetitions": number = 1
}
