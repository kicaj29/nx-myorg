import { text, number, boolean } from '@storybook/addon-knobs';
import { TodosComponent } from './todos.component';
import { Todo } from '@nx-myorg/data'

export default {
  title: 'TodosComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TodosComponent,
  props: {
    todos: [{title: 'todo1'}, {title: 'todo2'}]
  }
})
