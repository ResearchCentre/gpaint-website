import Styled from "styled-components";

const Cardwrap = Styled.div`
.card_container{
  margin: 5px;
  z-index:-1;
  transition: 1s;
  cursor:default;

}
.title_bold{
  font-weight:600;
  color:rgba(0, 0, 0, 0.87);
}
.width_50{
  width:50%;
  float:left;
  margin-bottom:10px;
}
 .card_colon{
float:right;
}
.card_container:hover{
   box-shadow:0px 0px 10px 0px rgba(0,0,0,0.75);
}
.menu_icon .dropdown-toggle::after{
  display:none;
}

.menu_icon svg{
  position:absolute;
}

.menu_icon .dd_icon svg{
  position:unset;
}

.cardLabel {
  color: black;

}
.username_container {
  background:#1958A7;
  border-radius: 50%;
  border: none;
  width: 100px;
  height: 100px;
  margin:auto;
  display:flex;
  justify-content: center;
  align-items:center;
  font-size:28px;
  font-weight:600;
  color:#ffff;
}
`;
export default Cardwrap;

