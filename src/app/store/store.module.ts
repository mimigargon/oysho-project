import { NgModule, isDevMode } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from "./effects/app.effects";
import { appReducers } from "./reducers/app.reducers";
import { cartReducer } from "./reducers/cart.reducers";
import { loadingReducer } from "./reducers/loading.reducers";


@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([
      AppEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [StoreModule],
  providers: []
})
export class AppStoreModule { }
