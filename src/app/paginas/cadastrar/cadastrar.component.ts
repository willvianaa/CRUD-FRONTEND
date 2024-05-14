import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.sass'
})
export class CadastrarComponent {
  constructor(private http: HttpClient,
              private router: Router){}

  postUsuario(nome:string , senha:string, cpf:string, dataNascimento:string){
    let userObj:any = {nome: nome, senha: senha, cpf: cpf, dataNascimento: dataNascimento}
    this.http.post(`http://localhost:8080/bd/criar`,userObj)
    .subscribe({
      next: (data: any)=>{
        console.log(data)
        this.router.navigateByUrl('/listar')
      },
      error: (error: any)=>{
        console.log(error)
      }
    })
  }

}
