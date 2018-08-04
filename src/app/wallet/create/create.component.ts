import { Component, OnInit } from '@angular/core';
import { createWallet } from '../../apex/entities/createWallet.entity';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createWalletForm: FormGroup;
  CreateWallet : createWallet = new createWallet;
  constructor(private formBuilder: FormBuilder, private walletService: WalletService) {
    this.createWalletForm = this.formBuilder.group({
      'walletid': ['', Validators.required],
      'walletpassword': ['',  Validators.compose([Validators.required, Validators.minLength(5)])]
     });
     //this.getDummyList();
  }
   

  ngOnInit() {
  }

  createWalletDetails(data: any){
    console.log(data);
    this.walletService.createWallet(data).subscribe( (res: Response) => {
        console.log(res);
    },
      (err: Error) => {
        console.log(err);
      }
  
    )
  }

}
