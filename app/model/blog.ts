/**
 * Created by Ben on 9/2/2016.
 */
import {Type} from "./type";
import {User} from "./user";
import {Tag} from "./Tag";
export class Blog {
    id: number;
    title: string;
    content: string;
    contentAbstract: string;
    visitAmount: number;
    createdate: string;
    
    user: User;
    type: Type;
    tags: Array<Tag>;

    constructor(_title?: string) {
        this.title = _title;
        this.user = new User();
        this.type = new Type();
        this.tags = new Array<Tag>(5);
    }

    setId(_id: number) {
        this.id = _id;
    }
    
    setTitle(_title: string) {
        this.title = _title;
    }
    
    setContent(_content: string) {
        this.content = _content;
    }
    
    setContentAbstract(_contentAbstract: string) {
        this.contentAbstract = _contentAbstract;
    }
    
    setVisitAmount(_visitAmout: number) {
        this.visitAmount = _visitAmout;
    }
    
    setCreatedate(_createdate: string) {
        this.createdate = _createdate;
    }
    
    setUser(_user: User) {
        this.user.setUser(_user);
    }
    
    setType(_type: Type) {
        this.type.setType(_type);
    }
    
    setTags(_tags: Array<Tag>) {
        // maximum is 5
        _tags.forEach((f_tag, index) => {
            this.tags[index] = new Tag(f_tag);
        })
    }
    
    setBlog(_blog: Blog) {
        this.setId(_blog.id);
        this.setTitle(_blog.title);
        this.setContent(_blog.content);
        this.setContentAbstract(_blog.contentAbstract);
        this.setVisitAmount(_blog.visitAmount);
        this.setCreatedate(_blog.createdate);

        this.setUser(_blog.user);
        this.setType(_blog.type);
        this.setTags(_blog.tags)
    }
}