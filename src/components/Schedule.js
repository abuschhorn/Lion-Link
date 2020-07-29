import React from "react";
export default function Schedule({ classes }) {
  return (
    <div>
      <ul>
        {classes &&
          classes.map((newClass) => {
            return (
              <li key={newClass.className}>
                {newClass.className},{newClass.profName}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
