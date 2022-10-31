import { IInterval } from "@/interfaces/IInterval";

export interface IRoutine {
    "id": string,
    "title": string,
    "creator": string,
    "intervals": IInterval[]
}
