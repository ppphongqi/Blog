import {observable} from 'mobx';

class LayoutStore {
    @observable public status ?: object = {
        full_site_gray:false,
        'welcome':true ,
    } 
    public sayHello = ()=>{
        console.log("hello , here is come from mobx-store")
    }
}




const layoutStore = new LayoutStore();

export default layoutStore;