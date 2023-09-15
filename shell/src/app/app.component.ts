import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { Router } from '@angular/router';
import {
  getManifest,
  setManifest,
} from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(manifest);
  }
}
