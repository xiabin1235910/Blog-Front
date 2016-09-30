/**
 * Created by Ben on 9/22/2016.
 */
export class User{
    id: number;
    username: string;
    createdate: string;

    constructor(id?: number, username?:string, createdate?: string){
        this.id = id;
        this.username = username;
        this.createdate = createdate;
    }

    setId(_id: number) {
        this.id = _id;
    }

    setName(_username: string) {
        this.username = _username;
    }

    setCreatedate(_createdate: string) {
        this.createdate = _createdate;
    }

    setUser(_user: User) {
        if(_user) {
            this.setId(_user.id);
            this.setName(_user.username);
            this.setCreatedate(_user.createdate);
        }
    }
}