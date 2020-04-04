import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() { 
        const { name } = this.props;
        return ( 
               <h1>{name}</h1>
         );
    }
}
 
export default Header;