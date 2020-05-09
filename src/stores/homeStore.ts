import { observable } from 'mobx';
import {Project} from '../types/home';

class HomeStore {
    @observable public announcement: string = '';
    @observable public motto: string = '';
    @observable public projects: Project[] = [
        {
            introduction: 'Viewport简介',
            poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/JavaScript-logo-1_nptyzu-740x417.png?x-oss-process=image/format,webp",
            title:"什么是viewport？作用？",
            upload_date:"2019年11月17日",
            url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/viewport.md",
            _id:"01"
        },
        {
            introduction: "UI调试技巧",
            poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/917824-weather-wallpaper.jpg?x-oss-process=image/format,webp",
            title:"CSS小技巧-> UI调试",
            upload_date:"2019年11月17日",
            url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/UI%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7.txt",
            _id:"02",

        },
        {
            introduction: "工具库classnames",
            poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/https___blueprint-api-production.s3.amazonaws.com_uploads_card_image_847067_995c27df-12fb-4cba-b2bc-59235461a038.jpg?x-oss-process=image/format,webp",
            title:"classnames动态类名简化",
            upload_date:"2019年11月17日",
            url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/%E5%B7%A5%E5%85%B7%E5%BA%93classnames--%E3%80%8B%E5%8A%A8%E6%80%81%E7%B1%BB%E5%90%8D%E7%AE%80%E5%8C%96.md",
            _id:"02",
        }
    ];
    @observable public coverUrl: string = '';


}

const homeStore = new HomeStore();

export default homeStore;
