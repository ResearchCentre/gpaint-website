import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Modal } from 'antd';

const UIModal = ({ isModalOpen, handleOk, handleCancel, modalTitle, modalContent, btnloading, confirmTxt, submitbtnVariant, disableFooter, cancelText, submitBtnLoader }) => {
    return (
        <div className="customize_reusablemodal" >
            <Modal zIndex={1200} title={modalTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={disableFooter === true ? null : [
                    <div className="app_btn resize_btn">
                        <Button variant="outline-primary" className="mx-2" onClick={handleCancel}>
                            {cancelText === ("" || null || undefined) ? "Cancel" : cancelText}
                        </Button>
                        <Button type="submit" variant={submitbtnVariant} loading={btnloading} onClick={handleOk} disabled={submitBtnLoader ? true : false}>
                            {submitBtnLoader ? <Spinner animation="border" size="sm" variant="light" /> : confirmTxt}
                        </Button>
                    </div>
                ]}
            >
                {modalContent}
            </Modal>
        </div>
    )
}

export default UIModal