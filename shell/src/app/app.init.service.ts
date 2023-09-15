import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from './utils/routes';
import { getManifest } from '@angular-architects/module-federation';
import { CustomManifest } from './utils/config';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private router: Router) {}

  loadMicrofrontends(): Promise<void> {
    return new Promise<void>((resove, reject) => {
      const manifest = getManifest<CustomManifest>();
      const routes = buildRoutes(manifest);
      this.router.resetConfig(routes);
      resove();
    });
  }
}
