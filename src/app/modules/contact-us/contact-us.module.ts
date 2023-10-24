import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ContactUsComponent }]),
  ],
})
export class ContactUsModule {}
