import { FormControl } from '@angular/forms';

export function ValidatePassword(c: FormControl) {
    const PWD_REGEXP = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,50}$/);
    // console.log(c.value);
    // console.log(PWD_REGEXP.test(c.value));
    return PWD_REGEXP.test(c.value) ? null : {
        invalidatePassword: true,
    };
}
