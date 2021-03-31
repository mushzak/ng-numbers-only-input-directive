import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

class NumbersOnlyDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initialValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
        if (initialValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumbersOnlyDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[numbersOnly]'
            },] }
];
NumbersOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumbersOnlyDirective.propDecorators = {
    onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
};

class NgNumbersOnlyInputDirectiveModule {
}
NgNumbersOnlyInputDirectiveModule.decorators = [
    { type: NgModule, args: [{
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

export { NgNumbersOnlyInputDirectiveModule, NumbersOnlyDirective };
//# sourceMappingURL=ng-numbers-only-input-directive.js.map
