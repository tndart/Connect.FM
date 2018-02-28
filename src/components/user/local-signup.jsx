import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Chip, TextField, RaisedButton, DatePicker, SelectField, MenuItem } from 'material-ui'

import UserActions from '../../actions'
import { getHistory } from '../../util/helpers'

function isEmpty(value){
    if ( value === null || value === undefined || value === '' )
        return true
    return false
}

/* UI component only , used for style a basic container in app  */
class LocalSignup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            username : '',
            birthdate : '',
            gender : '',
            country : 'Israel',
            preferencesTiming : '',
            password : '',
            passwordagain: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    validation(user) {
        var flag = true;
    
        if (isEmpty(user.firstname)){
            this.setState({firstname: {errorText: "First Name is Required"}})
            flag = false
        }
        if (isEmpty(user.lastname)){
            this.setState({lastname: {errorText: "Last Name is Required"}})
            flag = false
        }
        if (isEmpty(user.username)){
            this.setState({username: {errorText: "User Name is Required"}})
            flag = false
        }
        if (isEmpty(user.password)){
            this.setState({password: {errorText: "Password is Required"}})
            flag = false
        }
        if (isEmpty(user.passwordagain)){
            this.setState({passwordagain: {errorText: "Password Again is Required"}})
            flag = false
        } else if (user.passwordagain !== user.password) {
            this.setState({passwordagain: {errorText: "Password Again field must be equals to Password field"}})
            flag = false
        }
        
    
        return flag
    }

    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        var user = {
            firstname : e.target.firstname.value,
            lastname : e.target.lastname.value,
            username : e.target.username.value,
            birthdate : e.target.birthdate.value,
            gender : this.state.gender,
            country : this.state.country,
            preferencesTiming : this.state.preferencesTiming,
            password : e.target.password.value,
            passwordagain: e.target.passwordagain.value
        }
        var flag = true;

       flag = this.validation(user)

        if (flag)
            dispatch(UserActions.signup(user))
    }

    render() {
        return (
            <div className={'' + this.props.className}>
                            
                <form className="custom-form" onSubmit={this.handleSubmit}> 
                    <TextField
                        hintText="Enter your first name"
                        floatingLabelText="* First Name"
                        errorText={ this.state.firstname.errorText }
                        id="firstname"/>
                    <TextField
                        hintText="Enter your last name"
                        floatingLabelText="* Last Name"
                        errorText={ this.state.lastname.errorText }
                        id="lastname"/>
                    <TextField
                        hintText="Enter your user name"
                        floatingLabelText="* User Name"
                        errorText={ this.state.username.errorText }
                        id="username"/>
                    <TextField
                        hintText="Enter your password"
                        floatingLabelText="* Password"
                        errorText={ this.state.password.errorText }
                        type="password"
                        id="password"/>
                    <TextField
                        hintText="Enter your password again"
                        floatingLabelText="* Password Again"
                        errorText={ this.state.passwordagain.errorText }
                        type="password"
                        id="passwordagain"/>
                    {/*<SelectField 
                        floatingLabelText="Gender"
                        value={this.state.gender}
                        onChange={ (e,i,val) => { this.setState({gender: val}) } }
                        errorText={ this.state.gender.errorText }
                        id="gender">
                        <MenuItem value={"Male"} primaryText="Male"/>
                        <MenuItem value={"Female"} primaryText="Female"/>
                        <MenuItem value={"Another"} primaryText="Another"/>
                    </SelectField>
                    <SelectField 
                        floatingLabelText="When do you like to listen music?"
                        value={ this.state.preferencesTiming }
                        onChange={ (e,i,val) => { this.setState( { preferencesTiming: val } ) } }
                        errorText={ this.state.preferencesTiming.errorText }
                        id='preferencesTiming'>
                        <MenuItem value={"Working"} primaryText="Working"/>
                        <MenuItem value={"Studying"} primaryText="Studying"/>
                        <MenuItem value={"Gaming"} primaryText="Gaming"/>
                        <MenuItem value={"Cooking"} primaryText="Cooking"/>
                        <MenuItem value={"At_Shower"} primaryText="At Shower"/>
                        <MenuItem value={"At_Party"} primaryText="At Party"/>
                    </SelectField>

                    <SelectField 
                        floatingLabelText="Country"
                        value={this.state.country}
                        onChange={ (e,i,val) => { this.setState({country: val}) } }
                        errorText={ this.state.country.errorText }
                        id='country'>
                        <MenuItem value={"Israel"} primaryText="Israel"/>
                    </SelectField>
                        
                    <DatePicker 
                        hintText="Birthdate"
                        id='birthdate'/>
                    <br/>

                    <div>
                        <RaisedButton className="float-left" label="Back" primary onClick={ getHistory().goBack }></RaisedButton>
                        <RaisedButton className="float-right" type="submit" label="Signup" primary/>
                    </div>*/}

                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.user
    
    return {
        user 
    }
}

export default connect(mapStateToProps)(LocalSignup);




