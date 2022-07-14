import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const materialmodule =[
    MatButtonModule,
    MatTableModule,
    MatCardModule

]

@NgModule({
 
  imports: [
    CommonModule,
    ...materialmodule

  ],
  exports:[...materialmodule]
  
  
})
export class MaterialModule { }
