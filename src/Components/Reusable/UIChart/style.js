import Styled from 'styled-components';

const DashboardView = Styled.div`
.react-multiple-carousel__arrow--left{
   left: calc(0% + 1px);
}
.react-multiple-carousel__arrow--right{
   right:calc(0% + 1px);
}
.react-multiple-carousel__arrow{
   border-radius: 5px;
   min-width: 35px;
    min-height: 65px;
}
.react-multiple-carousel__arrow::before{
   font-size:60px;
 }
.react-multiple-carousel__arrow{
   border-radius: 5px;
   min-width: 35px;
    min-height: 65px;
}
.container{
   //  border-radius: 8px;
   // max-width: 1200px;
   // padding:0px;
 }
 
//  @media only screen and (max-width: 1200px) {
//     .container{
//        max-width: 900px;
//       }
//    }
//    @media only screen and (min-width: 768px) {
//      .container{
//        max-width: 700px;
//      }
//   }

// @media only screen and (max-width: 420px) {
//    .container{
//      max-width: 400px;
//    }
// }

// @media only screen and (max-width: 375px) {
//    .container{
//      max-width: 290px;
//    }
// }

// @media only screen and (max-width: 320px) {
//    .container{
//      max-width: 270px;
//    }
// }
   .member-list{
      overflow: hidden;
      height: 400px;
      overflow-x: hidden;
   }
   .project-list {
      overflow: hidden;
      height: 400px;
      overflow-x: hidden;
   }
  
   .firstLetr{
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        color: #fff;
        box-shadow: inset 0px 3px 6px #ffffff30, 0px 3px 6px #00000029;
        font-size: 12px;
        padding: 4px 6px;
        text-align: center;
   }  
   .project-color-block{
       height : 80px;
       width : 80px;
       border-radius: 20%;
       margin:auto;
       color:white;
       font-size:22px;
   }

.viewall{
   font-size: 24px;
   color: #1958A7;
   font-weight: 700;
   display: grid;
   margin : auto;
}
.viewall_txt{
   font-size: 20px;
   color: #1958A7;
   font-weight: 600;
   display: grid;
   margin : auto;
}
a@media (min-width: 1400px) {
   #Add-goal{
      margin-right: 48px;
   }
}
`;

export default DashboardView;
