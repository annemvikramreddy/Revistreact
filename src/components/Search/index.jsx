import React,{ Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const userDetailsList = [
    {
      uniqueNo: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer',
    },
    {
      uniqueNo: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer',
    },
    {
      uniqueNo: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer',
    }
  ];
  
  
  class Search extends React.Component {
    state = {
      count1: 0,
      count2:0,
      count3:0,
      user:userDetailsList,
      searchValue:''
    };
  
    handleMinusClick = (id)=>{
      this.setState(prevState=>({
        [`count${id}`]:prevState[`count${id}`]-1
      }))
    }
  
    handlePlusClick = (id) => {
      this.setState(prevState => ({
        [`count${id}`]: prevState[`count${id}`] + 1
      }));
    }
  
    removeList =(id)=>{
      const {user}=this.state
      let updatedUserDetails = user.filter((engineer)=>{
        if(engineer.uniqueNo===id){
          return false
        }
        return true
      })
      this.setState({user:updatedUserDetails})
    }
  
    handleSearch=(event)=>{
      
      this.setState({searchValue:event.target.value})
  
  
  
    }
    // Returning the JSX elements from the component
    render() {
      const {user,searchValue} = this.state
  
      const searchList = user.filter((each)=>each.name.toLowerCase().includes(searchValue.toLowerCase()))
      
      const engineers = searchList.map((engineer) => {
      
        return(<div key={engineer.uniqueNo} className='flex bg-gray-100 p-4 justify-center'>
          <img src={engineer.imageUrl} alt={engineer.name} className="w-12 h-12 rounded-xl bg-gray-200 p-1 mr-3 " />
          <div> 
            <h1 className="font-bold text-sm">{engineer.name}</h1>
            <p className="font-thin text-sm">{engineer.role}</p>
            
          </div>
          <button  onClick={() => this.handleMinusClick(engineer.uniqueNo)} className="ml-2 mr-2 font-bold bg-gray-200 px-2 py-1 rounded">-</button>
          <p className='m-3 text-center'>{this.state[`count${engineer.uniqueNo}`]}</p>
          <button  onClick={() => this.handlePlusClick(engineer.uniqueNo)} className="ml-2 mr-2 font-bold bg-gray-200 px-2 py-1 rounded">+</button>
          <button onClick = {()=>this.removeList(engineer.uniqueNo)} className="text-center p-2 ml-2 bg-green-500 border-2">delete</button>
          </div>)
          });
    
      return(<div className='absolute top-10 left-10 flex flex-col'>
        <div>
        <h1 className="font-bold mb-3">Revisting features like search, delete and states in Class Components</h1>
        <div className="flex items-center">
  <input
              type="text"
              id="inputField"
              onChange={this.handleSearch}
              className="shadow appearance-none border rounded w-[95%] py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
             <FontAwesomeIcon icon={faSearch} className="text-gray-600 pl-2" />
             </div>
        {engineers}
      </div>
      
      </div>);
  }
  }
  
  export default Search;
  