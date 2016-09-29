/**
 * Created by Ben on 9/27/2016.
 */
export class Tag {
    id: number;
    createdate: string;
    name: string;

    constructor(id?: number, name?:string, createdate?: string){
        this.id = id;
        this.name = name;
        this.createdate = createdate;
    }

    constructor(_tag: Tag){
        this.id = _tag.id;
        this.name = _tag.name;
        this.createdate = _tag.createdate;
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

    setTag(_tag: Tag) {
        if (_tag) {
            this.setId(_tag.id);
            this.setName(_tag.name);
            this.setCreatedate(_tag.createdate);
        }
    }
}