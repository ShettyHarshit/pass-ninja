import { addPassword } from "@/services/encryption";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function AddPassword({ refreshPasswordList }: { refreshPasswordList: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addPassword(data);
    refreshPasswordList();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Platform</FormLabel>
          <Input type="text" {...register("title")} />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("value")} />
        </FormControl>
        <br />
        <div className="form-control">
          <label></label>
          <Button type="submit">Add Password</Button>
        </div>
      </form>
    </div>
  );
}

export default AddPassword;
