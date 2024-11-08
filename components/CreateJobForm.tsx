"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomerFormField, CustomerFormSelect } from "./FormComponents";
import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/type";

const CreateJobForm = () => {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      location: "",
      company: "",
      mode: JobMode.FullTime,
      status: JobStatus.Pending,
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="font-semibold mb-6 text-4xl capitalize">Add Job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomerFormField name="position" control={form.control} />
          <CustomerFormField name="company" control={form.control} />
          <CustomerFormField name="location" control={form.control} />

          <CustomerFormSelect
            name="status"
            labelText="job status"
            control={form.control}
            items={Object.values(JobStatus)}
          />
          <CustomerFormSelect
            name="mode"
            labelText="job mode"
            control={form.control}
            items={Object.values(JobMode)}
          />
          <Button type="submit" className=" capitalize self-end">
            create job
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default CreateJobForm;
