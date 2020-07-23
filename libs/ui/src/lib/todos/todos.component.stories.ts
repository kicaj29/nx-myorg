import { text, number, boolean } from '@storybook/addon-knobs';
import { TodosComponent } from './todos.component';

export default {
  title: 'TodosComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TodosComponent,
  props: {
    todos: text('todos', 'todos'),
  }
})
