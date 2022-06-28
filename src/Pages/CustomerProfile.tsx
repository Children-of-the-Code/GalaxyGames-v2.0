import * as React from 'react';
export class CustomerProfile extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            inputID : ""
        }
    }

    render(){
        return(
            <div>
                <h3>Please enter your ID Number</h3>
                <input value= {this.state.inputID} onInput= {event => this.updateInputID(event)}></input> 
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
    submit(event:any){
        let ID = this.state.inputID;
        fetch("https://isagames.azurewebsites.net/id/"+ ID, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(
                {
                "customer_ID" : ID// || "",
                // "username":name || "",
                // "password" : Password || "",
                // "address": Address || "",
                // "city": City || "",
                // "state": State || "",
                // "zipcode": ,
                // "telephone": Telephone || ""
            })
        });
    }
}   
