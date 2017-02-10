"use strict";

function Application() {
  return React.createElement(
    "div",
    { className: "scoreboard" },
    React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "h1",
        null,
        "Scoreboard"
      )
    ),
    React.createElement(
      "div",
      { className: "players" },
      React.createElement(
        "div",
        { className: "player" },
        React.createElement(
          "div",
          { className: "player-name" },
          "Katy"
        ),
        React.createElement(
          "div",
          { className: "player-score" },
          React.createElement(
            "button",
            { className: "counter-action decrement" },
            " - "
          ),
          React.createElement(
            "div",
            { "class": "counter-score" },
            " 31 "
          ),
          React.createElement(
            "button",
            { className: "counter-action increment" },
            " + "
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Application, null), document.getElementById('container'));