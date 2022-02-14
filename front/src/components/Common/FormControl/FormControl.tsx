import React from 'react'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form'
import style from './FormControl.module.css'
import {FieldValidatorType} from '../../../utils/utils'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType>
    = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div>
            <div>
                {children}
                <br/>
                {hasError && <span className={style.error}>{error}</span>}
            </div>
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = ""
) {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   {...props}/> {text}
        </div>
    )
}