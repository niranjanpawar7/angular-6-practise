import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "./users.component";
import { UserRoutingModule } from "./user.routing";
import { MatFormFieldModule, } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { RouterModule, Routes } from "@angular/router";
 

@NgModule({
  imports: [CommonModule, UserRoutingModule, MatFormFieldModule, RouterModule,  MatTableModule, MatButtonModule, MatInputModule,MatPaginatorModule,MatSortModule ],
  declarations: [UsersComponent]
})

export class UserModule {}