import React from "react";
import { Header, Profile } from "../components";
import * as ROUTES from "../constants/routes";

interface Props {
  user: firebase.User | null;
  setProfile: any;
}

const SelectProfileContainer: React.FC<Props> = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user?.displayName,
                photoURL: user?.photoURL,
              })
            }
          >
            <Profile.Image
              src={
                user && user.photoURL
                  ? `/images/users/${String(user.photoURL)}.png`
                  : "/images/misc/loading.gif"
              }
              alt={user?.displayName || ""}
            />
            <Profile.Name>{user?.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
};

export default SelectProfileContainer;
