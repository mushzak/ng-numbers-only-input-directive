import { Directive, ElementRef, HostListener } from '@angular/core';
export class NumbersOnlyDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLW51bWJlcnMtb25seS1pbnB1dC1kaXJlY3RpdmUvc3JjL2xpYi9kaXJlY3RpdmVzL251bWJlcnMtb25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS2xFLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFDVSxHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUNyQixDQUFDO0lBQzhCLGFBQWEsQ0FBQyxLQUFLO1FBQ3BELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSyxZQUFZLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ2xELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUVILENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7WUFKa0IsVUFBVTs7OzRCQVUxQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W251bWJlcnNPbmx5XSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyc09ubHlEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9bXjAtOV0qL2csICcnKTtcbiAgICBpZiAoIGluaXRpYWxWYWx1ZSAhPT0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC52YWx1ZSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==