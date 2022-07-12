import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const materialModule =[
    MatButtonModule,
    MatTableModule,
    MatCardModule

];
@NgModule({
  
  imports: [
    CommonModule,
    ...materialModule
   ],

   exports: [...materialModule]
 
  
})
export class MaterialModule { }
