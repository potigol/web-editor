import React from 'react'
import Terminal from 'react-console-emulator'


class MyTerminal extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            log: ''
        },
        this.terminal = React.createRef(),
        this.commands = {
            run: {
                description: 'Run potigol code',
                fn: () => {
                    const terminal = this.terminal.current;
                    const date = new Date();

                    props.run(out => {
                        this.setState({
                            log: this.state.log + `
                            ${date.getHours()}:${date.getMinutes()} || ${out}`
                        });

                        terminal.clearStdout();
                        terminal.pushToStdout(out);
                    });

                    return 'loading output ...'
                }
            },
            log: {
                description: 'Show log history',
                fn: () => {
                    const terminal = this.terminal.current;

                    setTimeout(() => {
                        terminal.clearStdout();
                        terminal.pushToStdout(this.state.log);
                    }, 500);

                    return 'loading log...';
                }
            }
        }
    }

    render () {
        return (
            <Terminal
            ref={this.terminal}
            commands={this.commands}
            welcomeMessage={'Welcome to Potigol Web, write <help> to view all commands. Enjoy 🦐'}
            promptLabel={'me@Camarao:~$'}
            textColor={'#e2e2e2'}
            background={'#111'}
            />
            )
    }
}

export default MyTerminal;