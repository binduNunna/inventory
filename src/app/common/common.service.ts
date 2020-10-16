import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

// environment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CommonService {
  public apiUrl;
  public router;
  public swal = swal;

  constructor(public http: HttpClient, public route: Router) {
    this.apiUrl = environment.apiURL;
    this.router = route;
  }

  /**********************************************************
  @PURPOSE : Call api.
  /********************************************************/
  callApi(url, data, method): Promise<any> {
    return new Promise((resolve, reject) => {
    if (method === 'get') {
        this.http.get(this.apiUrl + url, { params: data })
          .subscribe(data1 => {
            resolve(data1);
          }, error => {
          });
      }
      if (method === 'post') {
        this.http.post(this.apiUrl + url, data )
          .subscribe(data1 => {
            resolve(data1);
          }, error => {
          });
      }
      if (method === 'delete') {
        this.http.delete(this.apiUrl + url, {params: data} )
          .subscribe(data1 => {
            resolve(data1);
          }, error => {
          });
      }
    });
  }

  /****************************************
    @purpose : popToaster
  /***************************************/
  popToast(type, title) {
    swal({
      position: 'center',
      type,
      text: title,
      showConfirmButton: false,
      timer: 2000,
      customClass: 'custom-toaster',
    });
  }

   /****************************************************************************
  @PURPOSE      : To allow numbers in input.
  @PARAMETERS   : $event
  @RETURN       : Boolen
  ****************************************************************************/
  AllowNumbers(e) {
    // console.log(e.target.value, "e");
    if (!e.target.value.length && e.key <= 0) {
      return false;
    }
    let input;
    if (e.metaKey ||
      e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    if (e.which === 43 ||
      e.which === 45) {
      return true;
    }
    if (e.which === 36 ||
      e.which === 35) {
      return true;
    }
    if (e.which === 37 ||
      e.which === 39) {
      return true;
    }
    input = e.key;
    return !!/[\d\s]/.test(input);
  }
}
