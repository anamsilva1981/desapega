import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, ToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {

    }
}
