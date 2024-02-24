import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [isExpanded,setExpanded]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name] : value
      };
    })
  }
  function onClickAdd(event) {
    event.preventDefault();
    props.functionAddNote(note)
    setNote({
      title: "",
      content: ""
    });
   
  }
  function expand(){
    setExpanded(true)
  }
  return (
    <div>
      <form className="create-note">
       {isExpanded? <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />:null}
        <textarea  onClick={expand}onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={note.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={onClickAdd}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
