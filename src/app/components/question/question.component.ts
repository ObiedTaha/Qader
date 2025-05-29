import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  panelOpenState = true;
  fullname: string = '';
  email: string = '';
  message: string = '';

  constructor(private toaster: ToastrService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Here you can add your API call or form processing logic
    // For now, we'll just show the success message
    this.sendMessage();
    
    // Clear the form
    this.fullname = '';
    this.email = '';
    this.message = '';
  }
  
  sendMessage() {
    this.toaster.success('تم إرسال رسالتك بنجاح', 'نجاح', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    });
  }
}
