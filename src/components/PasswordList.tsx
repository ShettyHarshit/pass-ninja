import { Password } from "@/data/Password";
import { decryptPassword } from "@/services/encryption";
import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function PasswordList({ passwords }: { passwords: Password[] }) {
  return (
    <div>
      <center>
        <h1>Your Passwords</h1>
      </center>
      <br />
      {passwords.map((ps: Password, i: number) => {
        return <PasswordRow password={ps} key={i} />;
      })}
    </div>
  );
}

export default PasswordList;

const PasswordRow = ({ password }: { password: Password }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div>
      <UnorderedList>
        <ListItem>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2>Platform: {password.title}</h2>
              <h3>
                Password:{" "}
                <span className={isHidden ? "blur" : "no-blur"}>
                  {decryptPassword({ encrypted: password.value })}
                </span>
              </h3>
            </div>
            <div>
              <Button
                onClick={() => {
                  setIsHidden(!isHidden);
                }}
              >
                Reveal
              </Button>{" "}
              <Button>Delete</Button>
            </div>
          </div>
        </ListItem>
      </UnorderedList>
    </div>
  );
};
