import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../../common/FormsControls/FormsControl";
import {required} from "../../validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import styles from './../../common/FormsControls/FormsControl.module.css'
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/store";


type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
  captcha: string
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  const captchaUrl = useSelector<AppRootStateType, string>(state => state.auth.captchaUrl)
  /*
        handle sumbit выполняет 3 действия : 1). e.preventdefault чтобы не перезагружать страницу  при сабмите
        2). собирает все данные с форм в один объект
        3). вызывает функцию переданную с родительской компоненты ОнСабмит и засовывает в нее этот объект*/
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <Field validate={[required]} placeholder={'Login'} component={Input} name={'login'}/>
      </div>
      <div>
        <Field validate={[required]} placeholder={'Password'} component={Input} name={'password'} type={'password '}/>
      </div>
      <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me</div>
      <div>
        <button>Login</button>
      </div>
      {captchaUrl && <div>
        <Field validate={[required]} placeholder={'captcha'} component={Input} name={'captcha'} type={'text'}/>
      </div>}
      {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
      {props.error && <div>
        <span className={styles.submitError}>{props.error}</span></div>}
    </form>

  );
};

const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

const Login = (props: mapDispatchToPropsType & mapStateToPropsType) => {

  // Сюда придет форм дата благодаря вызову handleSubmit при нажатии на баттон автомат самбитится форма.
  // и сюда прилетает объект форм дата в котолром инфа со всех инпутов
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
    props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>
        Welcome to Login page
      </h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>

  );
};

type mapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type mapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, {login})(Login)