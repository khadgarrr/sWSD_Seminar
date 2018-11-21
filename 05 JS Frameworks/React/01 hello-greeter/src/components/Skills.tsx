import * as React from 'react';
import './Skills.css';

export interface Skill {
    id: number;
    name: string;
}

export default class Skills extends React.Component<any, any> {
  skills: Skill[] = [{id: 1, name: 'node.js'}, 
    {id: 1, name: 'type script'}, {id: 1, name: 'pnp core js'}];

  render() {
    return (
      <div className="container">
        <div>Your need the follwowing skills</div>
        <ul>
            {
                this.skills.map( (item) =>{                 
                 return <li key={item.id} onClick={()=>this.skillClicked(item) } className="li-skills" >{item.name}</li>
            })}            
        </ul>
      </div>
    );
  }

  skillClicked(skill: Skill){
    console.log(`You clicked skill ${skill.name}`)
  }
}
