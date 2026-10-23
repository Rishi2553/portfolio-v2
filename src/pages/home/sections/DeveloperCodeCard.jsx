
import "./DeveloperCodeCard.css";

function DeveloperCodeCard() {
  return (
    <div className="developer-code-card">
      <div className="developer-code-top">
        <i className="developer-window-dot" />
        <i className="developer-window-dot" />
        <i className="developer-window-dot" />
        <span className="developer-code-filename">
          developer.java
        </span>
      </div>

      <div className="developer-code-content">
        <div>
          <span className="developer-purple">class</span>{" "}
          <span className="developer-blue">Developer</span> {"{"}
        </div>

        <div className="developer-indent">
          <span className="developer-purple">String</span>{" "}
          focus = <span className="developer-green">"Build & learn"</span>;
        </div>

        <div className="developer-indent">
          <span className="developer-purple">String[]</span> stack = {"{"}
        </div>

        <div className="developer-indent developer-code-line">
          <span className="developer-green">"Java"</span>,{" "}
          <span className="developer-green">"Spring Boot"</span>,
        </div>

        <div className="developer-indent developer-code-line">
          <span className="developer-green">"React"</span>,{" "}
          <span className="developer-green">"Flutter"</span>
        </div>

        <div className="developer-indent">{"};"}</div>

        <div className="developer-indent">
          <span className="developer-purple">boolean</span>{" "}
          keepImproving = <span className="developer-blue">true</span>;
        </div>

        <div>{"}"}</div>
      </div>
    </div>
  );
}

export default DeveloperCodeCard;
