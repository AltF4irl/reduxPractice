import NoteForm from './components/NoteForm'
import Notes from './components/Notes'
import './App.css'
import VisibilityFilter from './components/VisibilityFilter'


const App = () => {

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App