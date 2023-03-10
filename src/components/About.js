import React from "react";

export default function About(props) {
  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div
          className="text my-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>An Solution for your text needs!</h1>
        </div>
        <div
          className="img "
          style={{
            width: "50vw",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
