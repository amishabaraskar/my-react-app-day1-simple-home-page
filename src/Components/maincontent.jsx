import './maincontent.css';
import todologo from '../assets/todo.png'


function MainContent(){
    return(
        <div style={{width:'100%', display:'block'}}>
              {/* <div className='mainContent'> */}
      <h1>Welcome to the homepage of To-Do App</h1>
      {/* </div> */}
      <img src={todologo}/>

        </div>
    )
}

export default MainContent;