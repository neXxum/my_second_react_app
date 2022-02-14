import React, {ChangeEvent, FormEvent, useState} from 'react'
import style from './AddAList.module.css'
import {BoardItemsType} from "../../../../../../types/types";

type OwnPropsType = {
    addList: (id: string, boardItems: Array<BoardItemsType>) => void,
    boardId: string,
    boardItems: Array<BoardItemsType>
}

const AddAList: React.FC<OwnPropsType> = ({addList, boardId, boardItems}) => {

    const [editMode, setEditMode] = useState(false)

    const [localListName, setLocalListName] = useState('')

    const [placeholder, setPlaceholder] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    console.log([...boardItems])
    console.log('kek')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (localListName.length < 26 && localListName.length > 0) {
            if (boardItems.length > 0) {
                addList(boardId, [...boardItems, {list: localListName, cards: []}])
            } else {
                addList(boardId, [{list: localListName, cards: []}])
            }
            setLocalListName('')
        } else if (localListName.length > 25) {
            setLocalListName('')
            setPlaceholder('Max length is 50 symbols')
        } else if (localListName === '') {
            setPlaceholder('Field is required')
        }
        deactivateEditMode()
    }

    const onListNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalListName(e.currentTarget.value)
    }

    return (
        <div className={style.container}>
            {
                editMode ? <div className={style.addAList}>
                        <div className={style.title}>
                            <h3>New List</h3>
                        </div>
                        <div><input onChange={onListNameChange} value={localListName} placeholder={placeholder}/></div>
                        <div className={style.buttons}>
                            <button onClick={deactivateEditMode} className={style.cancel}>Cancel</button>
                            <button disabled={localListName === ''} onClick={onSubmit} className={style.create}>Create
                            </button>
                        </div>
                    </div> :
                    <button className={style.btn} onClick={activateEditMode}>Add a list</button>
            }
        </div>
    )
}

export default AddAList