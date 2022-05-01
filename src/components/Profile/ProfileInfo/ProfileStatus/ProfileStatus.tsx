import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './style/ProfileStatus.module.css'

type propsType = {
    status: string
    updateUserStatus: (userId: string) => void
}


export const ProfileStatus = (props: propsType) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
        <div className={s.status}>
            {!editMode && <div>
               <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || 'change status'} </span>
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
