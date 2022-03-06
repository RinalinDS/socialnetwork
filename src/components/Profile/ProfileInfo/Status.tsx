import React, {ChangeEvent, Component} from 'react';

type propsType = {
    status: string
    updateUserStatus: (userId: string) => void
}
type stateType = {
    editMode: boolean
    status: string
}

export class Status extends Component<propsType, stateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<stateType>) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
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
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'} </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus value={this.state.status} onBlur={this.deActivateEditMode.bind(this)}
                               onChange={this.changeStatusTitle}/>
                    </div>
                }
            </div>
        )
    }
}

export default Status;