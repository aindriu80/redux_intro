import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { fromJS, Map } from "immutable";

import { AppComponent } from "./app.component";
import { NgRedux, DevToolsExtension } from "ng2-redux";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<Map<string, any>>, devTools:DevToolsExtension) {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
