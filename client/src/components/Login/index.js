import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";

function LoginModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div>Login</div>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454"
          wrapped
        />
        <Modal.Description>
          <p>Would you like to upload this image?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default LoginModal;
