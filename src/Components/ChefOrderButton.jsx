import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ChefOrderButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Pending'); // Default status

  const handleAccept = () => {
    setOrderStatus('Accepted');
    setShowModal(false);
  };

  const handleDecline = () => {
    setOrderStatus('Declined');
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={openModal}>View</Button>
      <p>Status: {orderStatus}</p>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to accept or decline this order?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="primary" onClick={handleAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChefOrderButton;
