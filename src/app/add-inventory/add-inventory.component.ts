import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// service
import { CommonService } from '../common/common.service';

// plugin
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html'
})

export class AddInventoryComponent implements OnInit {
public inventory: any = {};
public submitted: boolean = false;
public Logo: any = '';
public fileUrl: any;

@Output() dataEvent = new EventEmitter<string>();
@Input() editData;

  constructor(
    public commonService: CommonService,
    public loader: NgxUiLoaderService) {}

  ngOnInit() {
    // used when view of inventory
    if(this.editData.view){
      this.inventory = this.editData;
    }
  }

/*****************************************************
         @PURPOSE      : To add an inventory
         @PARAMETERS   : {
          form: Form, It is to know Form valid or not
          user: Object, which need to be added to list
      }
*****************************************************/
  addInventory(form, user) {
    this.submitted = true;
    if(form.valid) {
      user.image = this.Logo;
        this.commonService.swal({
          text: `Are you sure you wanna add this inventory?`,
          type: 'question',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-primary',
          cancelButtonClass: 'btn btn-info',
          cancelButtonText: 'No',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            // To start showing loader
            this.loader.start();
            this.commonService.callApi('inventory', user, 'post').then((success) => {
            // To stop showing loader
              this.loader.stop();
              this.commonService.popToast('success', 'Added Successfully');
              this.dataEvent.emit('in add');
            });
          }
        })
    }
  }
/*******************************************************
         @PURPOSE      : whcih takes back to listing
********************************************************/
  back() {
    this.dataEvent.emit('in add');
  }

/*****************************************************
         @PURPOSE      : Open File
*****************************************************/

   openFile() {
    let element = document.getElementById('userProfile');
    element.click();
  }

/*****************************************************
         @PURPOSE      : File Change
         @PARAMETERS   : event
*****************************************************/

 fileChangeEvent(event) {
    this.fileUrl=event.target.files[0];
    if (this.fileUrl) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.fileUrl);
    }
  }

  _handleReaderLoaded(readerEvt) {
		var binaryString = readerEvt.target.result;
			   this.Logo= 'data:image/png;base64,' + btoa(binaryString);
	   }
}
