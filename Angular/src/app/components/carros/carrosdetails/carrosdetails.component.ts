import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, RouterModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {

  @Input("Carro") carro : Carro = new Carro(0,"");
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  carroService = inject(CarroService);

  constructor()
  {
    let id = this.router.snapshot.params['id'];
    if (id > 0)
    {
      this.findById(id);
    }
  }

  findById(id : number)
  {
    this.carroService.findById(id).subscribe({
        next: (carro: Carro) => {
          //quando o back retornar certo
          this.carro = carro;
        },
        error: (erro) => {
          //quando der erro ex -> bad_request
          alert('Ocorreu algum erro');
        },
      });
  }

  salvar()
  {
    if (this.carro.id > 0)
    {
      this.carroService.atualizar(this.carro,this.carro.id).subscribe({
        next: (String) => {
          //quando o back retornar certo
          
        },
        error: (erro) => {
          //quando der erro ex -> bad_request
          alert('Ocorreu algum erro');
        },
      });
    }
    else
    {
      this.carroService.salvar(this.carro).subscribe({
        next: (mensagem) => {
          //quando o back retornar certo
          this.router2.navigate(['admin/carros']);
        },
        error: (erro) => {
          //quando der erro ex -> bad_request
          alert('Ocorreu algum erro');
        },
      });
    }
    
  }

}
