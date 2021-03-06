"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var AppTopBarComponent = (function () {
    function AppTopBarComponent(app, _authService, _restService) {
        this.app = app;
        this._authService = _authService;
        this._restService = _restService;
    }
    AppTopBarComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    };
    AppTopBarComponent = __decorate([
        core_1.Component({
            selector: 'app-topbar',
            templateUrl: './app-topbar.component.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return app_component_1.AppComponent; })))
    ], AppTopBarComponent);
    return AppTopBarComponent;
}());
exports.AppTopBarComponent = AppTopBarComponent;
//# sourceMappingURL=app-topbar.component.js.map