import { Component, OnInit } from '@angular/core'
import { SupabaseService } from './supabase.service'
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { Session } from '@supabase/supabase-js';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, AccountComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.session as any;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
