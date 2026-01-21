import { type User } from "./model/user.model";


export default class State {

    private static _instance: State;

    private currentUser: User | null = null;


    private constructor() {

    }

    static get instance() {
        return this._instance || (this._instance = new this());
    }

    setCurrentUser(user: User): void {
        this.currentUser = user;
    }

    getCurrentUser(): User | null {
        return this.currentUser;
    }

}