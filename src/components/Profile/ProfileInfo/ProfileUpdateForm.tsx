import {profileType, updateProfileTC} from '../../../redux/profileReducer';
import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {useFormik} from 'formik';

type ProfileUpdateFormPropsType = {
  setEdit: (value: boolean) => void
  profile: profileType
}
export const ProfileUpdateForm: FC<ProfileUpdateFormPropsType> = ({setEdit, profile}) => {
  const dispatch = useDispatch()
  const userId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
  const formik = useFormik({
    initialValues: {
      fullName: profile.fullName,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      lookingForAJob: profile.lookingForAJob,
      aboutMe: profile.aboutMe,
      contacts: {
        github: profile.contacts?.github,
        youtube: profile.contacts?.youtube
      }
    },
    onSubmit: values => {
      dispatch(updateProfileTC({...values, userId} as profileType))
      setEdit(false)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fullName"><b>Full name :</b></label>
        <div>
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </div>
      </div>

      <div><label htmlFor="lookingForAJobDescription">Resume:</label>
        <div><textarea
          {...formik.getFieldProps('lookingForAJobDescription')}
        /></div>
      </div>
      <div><label htmlFor="aboutMe">About me :</label>
        <div><textarea
          {...formik.getFieldProps('aboutMe')}
        /></div>
      </div>

      <div><label htmlFor="email"><b>Looking for a job: </b></label>
        <input type="checkbox"
               {...formik.getFieldProps('lookingForAJob')}
        />
      </div>
      <div>
        <label htmlFor="github"><b>Github :</b></label>
        <div>
          <input
            {...formik.getFieldProps('contacts.github')}
            type="text"

          />
        </div>
      </div>
      <div>
        <label htmlFor="youtube"><b>Youtube :</b></label>
        <div>
          <input
            {...formik.getFieldProps('contacts.youtube')}
            type="text"

          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};