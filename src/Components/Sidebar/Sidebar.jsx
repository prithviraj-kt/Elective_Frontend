import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial", zIndex:"100" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href={`/profile/${props.id}`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Branches
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to={`/getallsubjects/${props.ele}/CSE/${props.id}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="columns">CSE</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/getallsubjects/${props.ele}/ECE/${props.id}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">ECE</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/getallsubjects/${props.ele}/EEE/${props.id}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">EEE</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/getallsubjects/${props.ele}/ME/${props.id}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">ME</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to={`/getallsubjects/${props.ele}/CV/${props.id}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                CV
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Elective
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
