import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../chat.service';

@Component({
  selector: 'app-google-authe-callback',
  templateUrl: './google-authe-callback.component.html',
  styleUrls: ['./google-authe-callback.component.css'],
})
export class GoogleAutheCallbackComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      this.userService
        .authGoogleCallback({ code: res.get('code'), state: res.get('state') })
        .subscribe((res: any) => {
          localStorage.setItem('token', res.token);
          location.href = "/chat";
        }, (err) => {
          const errorMessage = err?.error?.error?.message || "Unknown Error";
          alert(errorMessage);
          location.href = "/";
        });
    });
  }
}
