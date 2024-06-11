import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
  onomatopoeiaList: string[] = [];
  //Méthodes

  onReceiveNewOnomatopia(onomatopia: any): void {
    console.log('La donnée reçue: ', onomatopia)
    this.onomatopoeiaList.push(onomatopia)
  }

}
