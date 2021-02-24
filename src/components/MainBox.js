import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [ currentDisplayedContent, changeDisplayedContent ] = useState( "Profile" );

  let detailsToDisplay = null;

  switch ( true ) {
    case currentDisplayedContent === "Photos":
      detailsToDisplay = <Photos />;
      break;
    case currentDisplayedContent === "Cocktails":
      detailsToDisplay = <Cocktails />;
      break;
    case currentDisplayedContent === "Pokemon":
      detailsToDisplay = <Pokemon />;
      break;
    default:
      detailsToDisplay = <Profile />;
      break;
  }

  // detailsToDisplay = currentDisplayedContent === "Photos" ? <Photos /> : currentDisplayedContent === "Cocktails" ? <Cocktails /> : currentDisplayedContent === "Pokemon" ? <Pokemon /> : <Profile />

  return (
    <div>
      <MenuBar changeDisplayedContent={ changeDisplayedContent }/>
      { detailsToDisplay }
    </div>
  );
}

export default MainBox;
