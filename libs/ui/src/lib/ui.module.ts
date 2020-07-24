import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AdvancedButtonComponent } from './advanced-button/advanced-button.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, AdvancedButtonComponent, SliderComponent],
  exports: [TodosComponent, AdvancedButtonComponent, SliderComponent],
})
export class UiModule {}
