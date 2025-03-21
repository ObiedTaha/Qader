import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  registerForm: FormGroup;
  userType: 'volunteer' | 'organization' = 'volunteer'; 
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: [''],
      organizationName: [''],
      location: [''],
      rememberMe: [false]
    });
  }
   // تبديل بين المتطوع والمؤسسة
   switchUserType(type: 'volunteer' | 'organization') {
    this.userType = type;
    this.registerForm.reset(); // إعادة تعيين النموذج عند التغيير
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      alert('تم تسجيل الحساب بنجاح!');
    }
  }
}
