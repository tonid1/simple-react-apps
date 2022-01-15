import './App.css';
import ToDoList from './components/to-do-list/ToDoList';
import Hangman from './components/hangman/Hangman';
import TicTacToeGame from './components/tic-tac-toe/TicTacToeGame';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <div>
      <ToDoList />
      <Hangman />
      <TicTacToeGame />
      <Calculator />
    </div>
  );
}

export default App;
