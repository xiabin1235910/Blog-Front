/**
 * Created by Ben on 9/22/2016.
 */
export class Type {
    id: number;
    typename: string;
    createdate: string;

    constructor(id?: number, typename?:string, createdate?: string){
        this.id = id;
        this.typename = typename;
        this.createdate = createdate;
    }

    setId(_id: number) {
        this.id = _id;
    }

    setName(_typename: string) {
        this.typename = _typename;
    }

    setCreatedate(_createdate: string) {
        this.createdate = _createdate;
    }

    setType(_type: Type) {
        if (_type) {
            this.setId(_type.id);
            this.setName(_type.typename);
            this.setCreatedate(_type.createdate);
        }
    }
}