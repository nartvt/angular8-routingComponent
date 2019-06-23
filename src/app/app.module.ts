import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    TrangChuComponent,
    TinTucComponent,
    DanhSachPhimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
