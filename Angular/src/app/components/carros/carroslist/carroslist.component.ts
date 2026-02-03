import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from "@angular/router";
import { CarroService } from '../../../services/carro.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {
  lista: Carro[] = [];

  carroService = inject(CarroService);

  constructor() {
    this.findALL();

    /*this.lista = [
      new Carro( 0,'Civic'),
      new Carro( 0,'Corolla'),
      new Carro( 0,'Gol'),
    ];*/

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo) {
      carroNovo.id = 555;
      this.lista.push(carroNovo);
    }

    if (carroEditado) {
      let indice = this.lista.findIndex((x) => {
        return x.id == carroEditado.id;
      });
      this.lista[indice] = carroEditado;
    }
  }

  findALL() {
    this.carroService.findAll().subscribe({
      next: (lista) => {
        //quando o back retornar certo
        this.lista = lista;
      },
      error: (erro) => {
        //quando der erro ex -> bad_request
        alert('Ocorreu algum erro');
      },
    });
  }

  delete(carro: Carro) {
    if (confirm('Tem certeza que deseja deletar esse registro ?')) {
      this.carroService.delete(carro.id).subscribe({
        next: (mensagem) => {
          //quando o back retornar certo
          this.findALL();
        },
        error: (erro) => {
          //quando der erro ex -> bad_request
          alert('Ocorreu algum erro');
        },
      });

      
    }
  }
}
