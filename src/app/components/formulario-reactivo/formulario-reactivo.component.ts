import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioRegistro: FormGroup;
  constructor(private formBuilder: FormBuilder) {
     this.formularioRegistro = this.formBuilder.group({
       nombre: ['', [Validators.required, Validators.minLength(3)]],
       apellidos: ['', [Validators.required, Validators.minLength(5)]],
       email: [
         '',
         [
           Validators.required,
           Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
         ],
       ],  
       telefono: ['', [Validators.required, Validators.minLength(9)]],
       pais: ['', Validators.required],
       ciudad: ['', Validators.required],
       direccion: this.formBuilder.group({
         calle: ['', [Validators.required]],
         numero: ['', [Validators.required]]
       }),
       nacimiento: ['', [Validators.required]],
       genero: ['', Validators.required],
     });
  }

  ngOnInit(): void {

  }
  sendForm() {
    console.log(this.formularioRegistro);
  }
}
