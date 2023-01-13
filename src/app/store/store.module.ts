import { NgModule, isDevMode } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartEffects } from "./effects/cart.effects";
import { appReducers } from "./reducers/app.reducers";
import { Store } from "@ngrx/store";


@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      CartEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [StoreModule],
  providers: [Store]
})
export class AppStoreModule { }
