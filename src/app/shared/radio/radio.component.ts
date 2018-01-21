import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=>RadioComponent), multi:true}]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: Array<RadioOption>;

  value: number | string;

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit() {}

  setValue(value: number | string) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(value: number | string): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
