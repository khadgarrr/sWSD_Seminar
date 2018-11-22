import * as React from "react";
import "./Skills.css";
import { Skill } from "../model";

export interface SkillProps {
  removeMsg: string;
  skills: Skill[];
}

export interface SkillState {
  skills: Skill[];
  skillToAdd: string;
}

export default class Skills extends React.Component<SkillProps, SkillState> {
  constructor(props: SkillProps) {
    super(props);
    this.state = {
      skills: this.props.skills,
      skillToAdd: ""
    };

    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div>
          Your need the follwowing skills:
          <div>
            <label className="lblNewSkill">Enter a new skill:</label>
            <input
              type="text"
              value={this.state.skillToAdd}
              onChange={this.handleSkillChange}
            />
            <button onClick={() => this.addSkill()}>Add</button>
          </div>
          <div className="divResponse">You typed: {this.state.skillToAdd}</div>
        </div>
        <ul>
          {this.state.skills.map((item: Skill) => {
            return (
              <li
                key={item.id}
                onClick={() => this.removeSkill(item)}
                className="li-skills"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <br />
        <h5>{this.props.removeMsg}</h5>
      </div>
    );
  }

  handleSkillChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ skillToAdd: e.currentTarget.value });
  }

  addSkill(): void {
    let newid = Math.max.apply(
      Math,
      this.state.skills.map(item => item.id + 1)
    );
    this.setState({
      skills: this.state.skills.concat([
        { id: newid, name: this.state.skillToAdd }
      ])
    });
    console.log(`Adding skill: ${this.state.skillToAdd} with ${newid}`);
  }

  removeSkill(skill: Skill): void {
    console.log(`Removing skill: ${skill.name}`);
    this.setState({
      skills: this.state.skills.filter((i: Skill) => i !== skill)
    });
  }
}
