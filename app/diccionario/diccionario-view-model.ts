import { Observable } from "data/observable";

export class DiccionarioViewModel extends Observable {
	private _navigationItems: Array<any>;
	
    constructor() {
        super();
		
        this._navigationItems = [
            {
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },{
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },{
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },{
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },{
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },{
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },{
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },{
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },{
                title: "Search",
                name: "search",
                route: "search/search-page",
                icon: "\uf002",
            },{
                title: "Featured",
                name: "featured",
                route: "featured/featured-page",
                icon: "\uf005",
            },{
                title: "Diccionario",
                name: "diccionario",
                route: "diccionario/diccionario-page",
                icon: "\uf02d",
            },{
                title: "Settings",
                name: "settings",
                route: "settings/settings-page",
                icon: "\uf013",
            },{
                title: "Casita",
                name: "home",
                route: "home/home-page",
                icon: "\uf2cd",
            },{
                title: "Browse",
                name: "browse",
                route: "browse/browse-page",
                icon: "\uf1ea",
            },{
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
	
    public onSubmit(args) {
//        let searchBar = <SearchBar>args.object;
//        let searchValue = searchBar.text.toLowerCase();
//
//        this.myItems = new ObservableArray<DataItem>();
//        if (searchValue !== "") {
//            for (let i = 0; i < this.arrayItems.length; i++) {
//                if (this.arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
//                    this.myItems.push(this.arrayItems[i]);
//                }
//            }
//        }
    }

    public onClear(args) {
//        let searchBar = <SearchBar>args.object;
//        searchBar.text = "";
//        searchBar.hint = "Search for a country and press enter";
//
//        this.myItems = new ObservableArray<DataItem>();
//        this.arrayItems.forEach(item => {
//            this.myItems.push(item);
//        });
    }
	
    get navigationItems(): Array<any> {
        return this._navigationItems;
    }
}
