import Board from './Board.js'

class BoardService {
    async create(board) {
        const createdBoard = await Board.create(board)
        return createdBoard
    }

    async getAll() {
        const boards = await Board.find()
        return boards
    }

    async update(board) {
        if (!board._id) {
            throw new Error('Id не указан')
        }
        const updatedBoard = await Board.findByIdAndUpdate(board._id, board, {new: true})
        return updatedBoard
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const board = await Board.findByIdAndDelete(id)
        return board
    }
}

export default new BoardService()