import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyCustomValidators {
  static forbiddenName(control: FormControl) {
    if (control.value === 'test') {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }

  static forbiddenNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
