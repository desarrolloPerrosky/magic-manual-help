import { Observable } from "data/observable";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer custom component view model.
*************************************************************/
export class MyDrawerViewModel extends Observable {
    private _navigationItems: Array<any>;

    private _cadena: String;
    /* ***********************************************************
    * Use the MyDrawer view model constructor to initialize the properties data values.
    * The navigationItems property is initialized here and is data bound to <ListView> in the MyDrawer view file.
    * Add, remove or edit navigationItems to change what is displayed in the app drawer list.
    *************************************************************/
    constructor(selectedPage: string) {
        super();
		
		this._cadena = selectedPage;

        this._navigationItems = [
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
                isSelected: selectedPage === "Home"
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
                isSelected: selectedPage === "Browse"
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
                isSelected: selectedPage === "Search"
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
                isSelected: selectedPage === "Featured"
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
                isSelected: selectedPage === "Diccionario"
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
                isSelected: selectedPage === "Settings"
            }
        ];
    }

    get navigationItems(): Array<any> {
        return this._navigationItems;
    }
	
	get cadena(): String{
		return this._cadena;
	}
}
