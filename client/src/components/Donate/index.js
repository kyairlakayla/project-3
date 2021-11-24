import React from "react";
import { Button, Modal } from "semantic-ui-react";

function DonateModal () {
  return (
    <>
    <Modal
      trigger={<Button>Donate</Button>}
      header='Donate'
      content='Would you like to contribute?'
      actions={['Close', { key: 'done', content: 'Done', positive: true }]}
    />
    </>
  );
}


export default DonateModal;