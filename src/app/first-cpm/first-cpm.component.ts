import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-cpm',
  templateUrl: './first-cpm.component.html',
  styleUrls: ['./first-cpm.component.scss']
})
export class FirstCpmComponent implements OnInit {
  title = 'Angular-projet';

  @Input()
  valeur_texte: string = '';

  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter<string>();
  
  montant : number = 3.142568
  titreBouton: string = 'Mon titre'
  listeAlpha: Array<string> = ['a', 'b', 'c', 'd', 'e']
  resultat: boolean = true;
  today : Date = new Date()


  ngOnInit(): void {
    console.log("J'ai commencé oui")
    console.log(this.valeur_texte)

    //  Cela correspont au Ng Class
    switch(this.resultat) {
      case  true :
      {
        break;
      }
     case false :
    {
      break ;
    }
    default :
  }
  

}

  onButtonClick() {
    this.clickEvent.emit('bonjour;')
  }
}