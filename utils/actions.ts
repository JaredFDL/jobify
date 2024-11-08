import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from "./type";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

const authenticateAndRedirect = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
};

export const createJobAction = async (
  values: CreateAndEditJobType
): Promise<JobType | null> => {
  const userId = authenticateAndRedirect();
  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        clerkId: userId,
        ...values,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
};
