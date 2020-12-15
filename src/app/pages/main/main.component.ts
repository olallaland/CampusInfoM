import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  constructor(
    private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.clear();
    this.router.navigate(['/setup']);
  }

}
