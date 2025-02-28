import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import React, { useState } from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { Col, Row } from "react-bootstrap";
import axiosinstance from "../../../Axios/service/baseApi";
import UIModal from "../../../Components/Reusable/UIConfirmationModal/index";
import ReusableSnackBar from '../../Reusable/UISnackBar/index';
import '../../../App.css';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


const UIcardDisplay = ({
  value,
  handleShowRegModal,
  changetoEditModal,
  changeToViewMode,
  getUserDetails,
  editUserID,
  changeUserDetailsArray,
  fullUserDate
}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [modalDeleteBtn, setModalDeleteBtn] = useState(false);


  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
    setAnchorEl(null);
  };


  const getFirstChar = (str) => {
    return str?.charAt(0)?.toUpperCase();

  };

  const handleEdit = (value) => {
    handleShowRegModal();
    changetoEditModal(true);
    changeToViewMode(false);
    handleCloseMenu();
    getUserDetails(value?.value_4);
    editUserID(value.value_2);
  };

  const handleDeleteUser = async (value) => {
    setModalDeleteBtn(true)
    try {
      const config = {
        headers: {
          environment: "development",
        },
        data: {
          userid: value.value_2,
          role: value?.value_4,
          sk: value.value_7,
        },
      };
      const response = await axiosinstance.delete(`/3_userauth/`, config);
      if (response?.data?.status === true) {
        setShowDeleteModal(false);

        const removeDeletedUser = fullUserDate?.filter(
          (e) => e.sk !== value?.value_7
        );

        console.log("delete a reg user", removeDeletedUser)
        setModalDeleteBtn(false);
        changeUserDetailsArray(removeDeletedUser);
        setShowSuccessAlert(true);
      }
    } catch (error) {
      if (error.response.status === 401) {
        // dispatch(sessionExpiredLogin(false));
      }
      console.error("[handleDeleteUser] Error -->", error);
    }
  };

  return (
    <>

      <ReusableSnackBar
        openSnackBar={showSuccessAlert}
        handleCloseSnackBar={() => setShowSuccessAlert(false)}
        alertMsg={`Deleted Successfully`}
        autoCloseTime={5000}
        snackBarType="success"
        snackBarWidth={"100%"}
      />

      <div className="user_card">
        <div className="user_header">
          <Row>
            <Col lg={10} md={10}>
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div className="user_profileCircle">
                    <div className="user_name_Firstletter">
                      {getFirstChar(value?.value_1)}
                    </div>

                  </div>
                </div>
                <div class="flex-grow-1 ms-3 remove_btnfocus">
                  <button
                    onClick={() => {
                      editUserID(value.value_2);
                      handleShowRegModal();
                      changeToViewMode(true);
                      changetoEditModal(false);
                      getUserDetails(value.value_4);
                    }}
                    className="btn btn-link p-0 text-decoration-none text-start  hovered_text">
                    <h5 className="text_overflow">{value?.value_1}</h5>
                  </button>
                  <div className="lightblue_txt ">
                    {value?.value_5}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={2} md={2}>
              <IconButton
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableelevation="true"
                onClick={handleMenuClick}
                endicon={<KeyboardArrowDownIcon />}
                className="float-end"
              >
                <MoreVertIcon />
              </IconButton>
            </Col>

          </Row>


        </div>
        <div className="usercard_body">
          <Row>
            <Col md={6} lg={6} sm={12}>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <AccountCircleTwoToneIcon />
                </div>
                <div class="flex-grow-1 ms-3">
                  {value?.value_4 === "1" ? "Student" : "Employer"}

                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div class="d-flex align-items-center mt-2">
                <div class="flex-shrink-0">
                  <LocalPhoneTwoToneIcon />
                </div>
                <div class="flex-grow-1 ms-3">
                  {value?.value_3 !== (null || undefined || "") ? (
                    value?.value_3
                  ) : (
                    <span>No contact number</span>
                  )}
                </div>
              </div>
            </Col>

            <Col md={6} lg={6} sm={12}>
              <div class="d-flex align-items-center mt-2">
                <div class="flex-shrink-0">
                  <FlagTwoToneIcon />
                </div>
                <div class="flex-grow-1 ms-3">
                  {value?.value_4 === "1" ? value?.value_8 : value?.value_6}
                </div>
              </div>
            </Col>

          </Row>
          <div className="mt-3" ></div>

          <Row >

            <Col md={12}
            >
              <IconButton
                onClick={() => {
                  editUserID(value.value_2);
                  handleShowRegModal();
                  changeToViewMode(true);
                  changetoEditModal(false);
                  getUserDetails(value?.value_4);
                }}
                className="float-end">
                <VisibilityTwoToneIcon />
              </IconButton>
            </Col>
          </Row>


        </div>
      </div >
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >

        <MenuItem onClick={() => {
          console.log("value edit user", value)
          handleEdit(value)
        }} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>

        <MenuItem onClick={() => handleDelete()} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>


      <UIModal
        isModalOpen={showDeleteModal}
        handleOk={() => handleDeleteUser(value)}
        handleCancel={() => setShowDeleteModal(false)}
        modalTitle={`Are you sure you want to delete?`}
        modalContent={``}
        confirmTxt="Yes"
        submitBtnLoader={modalDeleteBtn}
      />

    </>
  );
};

export default UIcardDisplay;
