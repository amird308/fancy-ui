# @amird3088/fancy-ui

React UI component library built with Radix Primitives and TailwindCSS.

#demo

### https://demo-gules-tau.vercel.app/


## Installation

```bash
# Using npm
npm install @amird3088/fancy-ui

# Using pnpm
pnpm add @amird3088/fancy-ui

# Using yarn
yarn add @amird3088/fancy-ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom
```

## Setup

### Import Styles

```tsx
// In your css
@import '@amird3088/fancy-ui/dist/index.css';
```

## Usage

### Button

```tsx
import { Button } from '@amird3088/fancy-ui';

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline" size="sm">Small Outline</Button>
      <Button variant="ghost" size="lg">Large Ghost</Button>
    </div>
  );
}
```

### Input

```tsx
import { Input } from '@amird3088/fancy-ui';

function App() {
  return (
    <div>
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter password" />
    </div>
  );
}
```

### Modal

```tsx
import { 
  Modal, 
  ModalTrigger, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription,
  ModalFooter,
  ModalClose,
  Button 
} from '@amird3088/fancy-ui';

function App() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a modal description.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <Button>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
```

### DatePicker

```tsx
import { DatePicker } from '@amird3088/fancy-ui';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState<Date>();

  return (
    <DatePicker
      selected={date}
      onSelect={setDate}
      placeholder="Select a date"
    />
  );
}
```



### Building the Library

```bash
pnpm install
pnpm build
pnpm run build-storybook
```

### Development Mode

```bash
pnpm run storybook
```
