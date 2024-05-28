import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeTableSelectionCheckboxDemo } from './tree-table-selection-checkbox-demo/tree-table-selection-checkbox-demo.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ImportsModule } from './imports';
import { NodeService } from './services/node-service';
import { DragDropModule } from 'primeng/dragdrop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { TreeTable } from 'primeng/treetable';
import { ChartModule } from 'primeng/chart';
import Quill from 'quill';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryOrderComponent,
    TreeTableSelectionCheckboxDemo,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    ImportsModule,
    DragDropModule,
    SelectButtonModule,
    FormsModule,
    InputTextModule,
    CommonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
