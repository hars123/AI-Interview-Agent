import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,

  FormItem,
  FormLabel,
  FormMessage,
 
} from "@/components/ui/form"

import { Input } from './ui/input'
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form'
import { extend } from 'dayjs'

interface FormFieldProps<T extends FieldValues>{
  control : Control<T>;
  name : Path<T>;
  label:string;
  placeholder?:string;
 type?: 'text' | 'email' | 'password' | 'file';



}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",   // ✅ fixed, no space!
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
);


export default FormField;
