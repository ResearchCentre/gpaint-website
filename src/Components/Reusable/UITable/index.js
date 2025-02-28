import React, { useState, useRef } from 'react'
import { Table, Row, Col, InputGroup, Form } from 'react-bootstrap'
import TableUser from '../../../Assets/svg/Frame.jpg';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { CSVLink } from "react-csv";
import { toast } from 'react-toastify';

const UITable = ({ tableBody, tableHeader }) => {
  const [tableBodydata, setTableBodydata] = useState(tableBody)
  const csvLinkEl = useRef();

  function reduce(array, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
      accumulator = reducer(accumulator, array[i], i, array);
    }

    return accumulator;
  }

  const downloadCSV = () => {
    if (tableBody.length > 0) {
      setTableBodydata(
        reduce(tableBody, function (result, data) {
          result.push({
            "Today's Users": data.userName,
            "Check-In": data.checkinTime,
            "Check-Out": data.checkoutTime,

          });
          return result;
        }, [])
      );

      setTimeout(() => {
        csvLinkEl.current.link.click();
      });
    } else {
      toast.error(`No data available to download.`);
    }
  }

  return (
    <div className='customiseTable_ui'>
      <Row>
        <Col md={4}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><SearchIcon /></InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={8}>
          <div className='float-end'>
            <Form.Select className='border-0 d-inline'>
              <option>All</option>
            </Form.Select>
            <Tooltip title="Share">
              <IconButton className='mx-2'>
                <SendOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download">
              <IconButton className='mx-2' onClick={downloadCSV}>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <CSVLink
              header={tableHeader}
              data={tableBody}
              filename={"table.csv"}
              asyncOnClick={true}
              ref={csvLinkEl}
            />
          </div>
        </Col>
      </Row>
      <Table responsive>
        <thead>
          <tr>
            {tableHeader.map((heading, idx) => {
              return (
                <th>{heading.heading}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((data, index) => {
            return (
              <tr>
                <td><img src={TableUser} alt="user" /> {data.userName}</td>
                <td>{data.checkinTime}</td>
                <td>{data.checkoutTime}</td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </div>
  )
}

export default UITable