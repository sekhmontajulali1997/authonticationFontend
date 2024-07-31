/* eslint-disable react/prop-types */
import { Modal,ModalHeader,ModalTitle,ModalBody } from "react-bootstrap";



const ModalPopap = ({ tittle, children,hide }) => {
  return (

   
    <Modal show={true} onHide={hide}>
    <ModalHeader className="d-flex">
      <ModalTitle>{tittle}</ModalTitle>

      <button
        type="button"
        className="btn-close"
        onClick={hide}
        aria-label="Close"
      />
    </ModalHeader>
    <ModalBody>
    {children}
    </ModalBody>
  </Modal>


  
  );
};

export default ModalPopap;
