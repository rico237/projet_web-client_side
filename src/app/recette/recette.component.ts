import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
	selector: 'app-recette',
	templateUrl: './recette.component.html',
	styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
	comments : any;

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		let httpOptions = {
			headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
		};
		this.http.get('/api/book', httpOptions).subscribe(data => {
			this.comments = data;
			console.log(this.comments);
		}, err => {
			if(err.status === 401) {
				this.router.navigate(['login']);
			}
		});
	}

	logout() {
		localStorage.removeItem('jwtToken');
		this.router.navigate(['login']);
	}

}
