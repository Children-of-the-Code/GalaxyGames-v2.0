import * as React from "react";
export class AddCustomer extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            inputID : "number",
            inputName : "",
            inputPassword : "",
            inputAddress : "",
            inputCity : "",
            inputState : "",
            inputZipCode : "",
            inputTelephone : "",


        }
    }
    render(){
        return(
            <div>
                <h3>Add Customer ID:</h3>
                <input type= "number" value = {this.state.inputID} onSubmit = {event => this.updateInputID(event)}></input>
                <h3>Add Customer Name:</h3>
                <input type="text" value = {this.state.inputName} onSubmit = {event => this.updateInputName(event)}></input>
                <h3>Add Customer Password:</h3>
                <input type="password" value = {this.state.inputPassword} onSubmit = {event => this.updateInputPassword(event)}></input>
                <h3>Add Customer Address</h3>
                <input type="text" value = {this.state.inputAddress} onSubmit = {event => this.updateInputAddress(event)}></input>
                <h3>Add Customer City:</h3>
                <input type="text" value = {this.state.inputCity} onSubmit = {event => this.updateInputCity(event)}></input>
                <h3>Add Customer State:</h3>
                <input type="text" value = {this.state.inputState} onSubmit = {event => this.updateInputState(event)}></input>
                <h3>Add Customer ZipCode:</h3>
                <input type="text" value = {this.state.inputZipCode} onSubmit = {event => this.updateInputZipCode(event)}></input>
                <h3>Add Customer Telephone:</h3>
                <input type="text" value = {this.state.inputTelephone} onSubmit = {event => this.updateInputTelephone(event)}></input>

                <button onClick = {event=>this.submit(event)}>submit</button>
            </div>
        )
    }
    updateInputID(event:any){
        let ID = event.target.ID;
        this.setState({
            inputID : ID
        })
    }
    updateInputName(event:any){
        let Name = event.target.Name;
        this.setState({
            inputName : Name
        })
    }
    updateInputPassword(event:any){
        let Password = event.target.Password;
        this.setState({
            inputPassword : Password
        })
    }
    updateInputAddress(event:any){
        let Address = event.target.Address;
        this.setState({
            inputAddress : Address
        })
    }
    updateInputCity(event:any){
        let City = event.target.City;
        this.setState({
            inputCity : City
        })
    }
    updateInputState(event:any){
        let State = event.target.State;
        this.setState({
            inputState : State
        })
    }
    updateInputZipCode(event:any){
        let ZipCode = event.target.ZipCode;
        this.setState({
            inputZipCode : ZipCode
        })
    }
    updateInputTelephone(event:any){
        let Telephone = event.target.Telephone;
        this.setState({
            inputTelephone : Telephone
        })
    }
    
    submit(event:any){
        let ID = this.state.inputID;
        let Name = this.state.inputName;
        let Password = this.state.inputPassword;
        let Address = this.state.inputAddress;
        let City = this.state.inputCity;
        let State = this.state.inputState;
        let ZipCode = this.state.inputZipCode;
        let Telephone = this.state.inputTelephone;

        fetch("https://isagames.azurewebsites.net/", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                "customer_ID" : ID,
                "username":Name,
                "password" : Password,
                "address": Address,
                "city": City,
                "state": State,
                "zipcode": ZipCode,
                "telephone": Telephone
            })
        });
    }
}
