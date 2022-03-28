import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleCasePipe } from './title-case.pipe';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      // TitleCasePipe
   ]
})
export class AppRoutingModule { }
