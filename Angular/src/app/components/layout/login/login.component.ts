import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario! : string;
  senha! : string;

  router = inject(Router);

  logar()
  {
    if(this.usuario == 'admin' && this.senha == 'admin')
    {
      this.router.navigate(['admin/carros']);
    }
    else
    {
      alert('Usuario ou senha incorretos');
    }
  }


}
