import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent  {
  @Input() productAdded: any;

  total=0;
   
  addTotal(prix:number,qte:number){
    this.total+=prix*qte;
  }

}
