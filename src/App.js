import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="todo">
        <div className="container">
          <div className="todo__inner">
            <div className="todo__form">
              <input type="text" />
              <button>
                <div></div>
                <div></div>
              </button>
            </div>
            <div className="todo__list">
              <div className="todo__item">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deleniti repellendus accusamus nulla exercitationem, iusto
                  facilis porro! Temporibus assumenda veniam ea accusamus sed,
                  ipsa labore rerum, omnis, qui dolore reiciendis ullam.
                </p>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
