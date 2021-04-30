import { Component } from '@angular/core';

@Component({
    selector: 'first',
    templateUrl: './first.component.html'
})
export class FirstComponent {

    public titulo: String;
    public comentario: String;
    public years: number;

    constructor() {
        this.titulo = "Hello World!";
        this.comentario = "Component A12";
        this.years = 2021;
        console.log("Mi componente Cargado");
    }
}