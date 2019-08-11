import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { TinTucComponent } from './home/tin-tuc/tin-tuc.component';
import { DanhSachPhimComponent } from './home/danh-sach-phim/danh-sach-phim.component';
const routes: Routes = [
  //Routing Home Page
  {
    path: "", component: HomeComponent, children: [
      { path: "trang-chu", component: TrangChuComponent },
      { path: "tin-tuc", component: TinTucComponent },
      { path: "danh-sach-phim", component: DanhSachPhimComponent }
  ]},
  // { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
