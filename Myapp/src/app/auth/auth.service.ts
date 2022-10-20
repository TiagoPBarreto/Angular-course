import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false
  isLoading: boolean = false
  passwordMatched: boolean = true
  
  constructor(private router:Router) { }

  login(form: LoginForm){

    const auth = getAuth();
   createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated = true
    this.router.navigate(['/'])
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated = false
    // ..
  }).finally(()=> (this.isLoading = false))
  }


  register(form: RegisterForm){
    if(this.isLoading) return
       this.isLoading = true
    if(form.email != form.password){
      this.passwordMatched = false
      return
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
   .then((userCredential) => {
    this.isAuthenticated = true
    
  })
  .catch((error) => {
    this.isAuthenticated = false
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(()=> (this.isLoading = false))
  }
  logout(){
    const auth = getAuth();
    signOut(auth).then(() =>{
      this.router.navigate(['login'])
      this.isAuthenticated = false
    }).catch((error)=>{

    })
  }
}
