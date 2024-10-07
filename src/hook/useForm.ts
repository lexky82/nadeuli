import { useState } from "react";
import { ZodSchema, z } from "zod";

export const useForm = <T extends ZodSchema<any>>(initialValues: z.infer<T>, validateSchema: T) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));

    const validationResult = validateSchema.safeParse({ ...formData, [id]: value });

    if (!validationResult.success) {
      const zodError = validationResult.error.issues
        .map((zIssue) => {
          return { [zIssue.path[0]]: zIssue.message };
        })
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});

      setErrors(zodError);
    } else {
      setErrors({});
    }
  };

  return { formData, errors, handleChange };
};
