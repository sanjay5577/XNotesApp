
import { useEffect, useState } from 'react';
import {nanoid} from "nanoid";
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  const[notes , setNotes] = useState( savedNotes ? savedNotes :[{
    id: nanoid(),
    text :"This is my first Note!",
    date :"15/05/2024"

  } ,
  {
    id: nanoid(),
    text :"This is my second Note!",
    date :"15/04/2024"

  },
  {
    id: nanoid(),
    text :"Holla!, This is my third Note!",
    date :"16/05/2024"

  }
  ])

  const[searchText , setSearchText] = useState("");
  const[darkMode , setDarkMode] = useState(false);

  // useEffect(()=>{
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

  //   if(savedNotes){
  //     setNotes(savedNotes)
  //   }

  // } ,[])

  useEffect(()=>{
    localStorage.setItem("react-notes-app-data" , JSON.stringify(notes))

  } , [notes])



  const addNote =(text)=>{

    const date = new Date();
    const newNote = {
      id : nanoid(),
      date: date.toLocaleDateString(),
      text : text
    }

    setNotes([...notes , newNote]);
  }

  const deleteNote = (id)=>{
    
    const newNotes  = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode ={setDarkMode}/>
        <Search  handleSearchNote ={setSearchText}/>
        <NotesList  notes ={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} 
        handleAddNote ={addNote}
        handleDeleteNote = {deleteNote}/>
      
      </div>
    </div>
    
  );
}

export default App;
