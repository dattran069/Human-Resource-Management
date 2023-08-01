import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import AddProperties from "../../components/Property/AddProperties";
import Properties from "../../components/Property/Properties";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainWrapper, PageWrapper } from "../../global/jsx/common";
import pageHeader from "../../components/PageHeader/pageHeader.module.scss";
import { isOpenSelector } from "../../features/sidebar/sidebarSlice";
import { useSelector } from "react-redux";

const PropertyPage = () => {
  const isOpenSidebar = useSelector(isOpenSelector);

  return (
    <MainWrapper>
      <Header />
      <Sidebar active="properties" />
      <PageWrapper isOpen={isOpenSidebar}>
        <Container fluid className="content">
          <div className={pageHeader.PageHeader}>
            <Row className="align-items-center">
              <PageHeader title="Properties" />
              <AddProperties />
            </Row>
          </div>
          <Properties />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default PropertyPage;
