import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private router: Router
  ) { }
      

  ngOnInit(): void {this.form = new FormGroup({
      ename: new FormControl('', [Validators.required]),
      pname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }
      

  get f(){
    return this.form.controls;
  }
      

  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Student created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  
}