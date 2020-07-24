import { text, number, boolean } from '@storybook/addon-knobs';
import { AdvancedButtonComponent } from './advanced-button.component';

export default {
    title: 'AdvancedButtonComponent'
  }

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: AdvancedButtonComponent,
  props: {

  }
})
