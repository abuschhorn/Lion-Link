import React from "react";
import { useMatch } from "@reach/router";

export default function Login() {
  const match = useMatch(`login`);
  return (
    <div>
      <form>
        <label>Email:</label>
        <input className='form-control' />
        <label>Password:</label>
        <input className='form-control' />
      </form>
    </div>
  );
}
