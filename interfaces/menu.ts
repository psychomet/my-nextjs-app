export interface IMenu{
    key: string;
    title: string;
    subMenu?: IMenu[]
}