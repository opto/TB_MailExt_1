var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

/*

function load_UI_into_window(win)
{
 
          var dWindow=Services.wm.getMostRecentWindow("mail:3pane")  ;
          dWindow.alert("Hello " + "!");
          var doc=dWindow.document;
   var targetMenu,targetMenu1;
//			targetMenu = doc.getElementById("addressBook");
			targetMenu = doc.getElementById("taskPopup");
    let cat = "tag backup and restore";
 //let menuitem = document.createXULElement("menuitem");
 ;
 let menuitem = doc.createElement( "menuitem");
 
 
 //     menuitem.setAttribute("class", "menuitem-iconic calendar-category");
      menuitem.setAttribute("label", cat);
      menuitem.setAttribute("value", cat);
//      menuitem.setAttribute("type", maxCount === null || maxCount > 1 ? "checkbox" : "radio");
//      if (itemCategories.includes(cat)) {
 //       menuitem.setAttribute("checked", "true");
//      }
        targetMenu.appendChild(menuitem);
 
 }



 var windowListener = {
  onOpenWindow: function(aWindow) {
    // Wait for the window to finish loading
    let domWindow = aWindow.QueryInterface(Ci.nsIInterfaceRequestor).getInterface(Ci.nsIDOMWindowInternal || Ci.nsIDOMWindow);
    domWindow.addEventListener("load", function() {
      domWindow.removeEventListener("load", arguments.callee, false);
      load_UI_into_window(domWindow);
 //       dlog.logStringMessage(domWindow.document.documentElement.getAttribute("windowtype"));
    }, false);
  },
  onCloseWindow: function(aWindow) { },
  onWindowTitleChange: function(aWindow, aTitle) { }
};


	const wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
						 .getService(Components.interfaces.nsIWindowMediator);


               wm.addListener(windowListener);

 */

var myapi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
  







 /*         Services.wm.getMostRecentWindow("mail:3pane").alert("Hello " + "!");
 
  let windows = Services.wm.getEnumerator("mail:3pane");
  while (windows.hasMoreElements()) {
    let domWindow = windows.getNext().QueryInterface(Ci.nsIDOMWindow);
    };
    domWindow.alert("here");
 
  */
//		const doc = win.document;
//var  doc = domWindow.document;
//   var targetMenu,targetMenu1;
//			targetMenu = doc.getElementById("addressBook");
//			targetMenu = doc.getElementById("taskPopup");
/*      dlog.logStringMessage("ID");
      dlog.logStringMessage(doc.documentElement.getAttribute("windowtype"));
      dlog.logStringMessage(doc.documentElement.getAttribute("title"));
      dlog.logStringMessage(win.title);
      dlog.logStringMessage(win.id);
      dlog.logStringMessage(win.windowtype);
      dlog.logStringMessage(win.name);
 */ //   win.alert(win.title);
 
//			if (targetMenu) {
 //     dlog.logStringMessage("Menu");
 //     let igl=Gloda.NOUN_MESSAGE;
 //     dlog.logStringMessage(igl);
//      dlog.logStringMessage(targetMenu.getAttribute("label"));
  
 //   let cat = "tag backup and restore";
 //let menuitem = document.createXULElement("menuitem");
 ;
// let menuitem = doc.createElement( "menuitem");
 
 
 //     menuitem.setAttribute("class", "menuitem-iconic calendar-category");
//      menuitem.setAttribute("label", cat);
 //     menuitem.setAttribute("value", cat);
//      menuitem.setAttribute("type", maxCount === null || maxCount > 1 ? "checkbox" : "radio");
//      if (itemCategories.includes(cat)) {
 //       menuitem.setAttribute("checked", "true");
//      }
 //        targetMenu.appendChild(menuitem);
/*

document.addEventListener('DOMContentLoaded', function(){
    Importer.init1();
 });   
 

				var newItem = doc.createElement("menu");
				newItem.setAttribute("id", "menuToolsTag");
				newItem.setAttribute("label", "tag backup and restore");
        targetMenu.appendChild(newItem);
 			targetMenu1 = doc.getElementById("menuToolsTag");
   //    newItem.label="tags";
 				var newItem2 = doc.createElement("menupopup");
                newItem.appendChild(newItem2);
				var newItem3 = doc.createElement("menuitem");
					newItem3.setAttribute("id", "tagRestore");
				newItem3.setAttribute("label", "restore of email-tags");
                newItem2.appendChild(newItem3);
				var newItem4 = doc.createElement("menuitem");
					newItem4.setAttribute("id", "tagBackup");
//					newItem4.setAttribute("oncommand", "{var dlog;dlog.logStringMessage('ll');}");

 //tagBackup 

				newItem4.addEventListener( "command", tagBackup, false);


   /*

				newItem4.addEventListener( "command", function(event) {
//      dlog.logStringMessage("bb");
      let igl=Gloda.NOUN_MESSAGE;
      igl=18;
 //     dlog.logStringMessage(igl+'end\n');
//      dlog.logStringMessage("bc");

  
  
 */ 
  
 //         }
  
  
  
    return {
      myapi: {
        async create_UI() {
 //       console.log("test);)
//borrowed from restart-application-1.2.1 
 //debugger;
//document.getElementbyId("tag_restore").display = "none";;   
debugger;
 console.log("implem");
  Services.wm.getMostRecentWindow("mail:3pane").alert("test");  //document.querySelector("#op_restart").textContent="";
// Services.wm.getMostRecentWindow("mail:3pane").document.querySelector("#op_restart").textContent="";
// var boot=Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup); 
//boot.quit(Components.interfaces.nsIAppStartup.eForceQuit|Components.interfaces.nsIAppStartup.eRestart);  
//let {BrowserUtils} = ChromeUtils.import ("resource://gre/modules/BrowserUtils.jsm", {});
//         var dWindow=Services.wm.getMostRecentWindow("mail:3pane")  ;
//          dWindow.alert("Hello " + "!");
/*          var doc=dWindow.document;
          var targetMenu,targetMenu1;
//			targetMenu = doc.getElementById("addressBook");
    			targetMenu = doc.getElementById("taskPopup");
 
 // targetMenu.appendItem("Insert", "insert");
          let cat = "tag backup and restore";
          let menuitem = doc.createXULElement("menu");
          menuitem.setAttribute("label", cat);
          menuitem.setAttribute("visible", true);
	  			menuitem.setAttribute("id", "menuToolsTag");

           targetMenu.appendChild(menuitem);

 	 	    	var newItem2 = doc.createXUElement("menupopup");
          menuitem.appendChild(newItem2);
 			targetMenu1 = doc.getElementById("menuToolsTag");

	  			var newItem3 = doc.createXULElement("menuitem");
					newItem3.setAttribute("id", "tagRestore");
			  	newItem3.setAttribute("label", "restore of email-tags");
          v.setAttribute("visible", true);
          newItem2.appendChild(newItem3);
			  	var newItem4 = doc.createXULElement("menuitem");
					newItem4.setAttribute("id", "tagBackup");
			  	newItem4.setAttribute("label", "backup of email-tags");
          newItem4.setAttribute("visible", true);
          newItem2.appendChild(newItem4);
 
 

 
 //					newItem4.setAttribute("oncommand", "{var dlog;dlog.logStringMessage('ll');}");
 
;
// let menuitem = doc.createElement( "menuitem");
 
 
 //     menuitem.setAttribute("class", "menuitem-iconic calendar-category");
//      menuitem.setAttribute("type", maxCount === null || maxCount > 1 ? "checkbox" : "radio");
//      if (itemCategories.includes(cat)) {
 //       menuitem.setAttribute("checked", "true");
//      }
    
      
//var boot=Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup); 
//boot.quit(Components.interfaces.nsIAppStartup.eForceQuit|Components.interfaces.nsIAppStartup.eRestart);  let {BrowserUtils} = ChromeUtils.import ("resource://gre/modules/BrowserUtils.jsm", {});
 //        Services.wm.getMostRecentWindow("mail:3pane").alert("Hello " + "!");
 //                 let recentWindow = Services.wm.getMostRecentWindow("mail:3pane");
 //         if (recentWindow) {
//            recentWindow.MsgSearchMessages();
//          }
 */
         },
         async tag_backup ()
         {
         }
      },
         async tag_restore ()
         {
          var dWindow=Services.wm.getMostRecentWindow("mail:3pane")  ;
          dWindow.alert("Hello " + "!");
         }
    };
  }
};
