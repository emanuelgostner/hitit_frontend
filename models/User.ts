import {IUser} from "@/interfaces/IUser";
import {v4 as uuidV4} from 'uuid';

export class User implements IUser {
    userId: string = uuidV4()
    email: string
    firstName: string

    public constructor(theEmail: string, theName?: string, theId?: string) {
        this.userId = theId
        this.email = theEmail
        this.firstName = theName;
    }
}
