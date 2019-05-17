import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../Redux/Actions';

class Agenda extends React.Component{
    render(){
        return(
            <div className="Page my-5">
                <div className="container py-3">
                    <h1>Agenda</h1>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        this.props.setloc(this.props.location)
    }
}

const mapStateToProps = state =>{
    return{
        loc: state.Reducers.location
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setloc: (loc) => dispatch(setLocation(loc))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Agenda);