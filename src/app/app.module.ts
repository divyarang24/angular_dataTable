import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { TableModule } from 'ngx-easy-table';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {  } from '@angular/material';
import { MatTableModule  } from '@angular/material/table';
import {MatFormFieldModule}  from '@angular/material/form-field';
import { SearchFilterPipe } from './search-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
