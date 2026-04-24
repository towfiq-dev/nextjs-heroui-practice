"use client";
import React from 'react';
import {Button, Input, Label, Modal, TextField} from "@heroui/react";

const AddTask2 = ({addingTask}) => {
  return (
    <div>
      <form className="flex flex-col gap-4" action={addingTask}>
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your task Description" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button  type='submit'>Submit</Button>
            </Modal.Footer>
            </form>
    </div>
  );
};

export default AddTask2;