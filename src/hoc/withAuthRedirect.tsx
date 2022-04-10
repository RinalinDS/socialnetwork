import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";

type MapStateType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

// 1). function потому что со стрелочными <T> как-то криво работает
// 2). деструктуризация пропсов , чтобы isAuth не шел дальше по дереву, потоуо что там он не нужен
// 3). T дженерики , типизация для того чтобы можно было принимать разные компоненты с их типами пропсов.
// 4). Валера так сделал иначе не работало, нужно дать понять пропсам, что они именно этого типа уйдут отсюда , как и пришли.


export function withAuthRedirect<T>(Component: ComponentType<T>) { // 1. и 3.
    const WrappedComponent = (props: MapStateType) => {
        let {isAuth, ...respProps} = props // 2
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...respProps as T} /> // 4.
    }
    return connect(mapStateToProps)(WrappedComponent)
}