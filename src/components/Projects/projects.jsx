import React, { Component } from 'react';
import './projects.css';

import { Table } from 'react-bootstrap';

import PostData from '../../assets/projectData/projects.json';
import JsonData from '../../assets/projectData/repos.json';
const {AUTHTOKEN} = process.env;

class Projects extends Component {

    /* To Do:
    Languages_url from data[i].languages_url, get object and foreach loop onto appropriate column */
    state = {
        json: [],
        size: 0,
        languages: []
    };
    
    componentDidMount(){
        document.title = "MainWebsite - Projects"

        fetch(`https://api.github.com/users/Dragomegak/repos`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            //console.log(json[0].id);
            //console.log(data.length);
            this.setState({
                size: data.length,
                json: data,
            })
            for (let i = 0; i < data.length; i++){
                fetch(data[i].languages_url)
                .then(response => response.json())
                .then(languagedata => {
                    //console.log(languagedata);
                    //this.languagesToString(languagedata);
                    this.setState({
                        languages: this.languagesToString(languagedata)
                    })
                })
            } 
         });
        
    } 
    languagesToString(object){
        let result = [];
        let finalstring = "";
        for (const property in object){
            result.push(property.toString());
        }
        finalstring = result.join(",");
        return finalstring;
        //console.log(finalstring);
    }
    render () {
    return (
        <div class="website-background">
            <h2 class="project-title">Highlighted Projects List</h2>
            <p class="github-link"><a href="https://github.com/Dragomegak">Learn more by exploring my GitHub Page!</a></p>
            <Table responsive>
                <thead>
                    <tr class="table-background">
                        <th class="project-text">Project Name</th>
                        <th class="project-text">Project Description</th>
                        <th class="project-text">Date Created</th>
                        <th class="project-text">Last Updated</th>
                        <th class="project-text">Languages/Frameworks Used</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.json.map((data, index)=>{ //works
                            return (
                                <tr class="table-background">
                                    <td class="project-text"><a href={data.html_url}>{data.name}</a></td>
                                    <td class="project-text">{data.description ? data.description : "No information provided"}</td>
                                    <td class="project-text">{data.created_at.substring(0,10)}</td>
                                    <td class="project-text">{data.updated_at.substring(0,10)}</td>
                                    <td class="project-text">{data.language}</td>
                                </tr>)
                        })
                   }
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Projects;
 /* JsonData.map((data, index)=>{ //works
                        return (
                            <tr class="table-background">
                                <td class="project-text"><a href={data.html_url}>{data.name}</a></td>
                                <td class="project-text">{data.description ? data.description : "No information provided"}</td>
                                <td class="project-text">{data.created_at}</td>
                                <td class="project-text">{data.updated_at}</td>
                                <td class="project-text">{data.languages_url}</td>
                            </tr>
                            )
                        } //<td class="project-text">{data.language ? data.language: "Data not provided"}</td>
                    ) */