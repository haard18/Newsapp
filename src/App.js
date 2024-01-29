import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
 
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        
        <Route path="/" key={"general"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress} pagesize={6} country="in" category="general"/>}/>
        <Route path="/business" key={"business"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="business"/>}/>
        <Route path="/entertainment" key={"entertainment"} element={<News  apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="entertainment"/>}/> 
        <Route path="/general" key={"general2"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="general"/>}/>
        <Route path="/health" key={"health"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="health"/>}/>
        <Route path="/science" key={"science"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="science"/>}/>      
        <Route path="/sports" key={"sports"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="sports"/>}/>
        <Route path="/technology" key={"technology"} element={<News apiKey = {this.apiKey} setProgress={this.setProgress}  pagesize={6} country="in" category="technology"/>}/>
         
       
        </Routes>
        </Router>
      </div>
      

    )
  }
}
