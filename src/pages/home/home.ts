import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TvfilmsearchProvider} from '../../providers/tvfilmsearch/tvfilmsearch';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  film:any;
  
  filmortv:{
    inputfilmortv:string,
    }

  constructor(public navCtrl: NavController, private tvfilmsearchprovider:TvfilmsearchProvider) {

  }

  ionViewWillEnter(){
    this.filmortv = {
      inputfilmortv:'everything',
      }
  
      this.tvfilmsearchprovider.gettvfilmsearchprovider(this.filmortv.inputfilmortv).subscribe(film=>{
        console.log(film);
      });   
    }
}
