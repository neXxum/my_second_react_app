import React from 'react'
import style from './CreateABoardForm.module.css'
import {createField, Input} from "../../../Common/FormControl/FormControl";
import {required} from "../../../../utils/utils";
import {InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../../../redux/store";
import {connect} from "react-redux";
import {addBoard} from "../../../../redux/boards-reducer";

type CreateABoardFormValuesType = {
    name: string
}

type CreateABoardFormValuesTypeKeys = Extract<keyof CreateABoardFormValuesType, string>

const CreateABoardForm: React.FC<InjectedFormProps<CreateABoardFormValuesType & OwnProps>> = ({ handleSubmit}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h3>Creating a board</h3>
            </div>

            <div className={style.content}>
                <form onSubmit={handleSubmit}>
                    <p>Name for the board:</p>
                    {createField<CreateABoardFormValuesTypeKeys>('', 'name', [required], Input)}
                    <div className={style.btnContainer}>
                        <button className={style.cancel}>Cancel</button>
                        <button className={style.create}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const CreateABoardReduxForm = reduxForm<CreateABoardFormValuesType & OwnProps>({
    form: 'createBoard'
})(CreateABoardForm)

type PropsType = OwnProps & DispatchPropsType

const CreateABoard: React.FC<PropsType> = ({addBoard, deactivatedEditMode}) => {
    const onSubmit = (formData: CreateABoardFormValuesType) => {
        addBoard(formData.name, [], [])
        deactivatedEditMode()
    }

    return (
        <div className={style.createDiv}>
            <CreateABoardReduxForm onSubmit={onSubmit} />
        </div>
    )
}



type OwnProps = {
    deactivatedEditMode: () => void
}

const mapStateToProps = (state: AppStateType) => ({

})

type DispatchPropsType = {
    addBoard: (name: string, lists: Array<string>, cards: Array<string>) => void
}

export default connect(mapStateToProps, {addBoard})(CreateABoard)