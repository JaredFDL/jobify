import type { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "./ui/form";
import { Input } from "./ui/input";

interface CustomFormFieldProps {
  name: string;
  control: Control<any>;
}

interface CustomFormSelectProps extends CustomFormFieldProps {
  items: string[];
  labelText?: string;
}

export const CustomerFormField = ({ name, control }: CustomFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize font-semibold">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomerFormSelect = ({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize font-semibold">
            {labelText || name}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
