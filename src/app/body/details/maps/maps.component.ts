import { Component, OnInit, Input} from '@angular/core';
import { FoodService } from "../../../../services/food.service";
import { Store } from "../../../../business/store";

@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	lat: number = 51.673858;
	lng: number = 7.815982;
	title: string = "Localisation";
	@Input() productInfos;

	public dispos: Store[] = [];
	constructor(private foodService: FoodService) { }

	ngOnInit() {
		this.getDispos();

	}

	getDispos() {
		this.foodService.getStores(this.productInfos._id).subscribe((stor) => {
			const prices = stor.prices;
			this.dispos = [];
			prices.forEach((value) => {
				const store: Store = new Store();
				store.id_product = value.id_product;
				store.id_store = value.id_store;
				store.name_store = value.name_store;
				store.adresse = value.adresse;
				store.lat = value.lat;
				store.long = value.long;
				store.prix = value.prix;
				this.dispos.push(store);
			})
			this.lat = parseFloat(this.dispos[0].lat);
			this.lng = parseFloat(this.dispos[0].long);
		});
	}
}