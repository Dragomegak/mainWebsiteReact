import React, { Component } from 'react';
import './projects.css';

import { Table } from 'react-bootstrap';

import PostData from '../../assets/projectData/projects.json';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            jsonData: {}
        };
    }
    
    componentDidMount(){
        document.title = "MainWebsite - Projects"

        fetch(`https://api.github.com/users/Dragomegak/repos`)
        .then(response => response.json())
        .then(result => {this.setState({
            jsonData: result
            });
        })
    };  
    
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
                        <th class="project-text">Work Done</th>
                        <th class="project-text">Tech Used</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {PostData.map((postDetail, index)=>{
                        return (
                            <tr class="table-background">
                                <td class="project-text"><a href={postDetail.link}>{postDetail.name}</a></td>
                                <td class="project-text">{postDetail.description}</td>
                                <td class="project-text">{postDetail.workDescription}</td>
                                <td class="project-text">{postDetail.technologiesUsed}</td>
                            </tr>
                            )
                        }
                    )} */}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Projects;