import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// service
import { CommonService } from '../common/common.service';

// plugin
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html'
})

export class InventoryListComponent implements OnInit {
  public inventoryArr: any = [];
  public showAddForm: boolean = false;
  public viewInventoryData: any = {};

  constructor(
    public http: HttpClient,
    public commonService: CommonService,
    public loader: NgxUiLoaderService) { }

  ngOnInit() {
    // To get the inventoryList by default
    this.getInventoryList();
  }

/*****************************************************
         @PURPOSE      : To get the inventory list
*****************************************************/
  getInventoryList() {
      this.loader.start();
      this.commonService.callApi('inventory', '', 'get').then(success => {
      this.inventoryArr = success;
      this.loader.stop();
    })
  }

/*****************************************************
         @PURPOSE      : To open add inventory form
*****************************************************/
  openAddForm() {
    this.showAddForm = true;
  }

/********************************************************************************
         @PURPOSE      : To receive added inventory from addInventory Component
         @PARAMETERS   : event
**********************************************************************************/
  receiveData(event) {
      this.showAddForm = false;
      this.getInventoryList();
  }

/*****************************************************
         @PURPOSE      : To delete an inventory
         @PARAMETERS   : {
          data: Object, which need to be deleted from list
      }
*****************************************************/
  deleteInventory(data) {
    if (data) {
      this.commonService.swal({
        text: `Do you want to Delete this Inventory? `,
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
          this.commonService.callApi(`inventory/${data.id}`, ''  , 'delete').then((success) => {
            this.commonService.popToast('success', 'Deleted Successfully');
            // To stop showing loader
            this.loader.stop();
            // call the list API
            this.getInventoryList();
          });
        }
      })
    }
  }

/*****************************************************
         @PURPOSE      : To view an inventory
         @PARAMETERS   : {
          inventory: Object, which need to be viewed
      }
*****************************************************/
  viewInventory(inventory) {
    this.showAddForm = true;
    inventory.view = true;
    this.viewInventoryData = inventory;
  }
}
