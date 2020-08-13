import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './models/contact';

@Pipe({
  name: 'BirthdayBabies'
})
export class ContactBirthdayPipe implements PipeTransform {

  transform(value: Contact[], args?: any): any {
    let birthdayBabies = [];
    if(value){
      let todayDate =new Date();
      value.forEach(c=> {
        let dob =new Date(c.dateOfBirth);
        if(dob.getDate() == todayDate.getDate() && dob.getMonth() == todayDate.getMonth()  )
        {
          birthdayBabies.push(c);
        }
      });
    }
    return birthdayBabies;
  }

}
