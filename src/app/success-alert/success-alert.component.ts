import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `<p>Success Message</p>`,
    styles: [`
        p{
            padding: 20px;
            background-color: #90ee90;
            border: 2px solid green;
        }
    `]
})
export class SuccessAlertComponent{

}