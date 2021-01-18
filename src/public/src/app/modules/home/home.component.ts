import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showHeader: boolean = true;

  @Input() projects!: Project[] | null;
  @Output() hide = new EventEmitter<void>();
  @Output() update = new EventEmitter<string>();

  ngOnInit(): void { 
    
  }

  hideNav(): void { this.hide.emit(); }

  updatePart(part: string) { this.update.emit(part); }
}
