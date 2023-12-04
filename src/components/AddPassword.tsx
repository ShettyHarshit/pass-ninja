import { Password } from "@/data/Password";
import { addPassword } from "@/services/encryption";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddPassword({ refreshPasswordList }: { refreshPasswordList: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Password>();

  const onSubmit = (data: Password) => {
    addPassword(data);
    refreshPasswordList();
    reset();
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
          <InputGroup size="md">
            <Input type={show ? "text" : "password"} {...register("value")} />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
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
