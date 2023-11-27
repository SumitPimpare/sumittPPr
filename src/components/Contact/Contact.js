import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("sumitpimpare105@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container contain">
        <div className="SectionTitle">Get In Touch</div>
          <div className="emailBigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>sumitpimpare105@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn emailBtn btn-shadow"
                href="mailto:sumitpimpare105@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>

          <div className="mobileBigCard">
           <div className="contactNumber">
            <div><strong>Mobile:</strong></div>
            <div>+91 777941264 / 9145218348</div>
           </div>
          </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
