import React from 'react'
import Terminal from 'react-console-emulator'


class MyTerminal extends React.Component {
    constructor (props) {
        super(props)

        this.terminal = React.createRef();
        this.commands = {
           run: {
                description: 'run potigol code',
                usage: 'run',
                fn: () => {
                    const terminal = this.terminal.current;

                    props.run().then(resp => {
                        terminal.clearStdout();
                        terminal.pushToStdout(resp.out);
                    });

                    return 'loading output ...'
                }
            }
        }
    }

    render () {
        return (
            <Terminal
            ref={this.terminal}
            commands={this.commands}
            welcomeMessage={'Welcome to Potigol Web, write <run> bellow to execute you code. Enjoy 🦐'}
            promptLabel={'me@Camarao:~$'}
            textColor={'#e2e2e2'}
            background={'#111'}
            />
            )
    }
}

export default MyTerminal;