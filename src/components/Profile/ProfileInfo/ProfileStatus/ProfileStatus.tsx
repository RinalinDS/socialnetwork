import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './style/ProfileStatus.module.css'

type propsType = {
  status: string
  updateUserStatus: (userId: string) => void
}


export const ProfileStatus: FC<propsType> = ({status, updateUserStatus}) => {

  const [profileStatus, setProfileStatus] = useState(status)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setProfileStatus(status)
  }, [status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    updateUserStatus(profileStatus)
  }
  const changeStatusTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileStatus(e.currentTarget.value)
  }

  return (
    <div className={s.status}>
      {editMode || <div>
        <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || 'change status'} </span>
      </div>
      }
      {editMode &&
        <div>
          <input autoFocus value={profileStatus} onBlur={deactivateEditMode}
                 onChange={changeStatusTitle}/>
        </div>
      }
    </div>
  )
}

