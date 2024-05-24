import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.sass'
})
export class CadastrarComponent implements OnInit{
  constructor(private http: HttpClient,
              private router: Router,
              private activatedRoute: ActivatedRoute
            ){}
  usuario!: any;
  ngOnInit() {
    let id: any = this.activatedRoute.snapshot.params["id"]
    if(id){
      this.http.get('http://localhost:8080/bd/pegar/'+id)
      .subscribe(data => {
        console.log(data)
        this.usuario = data
      })
    }
  }
  
  postUsuario(nome:string , senha:string, cpf:string, dataNascimento:string){
    let userObj:any = {nome: nome, senha: senha, cpf: cpf, dataNascimento: dataNascimento}
    this.http.post(`http://localhost:8080/bd/usuarios`,userObj)
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
  putUsuario(nome:string , senha:string, cpf:string, dataNascimento:string, id: string){
    let userObj:any = {nome: nome, senha: senha, cpf: cpf, dataNascimento: dataNascimento}
    this.http.put('http://localhost:8080/bd/pegar/'+id, userObj)
    .subscribe(data =>{
      console.log(data)
      this.router.navigateByUrl('/listar')
    })
  }
}
