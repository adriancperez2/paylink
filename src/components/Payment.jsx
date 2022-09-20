import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ToastContainer from "react-bootstrap/ToastContainer";

const Payment = (props) => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => setShow(!show);

  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (evt) => {
    evt.stopPropagation();
    setShowModal(true);
  };

  const copy = (evt) => {
    let value = props.value;
    navigator.clipboard.writeText(value);
    toggleShow(); /* once the text is copied to the clipboard the toast is shown */
    handleCloseModal();
  };

  return (
    <div className="d-grid gap-2 w-100">
      {/* The toast element requires a container for certain properties to be applied */}
      <ToastContainer position="bottom-end" className="success-toast mb-3">
        <Toast
          animation={true}
          autohide={true}
          delay={3000}
          bg="dark"
          onClose={toggleShow}
          show={show}
          className="toast"
        >
          <Toast.Header closeButton>
            <b className="me-auto">Text copied to clipboard</b>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <Button
        className="payment-btn d-flex justify-content-between align-items-center"
        onClick={copy}
      >
        <img
          src={props.img}
          alt={props.label + " logo"}
          className="payment-img"
        />
        <div className="mx-2 flex-grow-1 payment-label">{props.label}</div>
        <div>
          <button className="btn payment-action-btn btn-sm mx-0" onClick={copy}>
            <i className="bx bx-copy copy-icon payment-action-icon"></i>
          </button>
          <button
            className="btn payment-action-btn btn-sm mx-0"
            onClick={handleShowModal}
          >
            <i className="bx bx-qr copy-icon payment-action-icon"></i>
          </button>
        </div>
      </Button>
      {/* TODO: Fix modal theme */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src={props.img}
              width="40"
              height="40"
              className="mx-2"
              alt={props.label + " logo"}
            />
            {props.label}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center py-4 pb-0">
          <div className="qr-container p-2">
            <QRCodeSVG value={props.value} size={200} />
          </div>
        </Modal.Body>
        <Button className="btn btn-primary mx-5 my-5 mt-5" onClick={copy}>
          <i className="bx bx-copy mx-2"></i>
          Copy
        </Button>
      </Modal>
    </div>
  );
};

export default Payment;
