declare namespace __Skrollr {
    interface SkrollrStatic {
        menu: SkrollrMenuStatic;
    }

    interface SkrollrMenuStatic {
        init: (skrollrInstance: SkrollrStatic, any) => any;
        click: (link) => void;
    }
}
declare module "skrollr-menu-typed" {
    const menu: __Skrollr.SkrollrStatic;
    export = menu;
}
