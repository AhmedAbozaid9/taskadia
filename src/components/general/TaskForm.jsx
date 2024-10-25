"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
const TaskForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Open Modal
      </Button>
      <Modal
        className="bg-main-dark-bg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-5">
                Create a new Task
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Title"
                  placeholder="Enter the task name"
                  variant="bordered"
                />
                <Input
                  label="Description"
                  placeholder="Enter the task description"
                  type="password"
                  variant="bordered"
                />
                <Select
                  placeholder="Select Priority"
                  variant="bordered"
                  classNames={{ trigger: "py-6" }}
                >
                  <SelectItem key="low">Low</SelectItem>
                  <SelectItem key="medium">Medium</SelectItem>
                  <SelectItem key="high">High</SelectItem>
                </Select>
                <Select
                  placeholder="Task state"
                  variant="bordered"
                  classNames={{ trigger: "py-6" }}
                >
                  <SelectItem key="todo">To do</SelectItem>
                  <SelectItem key="doing">Doing</SelectItem>
                  <SelectItem key="done">Done</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-primary-purple"
                  color="primary"
                  onPress={onClose}
                >
                  Add Task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskForm;
