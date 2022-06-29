import * as React from 'react';
export class AddCustomer extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            inputID : "",
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
                <input  value = {this.state.inputID} onInput = {event => this.updateInputID(event)}></input>
                <h3>Add Customer Name:</h3>
                <input value = {this.state.inputName} onInput = {event => this.updateInputName(event)}></input>
                <h3>Add Customer Password:</h3>
                <input  value = {this.state.inputPassword} onInput = {event => this.updateInputPassword(event)}></input>
                <h3>Add Customer Address</h3>
                <input value = {this.state.inputAddress} onInput = {event => this.updateInputAddress(event)}></input>
                <h3>Add Customer City:</h3>
                <input value = {this.state.inputCity} onInput = {event => this.updateInputCity(event)}></input>
                <h3>Add Customer State:</h3>
                <input value = {this.state.inputState} onInput = {event => this.updateInputState(event)}></input>
                <h3>Add Customer ZipCode:</h3>
                <input value = {this.state.inputZipCode} onInput = {event => this.updateInputZipCode(event)}></input>
                <h3>Add Customer Telephone:</h3>
                <input value = {this.state.inputTelephone} onInput = {event => this.updateInputTelephone(event)}></input>

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
        console.log("You have successfully registered as a new customer!")

        fetch("https://isagames.azurewebsites.net/customer", {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain, */*',
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
