import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Pick a date',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Select your birthday',
  },
};

export const WithSelectedDate: Story = {
  args: {
    selected: new Date(),
    placeholder: 'Pick a date',
  },
};

// Interactive story with state management
export const Interactive: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    
    return (
      <div>
        <DatePicker
          {...args}
          selected={date}
          onSelect={setDate}
        />
        {date && (
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
            Selected: {date.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
  args: {
    placeholder: 'Pick a date',
  },
}; 