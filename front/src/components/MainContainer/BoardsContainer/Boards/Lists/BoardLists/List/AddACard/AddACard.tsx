import React, {ChangeEvent, FormEvent, useState} from 'react'
import {BoardItemsType} from "../../../../../../../../types/types";
import {maxLengthCreator} from "../../../../../../../../utils/utils";

const AddACard: React.FC<PropsType> = ({boardItems, addCard, index, listName, boardId}) => {

    let updatedBoardItem = [...boardItems]

    const [localCardName, setLocalCardName] = useState('')

    const [placeholder, setPlaceholder] = useState('')

    const onLocalCardNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalCardName(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (localCardName.length < 50 && localCardName.length > 0) {

            if (updatedBoardItem[index].cards.length > 0) {
                updatedBoardItem[index] = {
                    list: listName,
                    cards: [...updatedBoardItem[index].cards, {cardName: localCardName, isDone: false}]
                }
            } else {
                updatedBoardItem[index] = {list: listName, cards: [{cardName: localCardName, isDone: false}]}
            }
            addCard(boardId, updatedBoardItem)
            setLocalCardName('')
        } else if (localCardName.length > 50) {
            setLocalCardName('')
            setPlaceholder('Max length is 50 symbols')
        } else if (localCardName === '') {
            setPlaceholder('Field is required')
        }
        console.log(...updatedBoardItem[index].cards)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input  onChange={onLocalCardNameChange} value={localCardName} placeholder={placeholder}/>
            </form>
        </div>
    )
}

type PropsType = OwnPropsType

type OwnPropsType = {
    boardItems: Array<BoardItemsType>,
    boardId: string,
    index: number,
    listName: string,
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void
}

export default AddACard