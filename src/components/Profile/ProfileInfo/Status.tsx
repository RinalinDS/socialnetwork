import React, {ChangeEvent, Component} from 'react';

type propsType = {}
type stateType = {
    editMode: boolean
    status: string
}

export class Status extends Component<propsType, stateType> {
    state = {
        editMode: false,
        status: 'HELLO my friends!'
    }
    activateEditMode = () => {
        debugger
        console.log('this: ', this)
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    changeStatusTitle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  autoFocus value={this.state.status} type="text" onBlur={this.deActivateEditMode.bind(this)}
                               onChange={this.changeStatusTitle}/>
                    </div>
                }
            </div>
        )
    }
}

export default Status;