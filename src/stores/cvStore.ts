import { observable , runInAction } from 'mobx';
import  {Iuser}  from '../types/cv';

class CVStore{
    @observable public user:Iuser = {
        avatar:'http://www.ppphongqi.xyz/txbaobao.jpg',
        city:'昆明',
        position:'全栈开发',
        self_introduction:'啥都学，✨',
        user_name:'浦同宇',
    }
}

const cvStore = new CVStore();
export default cvStore