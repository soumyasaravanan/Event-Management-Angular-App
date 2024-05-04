import { Routes } from '@angular/router';
import { HomeComponent } from './post/home/home.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
  
export const routes: Routes = [
      //{ path: '', redirectTo: 'post/home', pathMatch: 'full'},
      { path: '', component: HomeComponent },
      { path: 'post/index', component: IndexComponent },
      { path: 'post/:postId/view', component: ViewComponent },
      { path: 'post/create', component: CreateComponent },
      { path: 'post/:postId/edit', component: EditComponent } 
  ];