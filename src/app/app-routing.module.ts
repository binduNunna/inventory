import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';

// Plugin
import { NgxUiLoaderModule } from 'ngx-ui-loader';

const routes: Routes = [
  { path: '', redirectTo: 'inventory-list', pathMatch: 'full' },
  { path: 'inventory-list', component: InventoryListComponent, pathMatch: 'full'},
  { path: 'add-inventory', component: AddInventoryComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'inventory-list' }
];

@NgModule({
  declarations: [
    InventoryListComponent,
    AddInventoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    NgxUiLoaderModule
  ],
  exports: [
    RouterModule,
    AddInventoryComponent,
    NgxUiLoaderModule]
})
export class AppRoutingModule { }
