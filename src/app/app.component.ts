import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from "@angular/common";


@Component ({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']}
)
export class AppComponent {
  title = 'wework-medicals';
}