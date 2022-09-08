import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../commons/services/user.service';
import { UserModel } from './../../../commons/models/user';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute
  ) { }
  public titulo:string = 'Cadastrar'
  private user:UserModel = new UserModel();
  public formCadastro!:FormGroup

  get f(){
    return this.formCadastro
  }
  get contatos(){
    return this.f.controls.contatos as FormArray
  }
  get contatosForm(){
    return this.contatos.controls as FormGroup[]
  }

  ngOnInit():void {
    this.user._id = this.activatedRoute.snapshot.params.id
    this.titulo = (this.user._id)?'Editar':'Cadastrar'
    console.log('user1',this.user)
    this.formCadastro = this.formBuilder.group({
      _id: new FormControl(this.user._id),
      nome: new FormControl(this.user.nome,[Validators.required]),
      senha: new FormControl(this.user.senha,[Validators.required,Validators.minLength(3)]),
      contatos: new FormArray([])
    })
    this.addContato()
    console.log('user3',this.user)

  }
  async ngAfterViewInit(){
    await this.pesquisarUsuario();
    this.formCadastro.patchValue(this.user)
  }
  async pesquisarUsuario(){
    if(this.user._id)
    this.user = await this.userService.getUser(this.user._id)
      .toPromise();
  }
  addContato(){
    this.contatos.push(
      this.formBuilder.group({
        tipo: new FormControl(''),
        numero: new FormControl('')
      })
    )

  }
  rmContato(index:number){
    this.contatos.removeAt(index)
  }
  salvar(){
    if(this.user._id){
      this.editar();
    }else{
      this.cadastrar();
    }
  }
  cadastrar(){
    this.formCadastro.updateValueAndValidity();
    if(this.formCadastro.valid){
      const user:UserModel = this.formCadastro.getRawValue();
      this.userService.createUser(user)
      .subscribe(
        (usuarioCriado:UserModel)=>{
          console.log(usuarioCriado)

        }
      )
    }else{
      this.formCadastro.markAllAsTouched();
    }
  }
  editar(){
    this.formCadastro.updateValueAndValidity();
    if(this.formCadastro.valid){
      const user:UserModel = this.formCadastro.getRawValue();
      if(this.user._id)
        this.userService.updateUser(user,this.user._id)
        .subscribe(
          (usuarioCriado:UserModel)=>{
            console.log(usuarioCriado)

          }
        )
    }else{
      this.formCadastro.markAllAsTouched();
    }
  }
}
