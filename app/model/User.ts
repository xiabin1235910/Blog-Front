/**
 * Created by Ben on 9/22/2016.
 */
export class User{
    id: number;
    name: string;
    createdate: string;

    constructor(id?: number, name?:string, createdate?: string){
        this.id = id;
        this.name = name;
        this.createdate = createdate;
    }

    setId(_id: number) {
        this.id = _id;
    }

    setName(_name: string) {
        this.name = _name;
    }

    setCreatedate(_createdate: string) {
        this.createdate = _createdate;
    }

    setUser(_user: User) {
        if(_user) {
            this.setId(_user.id);
            this.setName(_user.name);
            this.setCreatedate(_user.createdate);
        }
    }
}