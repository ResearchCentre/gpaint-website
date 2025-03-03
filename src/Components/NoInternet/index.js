import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UIModal from "../Reusable/UIConfirmationModal/index";
import "./style.css";

const NoInternet = () => {
  const [show, setShow] = useState(false);
  // const { online } = useContext(isOnlineContext);

  useEffect(() => {
    online ? setShow(false) : setShow(true);
  }, [online]);

  return (
    <>
      <div className="NoInternetAlert">
        {show ? (
          <UIModal
            isModalOpen={showUpdatedAlert}
            handleOk={() => setShow(false)}
            handleCancel={() => setShow(false)}
            modalTitle={`No Intenet Connection`}
            modalContent={`Check your Connectino and try again later`}
            confirmTxt="Ok"
            disableFooter={true}
          />
        ) : (
          <></>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default NoInternet;
