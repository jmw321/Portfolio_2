import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import Task from "./Taskboard.jpg";
import Uv from "./uvtracknew.jpg";
import Hoa from "./hoa.jpg";


    var projects = [
      {id: 0, name: "Task Board", show:false, image:Task, description: "Built using React, this is a task board based on a Kanban board. Create a new card, add or remove a task item."},
      {id: 1, name: "HOA", image:Hoa,show:false, description: "Built using React, this is a sample site for a community homeowner association. Uses routing to navigate to additional site pages."},
      {id: 2, name: "UV Index App", image:Uv, show:false, description: "Built using React, a single page app that uses API from OpenUV to fetch realtime UV index. Also, as a fun feature, user is able to choose from different backgrounds."},
    //  {id: 3, name: "Arcade Game"},
    //  {id: 4, name: "Neighborhood App"},
    //  {id: 5, name: "Memory Game"}
    ];

var navShow = false;

class App extends Component {

  constructor(props) {
      super(props);
      this.scrollDiv = React.createRef();
      this.scrollDivProj = React.createRef();
      this.scrollDivContact = React.createRef();
      this.state = {projects, navShow}
  }


  render() {

    var toggleProject = (event) => {
       var newProjects = [...this.state.projects];

       newProjects.map(item => Number(item.id) === Number(event.target.id) &&  item.show === false? item.show = true : item.show = false)

       this.setState({projects:newProjects})



   }

   var showNav = event => {
     this.state.navShow === true
       ? this.setState({navShow: false})
       : this.setState({navShow: true});
   };


    return (
      <div className="App">
        <header className="App-header">
          <div className="headerTitle" onClick={showNav}> Jenna Michele <i class="fas fa-bars" id="menuIcon"></i> </div>

        {this.state.navShow === true &&
          <nav className="fullNav">
            <ul className="navList">
              <li className="navListItem" onClick={() => {
              this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
            }}> About Me </li>
              <li className="navListItem" onClick={() => {
              this.scrollDivProj.current.scrollIntoView({ behavior: 'smooth' });
            }}> Projects </li>
              <li className="navListItem" onClick={() => {
              this.scrollDivContact.current.scrollIntoView({ behavior: 'smooth' });
            }}> Contact Me </li>
            </ul>
          </nav>
        }
        </header>
        <main className="mainContent">
          <div className="projectContainerOuter" ref={this.scrollDivProj}>
            <div className="projectContainer" >
              <h1 className="projectHeader"> Projects </h1>
                {this.state.projects.map(item => <Project image={item.image} id={item.id} show={item.show} summary={item.description} toggleProject={toggleProject} />)}
            </div>
          </div>
          <div className="aboutOuterSection" ref={this.scrollDiv}>
            <div className="aboutSection"  >
              <h1 className="aboutHeader"> About Me </h1>
              <div> Welcome! As you probably guessed, my name is Jenna. I am passionate about
                web development and design. I began my coding journey with Udacity
                and have been hooked since. I enjoy bringing design to life with
                javascript and continually learning from others. My other passion
                is health and creating apps that can improve my family's health,
                which inspired my project to track UV exposure! I hope to work
                with you soon! </div>
            </div>
        </div>
         <div className="contactSection" ref={this.scrollDivContact} >
            <div className="innerSection">
              <h1 className="contactHeader"> Contact Me </h1>
                  <div> <i class="far fa-envelope fa-2x"></i> <p> Email Me @ jenna.wills321@gmail.com</p> </div>
                  <div> <i class="fab fa-linkedin fa-2x"></i> <p> Connect with me on <a href="https://www.linkedin.com/in/jenna-p-785034104"> LinkedIn! </a> </p> </div>
            </div>
         </div>
        </main>
      </div>
    );
  }
}

export default App;
