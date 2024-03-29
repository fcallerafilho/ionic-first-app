import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

