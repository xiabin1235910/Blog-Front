/**
 * Created by Ben on 9/22/2016.
 */
export class Type {
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

    setType(_type: Type) {
        if (_type) {
            this.setId(_type.id);
            this.setName(_type.name);
            this.setCreatedate(_type.createdate);
        }
    }
}