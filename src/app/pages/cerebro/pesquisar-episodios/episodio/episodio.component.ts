import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {

  constructor(
     @Inject(MAT_DIALOG_DATA) public data:any
  ) { }
    public episodio:any;
  ngOnInit(): void {
    this.episodio = this.data
  }

}
