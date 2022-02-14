import BoardService from './BoardService.js'

class BoardController {
    async create(req, res) {
        try{
            const board = await BoardService.create(req.body)
            return res.json(board)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const boards = await BoardService.getAll()
            return res.json(boards)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedBoard = await BoardService.update(req.body)
            return res.json(updatedBoard)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const board = await BoardService.delete(req.params.id)
            return res.json(board)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}

export default new BoardController()