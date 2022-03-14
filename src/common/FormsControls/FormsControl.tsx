import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from "./FormsControl.module.css"


export const Textarea: React.FC<WrappedFieldProps> = props => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input: React.FC<WrappedFieldProps> = props => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


export const FormControl: React.FC<WrappedFieldProps & { placeholder?: string }> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}
