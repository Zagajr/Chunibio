import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import axios from 'axios';

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

export async function  VerifyEmail(email: any){
     const result= await axios.get(`http://localhost:3000/verifyEmail/${email}`);
     return result;
}