import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//onClick={handleShow}
function DialogBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <i className="bi bi-x" style={{ fontSize: '3rem', marginLeft: 'auto' }} onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wait, don’t go! You’ll lose your progress if you quit now</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Keep Going
          </Button>
          <Button variant="danger" onClick={handleClose}>
            End Session
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogBox;