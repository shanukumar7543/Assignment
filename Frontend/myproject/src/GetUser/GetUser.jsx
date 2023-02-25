import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


function GetUser() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [user_id, setUser_id] = useState("");
  const [user_name, setUser_name] = useState("");
  const [address, setAddress] = useState("");
  const [mob_no, setMob_no] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayData = async () => {
    const apiData = await fetch("http://localhost:3308/user/view");
    const Userdata = await apiData.json();
    setData(Userdata.response);
  };

  useEffect(() => {
    displayData();
  }, [displayData]);

  function submitData(user_id, user_name, address, mob_no, email) {
    setUser_id(user_id);
    setUser_name(user_name);
    setAddress(address);
    setMob_no(mob_no);
    setEmail(email);

    handleShow();
  }

  async function patchData() {
    let userData = { user_id, user_name, address, mob_no, email };
    let reqData = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(
      `http://localhost:3308/user/update/${user_id}`,
      reqData
    );
    const data = await response.json();

    if (response.status == 200) {
      toast.success("User updated Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setUser_name("");
      setAddress("");
      setEmail("");
      setMob_no("");
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    handleClose();
    displayData();
  }

  return (
    <div className="container flex-wrap p-2" style={{ overflow: "auto" }}>
      <h3><u>All Users </u></h3>
      <hr />
      <Table striped bordered hover style={{ minWidth: "600px" }}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile No.</th>
            <th>Email Id</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody style={{boxShadow:"5px 5px 5px 5px" , }}>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td> {value.user_id}</td>
                <td> {value.user_name}</td>
                <td> {value.address}</td>
                <td> {value.mob_no}</td>
                <td> {value.email}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleShow();
                      submitData(
                        value.user_id,
                        value.user_name,
                        value.address,
                        value.mob_no,
                        value.email
                      );
                    }}
                    variant="primary"
                  >
                    <EditIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton> Update Details</Modal.Header>
          <Modal.Body>
            {/* <div><h1>Add_offer</h1></div> */}
            <Row>
              <Col>
                <label>User Id</label>
                <input
                  disabled
                  className="form-control"
                  placeholder=" "
                  type="text"
                  value={user_id}
                  onChange={(e) => setUser_id(e.target.value)}
                />

                <label>Name</label>
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  value={user_name}
                  onChange={(e) => setUser_name(e.target.value)}
                />

                <label>Address</label>
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <label>Mobile No.</label>
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  value={mob_no}
                  onChange={(e) => setMob_no(e.target.value)}
                />

                <label>Email Id</label>
                <input
                  className="form-control"
                  placeholder=" "
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <br />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              <CancelIcon/>
            </Button>
            <Button variant="primary" onClick={patchData}>
              <SaveIcon/>
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>
    </div>
  );
}

export default GetUser;
