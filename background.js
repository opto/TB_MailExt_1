 /*
 
 
 
 function klickaktion() {
 // browser.myapi.create_UI();
}


//debugger;


browser.commands.onCommand.addListener(function (command) {
  if (command === "tag-backup") {
 //   realRemove();
  browser.myapi.create_UI();
 //    console.log("tag-backup");
  }
});

//browser.browserAction.onClicked.addListener(klickaktion);

 console.log("backgr");
browser.menus.create({
  id: "remove-me",
  title: "folder_pane",

  contexts: ["folder_pane"]
});

browser.menus.create({
  id: "remove-me3",
  title: "messlist",

  contexts: ["message_list"]
});



browser.menus.create({
  id: "remove-me4",
  title: "tab",

  contexts: ["tab"]
});


browser.menus.create({
  id: "remove-me2",
  title: "testop2",

  contexts: ["folder_pane"]
});

*/

//  browser.myapi.create_UI();
//function handleStartup() {
//  browser.myapi.restart();
//}

//browser.runtime.onStartup.addListener(handleStartup);
 /*
function dlFile()
{
var csv = 'foo,bar,baz'  ;
  var blob = new Blob([csv], {type: "text/csv;charset=utf-8"})   ;

  browser.downloads.download({
      'url': URL.createObjectURL(blob),
      'filename': 'file.csv',
      'saveAs': false
  });
  }
  
  */