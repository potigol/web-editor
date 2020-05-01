import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
 
class Console extends Component
{
    constructor()
    {
        super();

        this.state = {
            msg: "Web editor para potigol 🍤\nFeito por @cripboyjs ❤️"
        }
    }

    showMsg()
    {
      return 'Hello World'
    }

    render() {
      return (
          <Terminal
            allowTabs={false}
            msg={this.state.msg}
            style={{ fontWeight: "bold", fontSize: "1.1em", height: "50vh"}}
          />
      );
    }
}

export default Console;