import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from 'app/services/environment/environment.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ],
})
export class AppCommonModule {
  /**
  * Takes a service configuration object and returns a ModuleWithProviders.
  *
  * @param environment an environment object
  * @returns the AppCommonModule with the EnvironmentService
  */
  public static forRoot(environment: Record<string, any>): ModuleWithProviders<AppCommonModule> {
    return {
      ngModule: AppCommonModule,
      providers: [
        EnvironmentService,
        { provide: 'environment', useValue: environment }
      ],
    };
  }
}
