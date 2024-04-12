import { useState } from 'react'
import { Chessboard } from 'react-chessboard';
import './App.css'
import { Chess } from 'chess.js';


const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

function App() {

  const [fen, setFen] = useState(START_FEN)

  const chess = new Chess()

  const setRandomFen = () => {
    chess.load(START_FEN)
    const num_moves = Math.floor(Math.random() * 10)
    console.log('num moves', num_moves)
    for (let i = 0; i < num_moves; i++) {
      const moves = chess.moves()
      const move = moves[Math.floor(Math.random() * moves.length)]
      chess.move(move)
    }
    setFen(chess.fen())
  }

  return (
    <>
      <div className='main-app'>
        <button className='change-fen-button' onClick={() => setRandomFen()}>Change Fen</button>
        <div className='section'>
          <h3>100px</h3>
          <div className="board-wrapper-1">
            <Chessboard
              arePiecesDraggable={false}
              position={fen}
              customDarkSquareStyle={{ backgroundColor: '#FFCA80' }}
              customLightSquareStyle={{ backgroundColor: '#FFFFFF' }}
            />
          </div>
        </div>
        <div className='section'>
          <h3>135px</h3>
          <div className="board-wrapper-2">
            <Chessboard
              arePiecesDraggable={false}
              position={fen}
              customDarkSquareStyle={{ backgroundColor: '#FFCA80' }}
              customLightSquareStyle={{ backgroundColor: '#FFFFFF' }}
            />
          </div>
        </div>
        <div className='section'>
          <h3>200px</h3>
          <div className="board-wrapper-3">
            <Chessboard
              arePiecesDraggable={false}
              position={fen}
              customDarkSquareStyle={{ backgroundColor: '#FFCA80' }}
              customLightSquareStyle={{ backgroundColor: '#FFFFFF' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
