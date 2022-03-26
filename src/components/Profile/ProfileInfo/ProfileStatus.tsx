import React, {ChangeEvent, useState} from 'react';

type propsType = {
    status: string
    updateUserStatus: (userId: string) => void
}


export const ProfileStatus = (props: propsType) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const changeStatusTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'} </span>
            </div>
            }
            {editMode &&
                <div>
                    <input autoFocus value={status} onBlur={deactivateEditMode}
                           onChange={changeStatusTitle}/>
                </div>
            }
        </div>
    )
}

