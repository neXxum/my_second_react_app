import {instance} from './api'
import {BoardItemsType, BoardsType} from "../types/types"

export const boardsAPI = {
    addBoard(name: string) {
        return instance.post<any>('boards', JSON.stringify({name}))
            .then(res => res.data)
    },

    deleteBoard(id: string) {
        return instance.delete<any>('boards/' + id)
    },

    updateBoard(id: string, name: string, boardItems: BoardItemsType) {
        return instance.put<any>('boards', JSON.stringify({_id: id, name, boardItems}))
            .then(res => res.data)
    },

    addList(id: string, boardItems: Array<BoardItemsType>) {
        return instance.put<any>('boards', JSON.stringify({_id: id, boardItems: boardItems}))
            .then(res => res.data)
    },


    addCard(id: string, boardItems: Array<BoardItemsType>) {
        return instance.put<any>('boards', JSON.stringify({_id: id, boardItems: boardItems}))
    },

    getBoards() {
        return instance.get<Array<BoardsType>>('boards')
            .then(res => res.data)
    }
}
