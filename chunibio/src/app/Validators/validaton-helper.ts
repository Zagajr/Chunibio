import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function
export function confirmPasswordValidator(confirmPasswordControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get('Password');
    const confirmPassword = control.value;

    if (password && confirmPassword !== password.value) {
      return { confirmPassword: true };
    }

    return null;
  };
}