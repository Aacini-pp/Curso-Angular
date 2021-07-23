import { Component, Input } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { Personal } from '../personal.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent  {
  
  @Input() personaEnviada:Personal =new Personal("A","S");
  @Input() indice:number=1;
  
constructor (private personaService:PersonasService){

}


  emitirSaludo(){
    this.personaService.saludar.emit(this.indice)


  }
  

}
