import { Component, OnDestroy, OnInit } from '@angular/core';

const STATUSES = ['online', 'offline', 'unknown'] as const;

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: typeof STATUSES[number] = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentStatus = STATUSES[Math.floor(Math.random() * STATUSES.length)];
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
