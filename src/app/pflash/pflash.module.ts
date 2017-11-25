import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PflashHomeComponent } from './components/pflash-home/pflash-home.component';
import { PflashListComponent } from './components/pflash-list/pflash-list.component';
import { PflashEditComponent } from './components/pflash-edit/pflash-edit.component';
import { PflashSearchComponent } from './components/pflash-search/pflash-search.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PflashHomeComponent, PflashListComponent, PflashEditComponent, PflashSearchComponent, FilterPipe]
})
export class PflashModule { }
