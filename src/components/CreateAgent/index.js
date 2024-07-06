import NewAgentForm from "../newAgent-from";
import SidebarCreateAgent from "../sidebar-createAgent";
import './index.css'

const CreateAgent=()=>{
    return(
        <div className="main-create-agent"> 
        <div className="create-agent-container"><h1 className="new-agent-heading">New Agent</h1>
        <button className="main-create-agent-btn">Create Agent</button></div>
        
        <div  className='create-agent-container'>
        <SidebarCreateAgent/>
        <NewAgentForm/>
    </div></div>
   
  )
}

export default CreateAgent;