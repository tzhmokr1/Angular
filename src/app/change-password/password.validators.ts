import { AbstractControl } from '@angular/forms';


export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise((resolve) => {
            if (control.value !== 'password') {
                resolve ({ invalidOldPassword: true});
            } else {
                resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value) {
            return { passwordsShouldMatch: true};
        }

        return null;
    }
}
