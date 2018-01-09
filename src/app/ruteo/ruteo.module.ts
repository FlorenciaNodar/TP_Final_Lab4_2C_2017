import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../app.component';


import { RouterModule, Routes } from '@angular/router';


const MiRuteo = [
  {
  path: '',
  component: LoginComponent,
  children: [
    {path: 'Login' , component: LoginComponent}

]
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }