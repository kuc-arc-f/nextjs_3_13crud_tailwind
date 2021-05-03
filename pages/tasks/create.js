import Link from 'next/link';
import Router from 'next/router'
import React, {Component} from 'react';
import Dexie from 'dexie';

import LibTask from '../../lib/LibTask';
import Layout from '../../components/layout'
//
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {title: '', content: ''}
    this.handleClick = this.handleClick.bind(this);
//console.log(props)
  }
  componentDidMount(){
    var config = LibTask.get_const()
    this.db = new Dexie( config.DB_NAME );
    this.db.version(config.DB_VERSION).stores( config.DB_STORE );                 
  }  
  handleChangeTitle(e){
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }   
  handleClick(){
    this.add_item()
  } 
  async add_item(){
    try {
      var item = {
        title: this.state.title,
        content: this.state.content,
        created_at: new Date(),
      }
// console.log(item)
      await this.db.tasks.add( item )
      Router.push('/tasks');
    } catch (error) {
      console.error(error);
    }    
  } 
  render() {
    return (
    <div className="bg-gray-100">
      <Layout>
        <div className="container mx-auto px-5 py-4 bg-white">
          <Link href="/tasks">
            <a className="btn-outline-blue my-2">Back</a>
          </Link>          
          <h1 className="text-5xl font-bold my-4">Tasks - Create
          </h1>
          <hr className="my-2" />    
          <div className="w-full max-w-md">
            <label>Title:</label>
            <input className="input_text_gray my-2" type="text" placeholder="Name123"
            onChange={this.handleChangeTitle.bind(this)} />  
            <hr className="my-2" />          
            <label>Content:</label>
            <textarea className="input_textarea_gray my-2"
            rows="8"
            onChange={this.handleChangeContent.bind(this)}></textarea>             
          </div>
          <div className="form-group">
            <button className="btn-blue" onClick={this.handleClick}>Create
            </button>
          </div>                
          <hr />
        </div>
      </Layout>      
    </div>
    )    
  } 
}

