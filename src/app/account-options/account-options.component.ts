import { Component, OnInit } from '@angular/core';

import { jsonpService } from '../services/get.service';
import { accountInfo } from '../shared/account-info';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss']
})
export class AccountOptionsComponent implements OnInit {
  userKey: string = 'AJA3Cw9XcJZf';
  userSecret: string = '1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq';
  APIKey: string = '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK';

  // body = {
  //   allowUnverifiedLogin,
  //   defaultLanguage,
  //   loginIdentifierConflict,
  //   loginIdentifiers,
  //   preventLoginIDHarvesting,
  //   sendAccountDeletedEmail,
  //   sendWelcomeEmail,
  //   verifyEmail,
  //   verifyProviderEmail,
  // };

  allowUnverifiedLogin;
  defaultLanguage;
  loginIdentifierConflict;
  loginIdentifiers;
  preventLoginIDHarvesting;
  sendAccountDeletedEmail;
  sendWelcomeEmail;
  verifyEmail;
  verifyProviderEmail;
  
  getData;



  constructor(private jsonpService:  jsonpService) { }

  ngOnInit() {
      this.jsonpService.jsonpGet(this.userKey, this.userSecret, this.APIKey).subscribe(
        data => {
        this.allowUnverifiedLogin = data.allowUnverifiedLogin,
        this.defaultLanguage = data.defaultLanguage,
        this.loginIdentifierConflict = data.loginIdentifierConflict.replace( /([A-Z])/g, " $1" ).toLowerCase(),
        this.loginIdentifiers = data.loginIdentifiers,
        this.preventLoginIDHarvesting = data.preventLoginIDHarvesting,
        this.sendAccountDeletedEmail = data.sendAccountDeletedEmail,
        this.sendWelcomeEmail = data.sendWelcomeEmail,
        this.verifyEmail = data.verifyEmail,
        this.verifyProviderEmail = data.verifyProviderEmail,
        console.log(data),
        error => console.error(error)
        }
      );
  }

  setProperties() {
  this.jsonpService.jsonpSet(this.userKey, this.userSecret, this.APIKey, 
                            {allowUnverifiedLogin: this.allowUnverifiedLogin,
                              defaultLanguage: this.defaultLanguage,
                              loginIdentifierConflict: this.loginIdentifierConflict,
                              loginIdentifiers: this.loginIdentifiers,
                              preventLoginIDHarvesting: this.preventLoginIDHarvesting,
                              sendAccountDeletedEmail: this.sendAccountDeletedEmail,
                              sendWelcomeEmail: this.sendWelcomeEmail,
                              verifyEmail: this.verifyEmail,
                              verifyProviderEmail: this.verifyProviderEmail
                            }).subscribe(data => data.json());
  }

}
