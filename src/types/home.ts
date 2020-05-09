export interface Project {
    introduction: string;
    poster:string;
    title:string;
    upload_date:string;
    url:string;
    _id:string;
}


export interface HomeStore {

    projects: Project[];


}