"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem,
  Skeleton,
} from "@nextui-org/react";

import { yupResolver } from "@hookform/resolvers/yup";
import TaskSchema from "@/schemas/TaskFormSchema";
import { X } from "lucide-react";
const TaskForm = ({ isOpen, setIsOpen, action, editValues }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: editValues,
    resolver: yupResolver(TaskSchema),
  });

  const [image, setImage] = useState(editValues?.image || null);
  const imageRef = useRef(null);

  const handleImageChange = () => {
    const file = imageRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    // Reset the file input
    if (imageRef.current) {
      imageRef.current.value = null; // Clear the input value
    }
  };

  const onSubmit = (data) => {
    action({ ...data, image });
    reset({
      title: "",
      description: "",
      priority: "",
      state: "",
    });
    setImage(null);
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        className="bg-main-dark-bg"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="top-center"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-5">
                Create a new Task
              </ModalHeader>
              <ModalBody className="flex flex-row max-sm:flex-col gap-5">
                <div className="flex flex-col gap-3 flex-1">
                  <Input
                    isInvalid={errors.title?.message}
                    errorMessage={errors.title?.message}
                    {...register("title")}
                    autoFocus
                    label="Title"
                    placeholder="Enter the task name"
                    variant="bordered"
                  />
                  <Textarea
                    isInvalid={errors.description?.message}
                    errorMessage={errors.description?.message}
                    {...register("description")}
                    label="Description"
                    placeholder="Enter the task description"
                    variant="bordered"
                  />
                  <Select
                    isInvalid={errors.priority?.message}
                    errorMessage={errors.priority?.message}
                    {...register("priority")}
                    placeholder="Select Priority"
                    variant="bordered"
                    classNames={{ trigger: "py-6" }}
                  >
                    <SelectItem key="low">Low</SelectItem>
                    <SelectItem key="medium">Medium</SelectItem>
                    <SelectItem key="high">High</SelectItem>
                  </Select>
                  <Select
                    isInvalid={errors.state?.message}
                    errorMessage={errors.state?.message}
                    {...register("state")}
                    placeholder="Task state"
                    variant="bordered"
                    classNames={{ trigger: "py-6" }}
                  >
                    <SelectItem key="todo">To do</SelectItem>
                    <SelectItem key="doing">Doing</SelectItem>
                    <SelectItem key="done">Done</SelectItem>
                  </Select>
                  <input
                    {...register("image")}
                    ref={imageRef}
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    className="file-input"
                    onChange={handleImageChange}
                    required
                  />
                </div>
                {image ? (
                  <div className="relative w-full w-full sm:max-w-96 h-72 ">
                    <button
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 z-10"
                    >
                      <X />
                    </button>
                    <Image
                      alt="project thumbnail"
                      fill
                      src={image}
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <Skeleton className="w-full sm:max-w-96 h-72"></Skeleton>
                )}
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-primary-purple"
                  color="primary"
                  onPress={handleSubmit(onSubmit)}
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
