import './App.css';
import ToDoList from './components/to-do-list/ToDoList';
import Hangman from './components/hangman/Hangman';
import TicTacToeGame from './components/tic-tac-toe/TicTacToeGame';
import Fields from './components/calculator/Fields';

function App() {
  return (
    <div>
      <ToDoList />
      <Hangman />
      <TicTacToeGame />
      <Fields />
    </div>
  );
}

export default App;
