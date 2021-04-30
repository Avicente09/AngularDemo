import { Component } from '@angular/core';

@Component({
    selector: 'secound',
    templateUrl: './secound.component.html'
})
export class SecoundComponent {
    public sum: number;
    constructor() {
        this.sum = 2;
        console.log("Component: " + this.sum);
    }
}