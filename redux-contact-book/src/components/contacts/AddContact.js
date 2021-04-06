import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { addContact } from "../../actions/contactAction";
import shortid from 'shortid';
//this package "useHistory" is use to add new contact 
import {useHistory} from 'react-router-dom'; 


const AddContact = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createContact = e => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    history.push("/");    //push new contact

    //console.log(name , phone , email);
  };

  return (
    <div className="card border-0 shadow card-sm">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your phone number"
              class="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your Email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
