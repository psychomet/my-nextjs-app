import {IMenu} from "@models/menu";

export const mainMenuData: IMenu[] = [
    {
        key: 'home',
        title: 'خانه'
    },
    {
        key: 'check',
        title: 'خدمات چک',
        subMenu: [
            {
                key: 'check-1',
                title: ' سامانه پیچک'
            },
            {
                key: 'check-2',
                title: 'ثبت، تایید و انتقال چک'
            },
            {
                key: 'check-3',
                title: 'چک تایید شده'
            }
        ]
    }
]