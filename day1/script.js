// Create a React element (virtual DOM element) representing a div element with a class name and content
const div = React.createElement(
  "div", // The type of element (HTML tag)
  { className: "subheading" }, // Props (attributes) for the element
  [
    React.createElement(
      "section", // The type of element (HTML tag)
      { className: "section", key: "1" }, // Props (attributes) for the element
      [
        React.createElement(
          "form", // The type of element (HTML tag)
          { className: "form", key: "2" } // Props (attributes) for the element
        ),
      ],
      React.createElement(
        "label",
        { id: "label", key: "3", style: { padding: "20px" } },
        "User name",
        [
          React.createElement(
            "input",
            {
              type: "text",
              key: "7",
              placeholder: "Enter your username",
              htmlFor: "label",
            },
            null
          ),
        ]
      )
    ),
    React.createElement(
      "section", // The type of element (HTML tag)
      { className: "section", key: "4" }, // Props (attributes) for the element
      [
        React.createElement(
          "h1", // The type of element (HTML tag)
          { className: "heading", key: "5" }, // Props (attributes) for the element
          "Hello World" // Content inside the <h1> element
        ),
      ],
      React.createElement("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        alt: "placeholder image",
        width: "200",
        key: "6",
        style: {
          backgroundColor: "black",
          borderRadius: "10%",
          padding: "10px",
        },
      })
    ),
  ]
);

// Select the root DOM element where the React app will be rendered
const root = ReactDOM.createRoot(document.querySelector("#root")); // React 18+ API for creating a root

// Render the React element into the root DOM element
root.render(div);
