import React from "react";
import MonacoEditor from "react-monaco-editor";

class CodeEditor2 extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code... \n",
      theme: "vs-light",
      anchorEl: null
    };
  }

  // @ts-ignore
  onChange = newValue => {
    console.log("onChange", newValue); // eslint-disable-line no-console
  };

  // @ts-ignore
  editorDidMount = editor => {
    // eslint-disable-next-line no-console
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    // @ts-ignore
    this.editor = editor;
  };

  changeEditorValue = () => {
    // @ts-ignore
    if (this.editor) {
      // @ts-ignore
      this.editor.setValue("// code changed! \n");
    }
  };

  changeBySetState = () => {
    this.setState({ code: "// code changed by setState! \n" });
  };

  setDarkTheme = () => {
    this.setState({ theme: "vs-dark" });
  };

  setLightTheme = () => {
    this.setState({ theme: "vs-light" });
  };

  componentDidUpdate() {
    // @ts-ignore
    console.log("did update", this.state.anchorEl);
    // @ts-ignore
    // if (this.state.anchorEl && this.state.anchorEl.) {

    // }
  }

  render() {
    // @ts-ignore
    const { code, theme, anchorEl } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false
    };
    console.log("anchorel", anchorEl && anchorEl.ownerDocument);
    return (
      <div
        ref={r => {
          if (!anchorEl && r) {
            this.setState({
              ...this.state,
              anchorEl: r
            });
          }
        }}
      >
        <div>
          <button onClick={this.changeEditorValue} type="button">
            Change value
          </button>
          <button onClick={this.changeBySetState} type="button">
            Change by setState
          </button>
          <button onClick={this.setDarkTheme} type="button">
            Set dark theme
          </button>
          <button onClick={this.setLightTheme} type="button">
            Set light theme
          </button>
        </div>
        <hr />
        {anchorEl && (
          <MonacoEditor
            height="400"
            width="400"
            language="javascript"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
            theme={theme}
            context={anchorEl ? anchorEl.ownerDocument.defaultView : window}
          />
        )}
      </div>
    );
  }
}

export default CodeEditor2;
