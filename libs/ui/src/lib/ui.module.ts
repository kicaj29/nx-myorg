import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AdvancedButtonComponent } from './advanced-button/advanced-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, AdvancedButtonComponent],
  exports: [TodosComponent, AdvancedButtonComponent],
})
export class UiModule {}
