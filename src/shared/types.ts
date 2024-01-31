export enum SelectedPage {
    Home = 'home',
    About = 'about',
    Projects = 'projects',
    // Skills = 'ourclasses',
    Contact = 'contact'
}

export type Skill = {
    icon: JSX.Element;
    title: string;
    description?: string;
    color: string;
};

export interface Project {
    name: string;
    image: string;
    appUrl: string;
    gitUrl: string;
}
