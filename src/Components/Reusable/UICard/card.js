import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SouthIcon from "@mui/icons-material/South";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { alpha, styled } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosinstance from "../../../Axios/service/baseApi";
import UIModal from "../UIConfirmationModal/index";
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
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

const initial = Array.from({ length: 3 }, (v, k) => k).map((k, i) => {
  const custom = {
    id: `id-${k}`,
    content: `Process ${k}`,
    multiColorbg: [
      "#ba68c8",
      "#FFCA2C",
      "#ec407a",
      "#26a69a",
      "#8bc34a",
      "#ff5722",
      "#795548",
      "#607d8b",
    ],
  };
  return custom;
});

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result?.splice(startIndex, 1);
  result?.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle, Colorbg) => ({
  // some basic styles to make the items look a bit nicer
  minWidth: "80px",
  maxWidth: "150px",
  minHeight: "40px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
  userSelect: "none",
  // change background colour if dragging
  backgroundColor: isDragging ? "grey" : Colorbg,

  // styles we need to apply on draggables
  ...draggableStyle,
});

function Quote({ quote, index }) {
  return (
    <>
      <Draggable draggableId={quote.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
              quote.multiColorbg[index]
            )}
          >
            <span style={{ overflowX: "auto", wordWrap: "break-word" }}>
              {quote.content}
            </span>
          </div>
        )}
      </Draggable>
    </>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => (
    <div>
      <Quote
        quote={quote}
        index={index}
        key={quote.id}
        style={{
          backgroundColor: `${Math.floor(
            Math.random() * (16777215 + index)
          ).toString(16)}`,
        }}
      />
      <SouthIcon viewBox="10 4 3 18" />
    </div>
  ));
});
const QuoteList_left = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Quote
        quote={quote}
        index={index}
        key={quote.id}
        style={{
          backgroundColor: `${Math.floor(
            Math.random() * (16777215 + index)
          ).toString(16)}`,
          display: "flex",
        }}
      />
      <ArrowForwardIcon />
    </div>
  ));
});

const UIcardDisplay = ({
  title,
  id,
  value,
  onHomePg,
  onAdminDashBoard,
  pageName,
  showNew,
  handleClick,
  handleEditClick,
  getAllPositionData,
  handleDeleteSuccessMsg,
  changeEditMode,
  getEditDetails,
  getViewDetails,
  changetoViewMode,
  positionResponse,
  ChangePositionResponseArray,
}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalContent, setModalContent] = useState();
  const [flowChart, setFlowChart] = useState({ quotes: initial });
  const [direction, setDirection] = useState(false);

  const dispatch = useDispatch();

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      flowChart.quotes,
      result.source.index,
      result.destination.index
    );

    setFlowChart({ quotes });
  }
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const getFirstChar = (str) => {
    return str?.charAt(0)?.toUpperCase();
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightgrey" : null,
    padding: "0px",
    width: 250,
    margin: "auto",
  });
  const getListStylelefttoright = (isDraggingOver) => ({
    background: isDraggingOver ? "lightgrey" : null,
    padding: grid,
    margin: "auto",
    display: "flex",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  const handleEditModal = () => {
    handleEditClick();
    handleCloseMenu();
  };

  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    handleCloseMenu();
  };
  const deletePosition = async (id) => {
    try {
      setDeleteLoader(true);
      const config = {};
      const response = await axiosinstance.delete(`/5_position/${id}`, config);
      if (response.data.status === true) {
        // getAllPositionData()
        setDeleteModal(false);
        setDeleteLoader(false);

        const removeDeletedPostion = positionResponse.filter((e) => e.sk != id);
        ChangePositionResponseArray(removeDeletedPostion);

        handleDeleteSuccessMsg(true);

        // dispatch(getPosition());
      }
    } catch (error) {

      console.error("[Position Delete] Error -->", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  let badge;
  let buttonViewMore;

  if (pageName === "landingPage" && showNew === "yes") {
    badge = (
      <span className="badge badge-primary cardLabel" id="cardLabel">
        New
      </span>
    );
    buttonViewMore = (
      <button className="badge badge-primary vieMoreButton">View More</button>
    );
  } else {
    badge = (
      <span className="badge badge-primary" id="cardLabel">
        {" "}
      </span>
    );
    buttonViewMore = (
      <button className="badge badge-primary vieMoreButton">View More</button>
    );
  }


  return (
    <Container fluid>
      <div className="position_card">
        <div className="position_header">
          <Row>
            <Col lg={10}>
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div className="title_letter">{getFirstChar(value?.key_1)}</div>
                </div>
                <div class="flex-grow-1 ms-3 remove_btnfocus">
                  <button onClick={() => {
                    getViewDetails(id);
                    changetoViewMode(true);
                    changeEditMode(false);
                    handleClick();
                  }} className="btn btn-link p-0 text-decoration-none text-start  hovered_text">
                    <h5 className="mb-1 text_overflow">{value?.key_1}</h5>
                  </button>
                  <div className="lightblue_txt ">{value?.key_2}</div>
                </div>
              </div>
            </Col>

            <Col lg={2}>
              <Tooltip title="Action" placement="bottom" arrow>
                <IconButton
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableelevation="true"
                  onClick={handleMenuClick}
                  className="float-end"
                  endicon={<KeyboardArrowDownIcon />}
                >
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            </Col>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
            >
              <MenuItem
                onClick={() => {
                  handleEditModal(value);
                  changeEditMode(true);
                  changetoViewMode(false);
                  getEditDetails(id);
                }}
                disableRipple
                className="text-primary"
              >
                <EditIcon className="text-primary" />
                Edit
              </MenuItem>

              <MenuItem
                className="text-danger"

                onClick={() => {
                  handleDeleteModal(id);
                }}
                disableRipple
              >
                <DeleteIcon className="text-danger" />
                Delete
              </MenuItem>
            </StyledMenu>
          </Row>

        </div>

        <div className="position_body">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <LocationOnTwoToneIcon />
            </div>
            <div class="flex-grow-1 ms-3">
              {value?.key_10}
            </div>
          </div>


          <div class="d-flex align-items-center mt-2">
            <div class="flex-shrink-0">
              <MonetizationOnTwoToneIcon />
            </div>
            <div class="flex-grow-1 ms-3">
              {value?.key_8} (Commission)
            </div>
          </div>

          <div class="d-flex align-items-center mt-2">
            <div class="flex-shrink-0">
              <AttachMoneyTwoToneIcon />
            </div>
            <div class="flex-grow-1 ms-3">
              {value?.key_9} (Salary)
            </div>
          </div>

        </div>

        <div className="position_footer">
          <Row>
            <Col md={6}>
              <div class="d-flex align-items-center mt-2 text-secondary">
                <div class="flex-shrink-0">
                  <AccessTimeTwoToneIcon />
                </div>
                <div class="flex-grow-1 ms-1">
                  Posted {moment(id).startOf("hour").fromNow()}
                </div>
              </div>
            </Col>
            <Col md={5} className="mt-2 text-secondary">
              Post ID:{id}
            </Col>
            <Col md={1}>
              <Tooltip title="View more" placement="top" arrow>
                <IconButton
                  className="float-end"
                  onClick={() => {
                    getViewDetails(id);
                    changetoViewMode(true);
                    changeEditMode(false);
                    handleClick();
                  }}>
                  <VisibilityTwoToneIcon />
                </IconButton>
              </Tooltip>

            </Col>

          </Row>

        </div>
      </div>

      <UIModal
        isModalOpen={deleteModal}
        handleOk={() => {
          deletePosition(id);
        }}
        handleCancel={() => {
          handleCloseModal();
          setDeleteModal(false);
        }}
        modalTitle={`Are you sure you want to Delete?`}
        modalContent={``}
        confirmTxt="ok"
        submitBtnLoader={deleteLoader}
      />


      <Modal
        size={direction === false ? "sm" : "lg"}
        style={{ overflowX: "auto" }}
        show={openModal}
        onHide={handleModalClose}
        centered
      >
        <Modal.Header
          style={{
            borderBottom: "none",
            paddingBottom: "0px",
            fontSize: "12px",
          }}
          closeButton
        >
          <Tooltip
            placement="bottom"
            title={
              direction === false
                ? "change horizontal view"
                : "change vertical view"
            }
          >
            <button
              style={{
                border: "none",
                background: "#1958a7",
                color: "#fff",
                padding: "5px",
              }}
              onClick={() => setDirection(!direction)}
            >
              {direction === false ? (
                <ArrowForwardIcon style={{ fontSize: "14px" }} />
              ) : (
                <SouthIcon style={{ fontSize: "14px" }} />
              )}
            </button>
          </Tooltip>
        </Modal.Header>

        <Modal.Body>
          {direction === false ? (
            <div className="flow_chart">
              <div className="flowchart_startend">Start</div>
              <div>
                <SouthIcon viewBox="10 4 3 18" />
              </div>
              {/* <div className='flowchart_startend'>Process</div> */}
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        <QuoteList quotes={flowChart.quotes} />
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div className="flowchart_startend">Stop</div>
            </div>
          ) : (
            <div className="flowchart_div">
              <div className="flowchart_start">start</div>
              <ArrowForwardIcon />
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={getListStylelefttoright(snapshot.isDraggingOver)}
                      >
                        <QuoteList_left quotes={flowChart.quotes} />
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div className="flowchart_start">stop</div>
            </div>
          )}
        </Modal.Body>

        <Modal.Body></Modal.Body>
      </Modal>
    </Container>
  );
};

export default UIcardDisplay;
