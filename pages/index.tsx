
import InputBox from "../components/input";
import Nav from "../components/navbar"
import { signIn, signOut, useSession, } from 'next-auth/react';

export default function SignIn() {
  return (
    <p>
    <Nav />
      <InputBox />
    </p>
  );
}



