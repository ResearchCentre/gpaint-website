import Modal from "react-bootstrap/Modal";
import UIButton from "../UIButton/index";
import OutlineBtn from "../UIButton/outlineBtn";
import ClearIcon from '@mui/icons-material/Clear';
import { AppPrimaryColor, DarkModeBodyColor, DarkModePrimaryColor, DarkModeText } from "../../../MasterData";
import { IconButton } from "@mui/material";

const UIModal = ({ body, onClickSubmit, btnClass, btnlabel, show, setShow, saveBtnLoader, title, isDarkTheme, outlineBtnLabel }) => {
  return (
    <>
      <Modal className='common_ui_modal' style={{ zIndex: 1100, borderRadius: '14px' }} size="md" show={show} onHide={() => setShow(false)} centered>
        <span style={{ backgroundColor: isDarkTheme ? DarkModeBodyColor : DarkModeText, borderRadius: '14px' }}>

          <Modal.Header className="d-block border-0 pb-0" closeButton={false}>
            <Modal.Title>
              <span className='profile_modal_header' style={{ color: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor }}>{title}</span>
              <IconButton className="float-end" onClick={() => setShow(false)}>
                <ClearIcon style={{ color: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor }} />
              </IconButton>
            </Modal.Title>

          </Modal.Header>
          <Modal.Body className="pt-0">{body}</Modal.Body>
          <Modal.Footer className='border-0 pt-0'>
            <span className={btnClass}>
              <OutlineBtn isDarkTheme={isDarkTheme} label={outlineBtnLabel} onClick={() => setShow(false)} />
            </span>
            <UIButton isDarkTheme={isDarkTheme} btnlabel={btnlabel} btnLoader={saveBtnLoader} handleBtnClick={onClickSubmit} btnDisable={saveBtnLoader} />
          </Modal.Footer>
        </span>
      </Modal>
    </>
  );
};

export default UIModal;
