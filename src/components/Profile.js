import React, { useEffect, useState } from "react";
import { useMatch } from "@reach/router";
import { firestore } from "../firebase.util";

export default function Profile() {
  const match = useMatch("/users/:userId");
  const [user, setUser] = useState(null);
  useEffect(() => {
    firestore
      .collection("users")
      .doc(match.userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setUser(doc.data());
        }
      });
  }, []);

  return <div>{user.diet}</div>;
}
