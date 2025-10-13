
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notapplicable',
  standalone: true
})
export class NotApplicable implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if(!value)return "Not-Applicable";
        return value;
    }
    
}