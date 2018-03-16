import { Observable } from "data/observable";

export class BrowseViewModel extends Observable {
	private _navigationItems: Array<any>;
	
    constructor() {
        super();
		
        this._navigationItems = [
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },
            {
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },
            {
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },
            {
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },
            {
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },			
            {
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            }
		];
    }
	
	
    get navigationItems(): Array<any> {
        return this._navigationItems;
    }
}
