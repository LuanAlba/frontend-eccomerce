import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { FormBaseComponent } from 'src/app/base-components/form-base.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent extends FormBaseComponent{

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
        super();
    }
    

}