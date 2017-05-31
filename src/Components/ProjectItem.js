import React, {Component} from 'react';

export default class ProjectItem extends Component {
	deleteProject(id) {
		this.props.onDelete(id);
	}
	render() {
		return(
			<li className="projetsItem">
				<strong>{this.props.project.title}</strong> => {this.props.project.category} <a href="#" 
				onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
			</li>
			);
	}
}