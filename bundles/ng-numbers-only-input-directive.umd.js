(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-numbers-only-input-directive', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-numbers-only-input-directive'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var NumbersOnlyDirective = /** @class */ (function () {
        function NumbersOnlyDirective(_el) {
            this._el = _el;
        }
        NumbersOnlyDirective.prototype.onInputChange = function (event) {
            var initialValue = this._el.nativeElement.value;
            this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
            if (initialValue !== this._el.nativeElement.value) {
                event.stopPropagation();
            }
        };
        return NumbersOnlyDirective;
    }());
    NumbersOnlyDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[numbersOnly]'
                },] }
    ];
    NumbersOnlyDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NumbersOnlyDirective.propDecorators = {
        onInputChange: [{ type: core.HostListener, args: ['input', ['$event'],] }]
    };

    var NgNumbersOnlyInputDirectiveModule = /** @class */ (function () {
        function NgNumbersOnlyInputDirectiveModule() {
        }
        return NgNumbersOnlyInputDirectiveModule;
    }());
    NgNumbersOnlyInputDirectiveModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NumbersOnlyDirective],
                    imports: [],
                    exports: [NumbersOnlyDirective]
                },] }
    ];

    /*
     * Public API Surface of ng-numbers-only-input-directive
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgNumbersOnlyInputDirectiveModule = NgNumbersOnlyInputDirectiveModule;
    exports.NumbersOnlyDirective = NumbersOnlyDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-numbers-only-input-directive.umd.js.map
