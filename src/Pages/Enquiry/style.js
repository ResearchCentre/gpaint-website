import { Upload as AntdUpload } from "antd";
import styled from "styled-components";
import Styled from "styled-components";

const EnquiryWrap = Styled.div`
.form_title{
    color: #0F0074;
}
.form_select{
    height: 43px;
}
.spinner_loader{
        color: red;
    }
    .form_title{
        text-align:center;
        font-size:20px;
        font-weight:900;
    }
    .ant-input{
        padding: 8px 11px;
    }
    .form_btn{
        :hover{
            color: #fff !important;
            background: #0F0074 !important;
        }
        background: #0F0074;
        min-width: 40%;
        height: 40px;
        color: #fff;
    }
    .form-control:focus {
        border: 1px solid #003dff;
        outline: unset !important;
        box-shadow: unset;
    }
    .payment_form {
        width: 100%;
        padding: 1.5rem;
        border-radius: 10px;
        border:1px solid #82868B;
    }
    .user_added_alert{
        width: 50%;
        .alert_content{
            font-size: 14px;
        }
        .alert-heading {
            font-size: 16px;
        }
        .button.btn-close {
            font-size: 14px !important;
        }
    }
    
    .enquiry_card_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem 3rem 1rem;
    }
    .head_section{
        width: 100%;
        display: flex;
    }

    @media(min-width: 320px) and (max-width: 480px){
        .payment_form{
            width: 100%;
            padding: 10px;
        }
    }
    @media(min-width: 1025px) {
        .payment_form{
            width: 75%;
            padding: 2rem;
        }
    }
`;

export const DataModalWrap = Styled.div`
.close_btn{
    width: 150px;
    background: #0F0074;
}

.pay_now_btn{
        width: 40%;
        padding: 10px;
        background:blue;
        border:none;
        border-radius:5px;
        color:white;
        margin-top:1rem;
        font-size:16px;
        font-weight:700;
    }
    .payment_success_container{
        padding: 30px;
    }
    .name_div{
        display:flex;
        flex-direction: column;     
    }
    .card_holder_label{
        font-weight:300;
    }
    .card_holder{
        ::placeholder{
            padding-left:10px;
        }
        :focus {
            border: 1px solid 0573e180 !important;
            outline:none;
            box-shadow: rgb(24 139 255 / 32%) 0px 0px 1px 3px;
        }
     
        font-weight: 300;
        padding: 0px 10px;
        font-size: 16px;
        color: #000000e0;
        height: 44px;
        border: 1px solid rgba(132, 132, 132, 0.25) !important;
        border-radius: 5px;
    }
    .loader-overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index:1000;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .payment-container {
    position: relative;
    }
    .check_out_spinner{
        width: 50px;
        height: 50px;
        color: #462aff;
    }
    .payment_header {
        text-align: center;
        font-size: 22px;
        color:#0F0074;
        font-weight: 700;

    }  
    .payment_details {
        /* font-size: 18px; */
        margin-bottom: 10px;
        /* font-weight: 800; */
    }  
    .name{
        /* font-size: 18px; */
        margin-bottom: 10px;
        /* font-weight: 800; */
    }
    .details_value{

        /* font-size: 16px;
        font-weight: 500; */
    }
    .modal-header{
        border-bottom:none !important;
    }
    @media(max-width: 768px) {
        .payment_success_container{
            padding: 20px;        
            border: 1px solid #82868B;
            border-radius: 6px;    
        }
        .details_head{
            font-size:17px;
            font-weight:bold;
       }
       .bar_style{
            display:none;
       }
       .payment_header {
            text-align: left;    
            color: #0F0074;
    
        }
       .form_details{
            padding-top:25px !important;
       }
    }
    @media(min-width: 769px) {
        .payment_success_container{
           width:80%;
           margin:auto;            
        }
        .hide_dead{
            display:none;
        }
      
    }
    @media(min-width: 1025px) {
        .form_details{
            width:80%;
            margin:auto;
        }
    }
`;


export default EnquiryWrap;

export const Upload = styled(AntdUpload)`
width: 100%;
height: 100px;
.ant-upload {
    width: 100%;
}
button {
    height: 100px;
    width: 100%;
    background: #d3d3d380;;
}

@media(min-width: 768px) {
    button {
    height: 75px;
    width: 100%;
}}

`;