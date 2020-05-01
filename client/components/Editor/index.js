import React from "react";
import AceEditor from "react-ace";
 
import "ace-builds/src-noconflict/mode-java";
import "./mode-potigol.js";
import "ace-builds/src-noconflict/theme-monokai";

class Editor extends React.Component
{
    constructor(props)
    {
        super(props);

        this.defaultValue = 'var a = "world"\nescreva "Hello {a}"';
    }

    onChange(newValue) {
        console.log("change", newValue);
    }

    render()
    {
        return(
            <AceEditor
                mode="potigol"
                theme="monokai"
                width="100%"
                height="100vh"
                fontSize="19px"
                onChange={this.onChange}
                value={this.defaultValue}
                name="potigol-editor"
                highlightActiveLine={false}
                showPrintMargin={false}
                editorProps={{ $blockScrolling: true }}
            />
        )
    }
}

export default Editor;