import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  
  modalTitle;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.modalTitle = data.title;
        console.log(data)
    }

  ngOnInit() {
  }

}