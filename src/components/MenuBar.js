import React from "react";

function MenuBar( { currentDisplayedContent, changeDisplayedContent } ) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function handleMenuClick( clickTargetString ) {
    changeDisplayedContent( clickTargetString );
  }

  return (
    <div className="ui four item menu">
      <span className={ "item" + ( currentDisplayedContent === "Profile" ? " active" : "" ) }>
        <i className="user large icon" onClick={ () => handleMenuClick( "Profile" ) } />
      </span>

      <span className={ "item" + ( currentDisplayedContent === "Photos" ? " active" : "" ) }>
        <i className="photo large icon" onClick={ () => handleMenuClick( "Photos" ) } />
      </span>

      <span className={ "item" + ( currentDisplayedContent === "Cocktails" ? " active" : "" ) }>
        <i className="cocktail large icon" onClick={ () => handleMenuClick( "Cocktails" ) }/>
      </span>

      <span className={ "item" + ( currentDisplayedContent === "Pokemon" ? " active" : "" ) }>
        <i className=" themeisle large icon" onClick={ () => handleMenuClick( "Pokemon" ) }/>
      </span>
    </div>
  );
}

export default MenuBar;
