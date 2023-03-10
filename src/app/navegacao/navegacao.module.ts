import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    MenuLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MenuLoginComponent
  ]
})
export class NavegacaoModule { }
