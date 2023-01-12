
import InputBox from "../components/input";
import Nav from "../components/navbar"
import PreviewCard from "../components/preview";
import { signIn, signOut, useSession, } from 'next-auth/react';
import { useState } from "react";

export default function SignIn() {
  const [currentList, setCurrentList] = useState<string>('');

  const onValueChanged = (input: string) => {
    setCurrentList(input);
  }
  return (
  <>
    <Nav />
      <InputBox onChangeValue={onValueChanged}/>
      <PreviewCard curList={currentList}/>
  </>
  );
}



