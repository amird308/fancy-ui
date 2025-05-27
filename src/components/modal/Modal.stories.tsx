import type { Meta, StoryObj } from '@storybook/react';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from './Modal';
import { Button } from '../button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a modal description. You can put any content here.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p>Modal content goes here. This is the main body of the modal.</p>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Edit Profile</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you're done.
          </ModalDescription>
        </ModalHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="John Doe"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">
              Email
            </label>
            <input
              id="email"
              defaultValue="john@example.com"
              className="col-span-3 px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Are you absolutely sure?</ModalTitle>
          <ModalDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}; 