import React, { useEffect, useState } from "react";
import Header from "../../fragments/header";
import { Breadcrumb, Container, Row, Col, Dropdown } from "react-bootstrap";
import "./main.css";
import axios from "axios";
import MaterialTable, { MTableToolbar } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { KeyboardDatePicker } from "@material-ui/pickers";
export default function Main({ page_show }) {
  const [state, setState] = useState([]);
  const [state_1, setState_1] = useState([]);
  const [state_2, setState_2] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: 0,
    },
  }));
  const classes = useStyles();
  const columns = [
    {
      title: "Name",
      field: "customername",
      cellStyle: { minWidth: 350 },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          {item.customername}
        </Typography>
      ),
    },
    {
      title: "ID",
      field: "customerphone",
      cellStyle: { minWidth: 350, textAlign: "center" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          <NumberFormat
            value={item.customerphone}
            displayType={"text"}
            format="### ### ####"
          />
        </Typography>
      ),
    },
    {
      title: "Tier",
      field: "customertier",
      cellStyle: { minWidth: 100, textAlign: "center" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          {item.customertier}
        </Typography>
      ),
    },

    {
      title: "LTV",
      field: "totalamount",
      cellStyle: { minWidth: 250, textAlign: "right" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          <NumberFormat
            value={item.totalamount}
            displayType={"text"}
            thousandSeparator={true}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
    {
      title: "Total Trans.",
      field: "totaltransaction",
      cellStyle: { minWidth: 300, textAlign: "right" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          <NumberFormat
            value={item.totaltransaction}
            displayType={"text"}
            thousandSeparator={true}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
    {
      title: "Total Point.",
      field: "totalreward",
      cellStyle: { minWidth: 300, textAlign: "right" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          <NumberFormat
            value={item.totalreward}
            displayType={"text"}
            thousandSeparator={true}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
    {
      title: "Pemaining Point",
      field: "remainingpoint",
      cellStyle: { minWidth: 350, textAlign: "right" },
      render: (item) => (
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          <NumberFormat
            value={item.remainingpoint}
            displayType={"text"}
            thousandSeparator={true}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
  ];

  useEffect(() => {
    const getData_1 = async () => {
      //access ถูก block ด้วย cors
      await axios
        .get(
          // "https://cors-anywhere.herokuapp.com/https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
          "https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
        )
        .then((res) => {
          const data = res.data.data.list;
          setState(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getData_2 = async () => {
      //access ถูก block ด้วย cors
      await axios
        .get(
          // "https://cors-anywhere.herokuapp.com/https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
          "https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
        )
        .then((res) => {
          const data = res.data.data.summary;
          setState_1(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getData_3 = async () => {
      //access ถูก block ด้วย cors
      await axios
        .get(
          // "https://cors-anywhere.herokuapp.com/https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
          "https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json"
        )
        .then((res) => {
          const data = res.data.data.summarytier[0];
          setState_2(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData_3();
    getData_2();
    getData_1();
  }, []);

  const Breadcrumb_show = (
    <ol className="breadcrumb  " style={{ backgroundColor: "white" }}>
      <Breadcrumb.Item>
        <i class="fas fa-home text-dark"></i>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <span className="text-secondary" style={{ fontWeight: "500" }}>
          Business Insight
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <span className="text-secondary" style={{ fontWeight: "500" }}>
          Report
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <span className="text-secondary" style={{ fontWeight: "500" }}>
          Member
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item
        href="#"
        style={{
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            color: "rgb(250, 153, 22)",
            fontSize: 20,
            lineHeight: 0.0,
          }}
        >
          {page_show}
        </span>
      </Breadcrumb.Item>
      <div
        className="ml-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "rgb(250, 153, 22)",
        }}
      >
        <li style={{ cursor: "pointer" }}>
          <i class="fas fa-chart-line px-2"></i>
        </li>
        <li style={{ cursor: "pointer" }}>
          <i class="fas fa-download px-2"></i>
        </li>
        <li style={{ cursor: "pointer" }}>
          <i class="fas fa-print px-2"></i>
        </li>
      </div>
    </ol>
  );

  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  const Body = (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6}>
          <h1
            style={{
              color: "rgb(250, 153, 22)",
              fontSize: 23,
              fontWeight: "600",
            }}
          >
            Yearly Member 01-jan-2020 to 31-Dec-2020
          </h1>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-end mb-2 ">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                backgroundColor: "#fff",
                color: "rgb(250, 153, 22)",
                borderColor: "rgb(250, 153, 22)",
                width: 120,
                marginRight: 10,
              }}
              variant="warning"
            >
              Year View
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Year View</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Year View</Dropdown.Item>
              <Dropdown.Item href="#/action-3"> Year View</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Row>
            <Col
              xs={12}
              lg={12}
              className="d-flex justify-content-end mb-2 mr-lg-1 "
            >
              <KeyboardDatePicker
                clearable
                value={selectedDate}
                placeholder=""
                onChange={(date) => handleDateChange(date)}
                minDate={new Date()}
                format=" MM/dd/yyyy"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mx-1">
        <Col
          xs={12}
          lg={4}
          md={12}
          style={{
            backgroundColor: "rgb(250, 153, 22)",
            color: "#fff",
          }}
          className="border border-2"
        >
          <Row style={{ height: 200 }} className="pt-4 px-4">
            <Col xs={9} lg={8}>
              <span style={{ fontSize: 27, fontWeight: 500 }} className="mr-1">
                Total
              </span>
              <h4 style={{ display: "inline" }}>Members :</h4>
            </Col>
            <Col xs={3} lg={4} className="d-flex justify-content-end">
              <h4> {state_2.total_members}</h4>
            </Col>
            <Col xs={9} lg={8}>
              <span style={{ fontSize: 27, fontWeight: 500 }} className="mr-1">
                Total
              </span>
              <h4 style={{ display: "inline" }}>
                Rev.
                <span style={{ fontSize: 15, fontWeight: "normal" }}>
                  (THB)
                </span>{" "}
                :
              </h4>
            </Col>
            <Col xs={3} lg={4} className="d-flex justify-content-end">
              <h4> {kFormatter(state_2.total_amount)}</h4>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          lg={8}
          md={12}
          style={{ backgroundColor: "rgb(130, 126, 123)", color: "#fff" }}
          className="py-3 my-1 my-lg-0 pt-lg-0 border border-2"
        >
          <Row>
            <Col xs={12} lg={12} className="mb-lg-4">
              <h4 className="d-flex justify-content-center mt-1">
                {state_2.tier_name}
              </h4>
            </Col>
            <Col xs={9} lg={8} className="mb-lg-3">
              <span style={{ fontSize: 27, fontWeight: 500 }} className="mr-1">
                Total
              </span>
              <h4 style={{ display: "inline" }}>Members :</h4>
            </Col>
            <Col xs={3} lg={4} className="d-flex justify-content-end mb-lg-3">
              <h4> {state_2.total_members}</h4>
            </Col>
            <Col xs={9} lg={8}>
              <span style={{ fontSize: 27, fontWeight: 500 }} className="mr-1">
                Total
              </span>
              <h4 style={{ display: "inline" }}>
                Rev.
                <span style={{ fontSize: 15, fontWeight: "normal" }}>
                  (THB)
                </span>{" "}
                :
              </h4>
            </Col>
            <Col xs={3} lg={4} className="d-flex justify-content-end">
              <h4> {kFormatter(state_2.total_amount)}</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

  const data_table = (
    <Container fluid>
      <Row className="mt-1 ">
        <Col xs={12} md={12} lg={12}>
          <div className={classes.root}>
            <MaterialTable
              components={{
                Toolbar: (props) => <div />,
              }}
              options={{
                pageSize: 5,
                search: false,
                rowStyle: (rowData, index) => ({
                  backgroundColor:
                    index % 2 == 0 ? "rgb(238, 238, 238)" : "#fff",
                }),
                headerStyle: {
                  backgroundColor: "rgb(130, 126, 123)",
                  color: "#FFF",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderStyle: "solid",
                  textAlign: "center",
                },
                showTitle: false,

                // pageSizeOptions: [],
              }}
              localization={{
                pagination: {
                  labelDisplayedRows: "",
                  labelRowsSelect: "",
                },
              }}
              columns={columns}
              data={state}
            />
          </div>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <Row
            style={{
              height: 35,
              paddingTop: 10,
              paddingBottom: 30,
              boxShadow:
                "0px 5px 20px rgb(249, 249, 249), 0px -5px 20px rgb(249, 249, 249)",
              marginTop: 200,
            }}
            className="mb-2 "
          >
            <Col
              xs={12}
              md={12}
              lg={5}
              style={{
                textAlign: "center",
                fontSize: 22,
                fontWeight: "bold",
                color: "rgb(250, 153, 22)",
              }}
            >
              Total
            </Col>
            <Col
              xs={12}
              md={12}
              lg={1}
              style={{
                textAlign: "right",
                fontSize: 22,
                fontWeight: "bold",
                color: "rgb(250, 153, 22)",
              }}
            >
              <NumberFormat
                value={state_1.lifetimevalue}
                displayType={"text"}
                thousandSeparator={true}
                fixedDecimalScale={true}
              />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={2}
              style={{
                textAlign: "right",
                fontSize: 22,
                fontWeight: "bold",
                color: "rgb(250, 153, 22)",
              }}
            >
              <NumberFormat
                value={state_1.totaltransaction}
                displayType={"text"}
                thousandSeparator={true}
                fixedDecimalScale={true}
              />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={2}
              style={{
                textAlign: "right",
                fontSize: 22,
                fontWeight: "bold",
                color: "rgb(250, 153, 22)",
              }}
            >
              <NumberFormat
                value={state_1.totalpoint}
                displayType={"text"}
                thousandSeparator={true}
                fixedDecimalScale={true}
              />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={2}
              style={{
                textAlign: "right",
                fontSize: 22,
                fontWeight: "bold",
                color: "rgb(250, 153, 22)",
              }}
            >
              <NumberFormat
                value={state_1.remainingpoint}
                displayType={"text"}
                thousandSeparator={true}
                fixedDecimalScale={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

  return (
    <React.Fragment>
      <Header />
      {Breadcrumb_show}
      {Body}
      {data_table}
    </React.Fragment>
  );
}
