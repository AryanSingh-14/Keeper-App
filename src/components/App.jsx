import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([])
  function addNote(note) {
    setNoteArray(prevValue => {
      return [...prevValue, note];
    })
  }

  function handleDelete(id){
    setNoteArray(prevValue=>{
      return prevValue.filter((value,index)=>{
        return index!==id;
      })
  })
  }
  return (
    <div>
      <Header />
      <CreateArea functionAddNote={addNote} />
      {noteArray.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content} 
            functionToDelete={handleDelete}/>);
      }
      )}
      <Footer />
    </div>
  );
}

export default App;
