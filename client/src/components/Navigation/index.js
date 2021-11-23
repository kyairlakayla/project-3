/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Segment, Menu, Icon, Dropdown } from "semantic-ui-react";
import LoginModal from "../Login";
import SignupModal from "../Signup";

function Navigation() {
  return (
    <>
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item>
            <Icon name="food" size="large" />
          </Menu.Item>{" "}
          <Menu.Item name="Recipes" />
          <Menu.Item name="Quick & Easy" />
          <Menu.Item name="Videos" />
          <Menu.Item name="About" />
          <Menu.Menu position="right">
            <Menu.Item name="Saved Recipes" />
            <Menu.Item name="Donate" />
            <Dropdown item text={<Icon name="user" />}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <LoginModal />
                </Dropdown.Item>
                <Dropdown.Item>
                  <SignupModal />
                </Dropdown.Item>
                <Dropdown.Item> Contact us </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>
    </>
  );
}
export default Navigation;
