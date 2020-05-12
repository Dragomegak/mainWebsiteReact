import React, { Component } from 'react';
import './projects.css';

import { Table } from 'react-bootstrap';

import PostData from '../assets/projectData/projects.json';

class Projects extends Component { 
    render () {
    return (
        <div class="website-background">
            <h2 class="project-title">Highlighted Projects List</h2>
            <p class="github-link"><a href="https://github.com/Dragomegak">Learn more by exploring my GitHub Page!</a></p>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Project Description</th>
                        <th>Work Done</th>
                        <th>Tech Used</th>
                    </tr>
                </thead>
                <tbody>
                    {PostData.map((postDetail, index)=>{
                        return (
                            <tr>
                                <td>{postDetail.name}</td>
                                <td>{postDetail.description}</td>
                                <td>{postDetail.workDescription}</td>
                                <td>{postDetail.technologiesUsed}</td>
                            </tr>
                            )
                        }
                    )}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Projects;