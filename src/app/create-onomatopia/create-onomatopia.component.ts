import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})

export class CreateOnomatopiaComponent {
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  newOnomatopia: string = "";

  //Méthode

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia)

  }

}



