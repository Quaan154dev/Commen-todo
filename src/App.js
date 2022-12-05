import { useState } from "react";
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState({name:"",nd:""});
  const [cmtList,setCmtList] = useState([]);
 
  const handleChange = (e) => {
    setInputValue({...inputValue,[e.target.name]:e.target.value});
  }
  let {name,nd} = inputValue;
  const handleAdd = () => {
    setCmtList([...cmtList,{name,nd}]);  
    // console.log(cmtList)
    // console.log(inputValue)
    setInputValue({name:"",nd:""})
  }
  const handleDelete = (index) => {
    const newCmtLish = cmtList.filter((task, newTask) => newTask !== index);
    setCmtList(newCmtLish)
  }
  console.log(cmtList);

   return (
    <div className="App">
      <header className="App-header ">
           <div className="flex flex-col mb-96 justify-center items-center w-2/4 h-64 rounded-xl bg-white " >
                <h2  className ="text-pink-500 rounded-xl text-xl talic">THÔNG BÁO </h2>
                
                  <input 
                  type="text"
                  autoComplete = 'off'
                  name="name"
                  value={inputValue.name}
                  onChange={(e) => handleChange(e)}
                  className="size_input_1"
                  placeholder="Title..."
                   />
                  <input 
                  type="text"
                  autoComplete = 'off'
                  name="nd"
                  value={inputValue.nd}
                  onChange={(e) => handleChange(e)}
                  className="size_input_2"
                  placeholder="Content...."
                  />
              
               <button
               className="bg-amber-700 rounded-xl w-1/6 mt-2 "
               onClick={handleAdd}
               >Add
               </button>
        </div>
         
              <div className="flex flex-row items-center gap-4 " >
                  {
                    cmtList.map((cmt,index) => {
                       return(
                       <div className="flex flex-col break-words rounded-xl bg-slate-200 w-52 h-44 flex-1 justify-start mt-4 gap-4  ">
                            <div 
                           className="text-lg flex-1 rounded-xl"
                           key={index}
                           >
                               <h2 className="rounded-xl font-medium mb-1.5 text-3xl text-black-500 flex-1">{cmt.name}</h2>
                               <p className="text-lg rounded-xl text-xl text-teal-400 flex-1">{cmt.nd}</p>
                            </div>
                             <div className="text-lg "
                              >
                                 <i 
                                 onClick={() => handleDelete(index)}
                                 class="w-1/2 h-4/5 rounded-bl-xl bg-amber-300 fa-sharp fa-solid fa-trash"></i>
                                 <i class="w-1/2 h-4/5 rounded-br-xl bg-red-600 fa-solid fa-heart"></i>
                              </div>
                        </div>
                       )
                      }
                    )                
                 }         
             </div>
            
              
      </header>
    </div>
  );
}

export default App;
