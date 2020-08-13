import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './models/contact';

@Pipe({
  name: 'contactCount'
})
export class ContactCountPipe implements PipeTransform {

  transform(value: Contact[], field?: string, fieldValue?:string): Number {
    let result =0;

    if(value)
    {
      if(!field){
        result=value.length;
      }
      else if(field.toLowerCase() == "gender")
      {
        value.forEach(c=> {
          if(c.gender.toLowerCase() == fieldValue.toLowerCase())
          {
            result++;
          }
        });
      }
      else if(field.toLowerCase() == "group")
      {
        value.forEach(c=> {
          if(c.group.toLowerCase() == fieldValue.toLowerCase())
          {
            result++;
          }
        });
      }
    }

    return result;
  }
}
