import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../../common/FormsControls/FormsControl";
import {required} from "../../validators/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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
                <Field validate={[required]} placeholder={'Password'} component={Input} name={'password'}/>
            </div>
            <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>

    );
};

const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

export const Login = () => {

    // Сюда придет форм дата благодаря вызову handleSubmit при нажатии на баттон автомат самбитится форма.
    // и сюда прилетает объект форм дата в котолром инфа со всех инпутов
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
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

