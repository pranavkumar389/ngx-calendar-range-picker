import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { A11yModule } from "@angular/cdk/a11y";

import { DaterangepickerComponent } from "./daterangepicker.component";
import { DaterangepickerDirective } from "./daterangepicker.directive";
import { LocaleConfig, LOCALE_CONFIG } from "./daterangepicker.config";
import { LocaleService } from "./locale.service";

@NgModule({
  declarations: [DaterangepickerComponent, DaterangepickerDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, A11yModule],
  providers: [],
  exports: [DaterangepickerComponent, DaterangepickerDirective],
  entryComponents: [DaterangepickerComponent],
})
export class NgxDaterangepickerMd {
  constructor() {}
  static forRoot(
    config: LocaleConfig = {}
  ): ModuleWithProviders<NgxDaterangepickerMd> {
    return {
      ngModule: NgxDaterangepickerMd,
      providers: [
        { provide: LOCALE_CONFIG, useValue: config },
        {
          provide: LocaleService,
          useClass: LocaleService,
          deps: [LOCALE_CONFIG],
        },
      ],
    };
  }
}
