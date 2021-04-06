import React, {useState , useEffect} from "react";
import {useDispatch , useSelector} from 'react-redux';
import { getContact , updateContact} from "../../actions/contactAction";
import shortid from 'shortid';
//this package "useHistory" is use to add new contact 
import {useHistory} from 'react-router-dom'; 
import {useParams} from 'react-router-dom'; 


const EditContact = () => {
    let {id} = useParams();
    //alert(id)

  let history = useHistory();

  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact.contact);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
      if(contact != null){
          setName(contact.name);
          setPhone(contact.phone);
          setEmail(contact.email);
      }
    dispatch(getContact(id))
  }, [contact]);




  const onUpdateContact = (e) =>{
      e.preventDefault();
      

      const update_contact = Object.assign({name: name, phone:phone, email});
      
      dispatch(updateContact(update_contact));
      //console.log(update_contact);
  };

  return (
    <div className="card border-0 shadow card-sm">
      <div className="card-header">Edit a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
