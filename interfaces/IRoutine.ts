import { IInterval } from "@/interfaces/IInterval";
import { IUser } from "@/interfaces/IUser";
export interface IRoutine {
    "id": string,
    "title": string,
    "creator": IUser,
    "intervals": IInterval[]
}
