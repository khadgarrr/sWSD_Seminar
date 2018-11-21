import * as React from 'react'
import './Hello.css'

export class Hello extends React.Component<any, any> {
    
    user = {
        firstName: 'SPFx',
        lastName: 'Developer'
    };

    render() {
      return (
        <div>
            <h2>
                Hello, {this.formatName(this.user)}
            </h2>
        </div>
      );
    }
  
    formatName(user:any) {
        return user.firstName + ' ' + user.lastName;
    }            
  }
  
  export default Hello;