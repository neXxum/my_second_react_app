import {BoardItemsType, BoardsType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./store";
import {boardsAPI} from "../api/boards-api";

let initialState = {
    boards: [] as Array<BoardsType>,
    boardNumber: undefined as undefined | number,
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const boardsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "PROJECT2/FRONTEND/BOARDS_REDUCER/SET_BOARDS":
            return {
                ...state, boards: action.boards
            }

        case "PROJECT2/FRONTEND/BOARDS_REDUCER/SET_BOARD_NUMBER":
            return {
                ...state, boardNumber: action.boardNumber
            }

        default:
            return state
    }
}


export const actions = {
    setBoards: (boards: Array<BoardsType>) => ({
        type: "PROJECT2/FRONTEND/BOARDS_REDUCER/SET_BOARDS",
        boards
    } as const),

    setBoardNumber: (boardNumber: number) => ({
        type: "PROJECT2/FRONTEND/BOARDS_REDUCER/SET_BOARD_NUMBER",
        boardNumber
    } as const),

}

export const addBoard = (name: string): ThunkType => async (dispatch) => {
    let data = await boardsAPI.addBoard(name)
    dispatch(getBoards())
}

export const deleteBoard = (id: string): ThunkType => async (dispatch) => {
    let data = await boardsAPI.deleteBoard(id)
    dispatch(getBoards())
}

export const updateBoard = (id: string, name: string, boardItems: BoardItemsType): ThunkType => async (dispatch) => {
    let data = await boardsAPI.updateBoard(id, name, boardItems)
    dispatch(getBoards())
}

export const addList = (id: string, boardItems: Array<BoardItemsType>): ThunkType => async (dispatch) => {
    let data = await boardsAPI.addList(id, boardItems)
    dispatch(getBoards())
}

export const addCard = (id: string, boardItems: Array<BoardItemsType>): ThunkType => async (dispatch) => {
    let data = await boardsAPI.addCard(id, boardItems)
    dispatch(getBoards())
}

export const getBoards = (): ThunkType => async (dispatch) => {
    let data = await boardsAPI.getBoards()
    dispatch(actions.setBoards(data))
}

export default boardsReducer
