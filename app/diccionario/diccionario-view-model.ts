import { Observable } from "data/observable";
import { http2 } from "tns-core-modules/http";

export class DiccionarioViewModel extends Observable {
	private _navigationItems: Array<any>;
	
	private _titulo: String;
	
	
	
    constructor() {
        super();
        
        var self = this;
        
        console.log("Prueba de construccion de data Diccionario");
        
/*        
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        username: vm.get("user"),
        password: vm.get("pass")
    })
}).then((r) => r.json())
    .then((response) => {
        const result = response.json;
    }).catch((e) => {
    });
*/

        self._titulo = "XD response.diccionario.titulo";

/*
fetch("http://perrosky.cl/magic/diccionario.json")
.then((response) => {
        console.log("Retorno de datos desde Perrosky");
        
        this._navigationItems = response.diccionario.contenido;
        this._titulo = "response.diccionario.titulo";
        
        response.forEach(function (value) {
  			console.log('HIJO' + value);
		});
		
		console.log( JSON.stringify(response) );
	

}).catch((e) => {
	console.error("Y me cai de hocico");
	console.error(e);
});
*/


http.getJSON("http://perrosky.cl/magic/diccionario.json").then((response) => {

	console.log("Retorno de datos desde Perrosky");
	console.log( response.json );
	console.log("Retorno de datos desde Perrosky - dos");
	console.log( response.jsonp.diccionario.titulo );
	
	self._navigationItems = response.diccionario.contenido;
	self._titulo = "response.diccionario.titulo";
	
	console.log("Retorno de datos desde Perrosky - fin");
	
}, (e) => {
	console.error("Y me cai de hocico");
	console.error(e);
});


   
//        http://perrosky.cl/magic/diccionario.json

/*	
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
            }
		];
*/
		
		
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
    
    get titulo(): String {
        return this._titulo;
    }
}
