import React from "react";

export default function Button(props: { toggleFunc: Function }) {
  const onclickBtn = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    console.log("You clicked submit.", e.target);
    props.toggleFunc();
  };
  return (
    <div>
      <button type="button" className="btn" onClick={onclickBtn}>
        Send to Parent Component
      </button>
    </div>
  );
}
