import { observable } from 'mobx';
import {Project} from '../types/home';

class HomeStore {
    @observable public announcement: string = '';
    @observable public motto: string = '';
    @observable public projects: Project[] = [];
    @observable public coverUrl: string = '';

    public getProject = async () => {

    }
}

const homeStore = new HomeStore();

export default homeStore;
