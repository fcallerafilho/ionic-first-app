import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private menu: MenuController, private navController: NavController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  goToConfiguracoesPage(){
    this.navController.navigateForward('configuracoes')
  }

  goToPerfilPage(){
    this.navController.navigateForward('perfil')
  }

  goToSobrePage(){
    this.navController.navigateForward('sobre')
  }

}
