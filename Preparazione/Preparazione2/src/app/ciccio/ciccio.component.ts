import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';//importare
import { HttpClient } from '@angular/common/http'; //importare
import { Ciccio } from './ciccio.model';

@Component({
  selector: 'app-ciccio',
  templateUrl: './ciccio.component.html',
  styleUrls: ['./ciccio.component.css']
})
export class CiccioComponent implements OnInit {
  //aggiungo i tre oggetti
  ciccioData: Ciccio[];
  oCiccio: Observable<Ciccio[]>;
  data: Object; //1
  loading: boolean;//2
  o: Observable<Object>
constructor(public http: HttpClient) { } //aggiungo nel costruttore la variabile per fare la richiesta http

  //aggiungoquesti due metodi (makeRequest e getData)

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://3000-afa9caad-4ea4-477e-a211-4ce3baf5af1f.ws-eu01.gitpod.io/api/products');
    this.o.subscribe(this.getData);
  }


  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }



  makeTypedRequest(): void {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oCiccio = this.http.get<Ciccio[]>('https://3000-afa9caad-4ea4-477e-a211-4ce3baf5af1f.ws-eu01.gitpod.io/api/products');
    this.oCiccio.subscribe(data => {
      this.ciccioData = data["products"];
      console.log(this.ciccioData);
    });
  }

  ngOnInit(): void {
  }

}
