import React, { Component } from 'react';
import './projects.css';

import { Table } from 'react-bootstrap';

import PostData from '../../assets/projectData/projects.json';
import JsonData from '../../assets/projectData/repos.json';

class Projects extends Component {

    constructor(props) {
        super(props);
        const projects = {};
    }
    state = {
        json: [],
        size: 0,
        name: [],
        htmlUrl: [],
        description: [],
        dateCreated: [],
        dateUpdated: [],
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
                size: data.length
            })
            for (let i = 0; i < data.length; i++){
                this.setState({
                    json: data,
                    name: data[i].name,
                    htmlUrl: data[i].html_url,
                    description: data[i].description,
                    dateCreated: data[i].created_at,
                    dateUpdated: data[i].updated_at
                })
                //fetch(data[i].languages_url)
                //.then(response => response.json())
                //.then(data => {
                //    console.log(data);
                //    this.setState({
                //        languages: data
                //    })
                //})
            }
         });
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
                    this.state.json.map((data, index)=>{
                        return (
                            <tr class="table-background">
                                <td class="project-text"><a href={data.html_url}>{data.name}</a></td>
                                <td class="project-text">{data.description ? data.description : "No information provided"}</td>
                                <td class="project-text">{data.created_at}</td>
                                <td class="project-text">{data.updated_at}</td>
                                <td class="project-text">{data.languages_url}</td>
                            </tr>)
                    })
                    /* JsonData.map((data, index)=>{
                        return (
                            <tr class="table-background">
                                <td class="project-text"><a href={data.html_url}>{data.name}</a></td>
                                <td class="project-text">{data.description ? data.description : "No information provided"}</td>
                                <td class="project-text">{data.created_at}</td>
                                <td class="project-text">{data.updated_at}</td>
                                <td class="project-text">{data.languages_url}</td>
                            </tr>
                            )
                        }
                    ) */}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Projects;