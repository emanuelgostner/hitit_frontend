import {IUser} from "@/interfaces/IUser";
import {v4 as uuidV4} from 'uuid';

export class User implements IUser {
    id: string = uuidV4()
    name: string

    public constructor(theName: string) {
        this.name = theName;
    }
}
