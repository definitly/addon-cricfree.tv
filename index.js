var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
const {Cc,Ci} = require("chrome");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit cricfree.tv",
  icon: {
    "16": "./favnew.png",
    "32": "./favnew.png",
    "64": "./favnew.png"
  },
  onClick:  function(state) {
    play_video(tabs.activeTab.url);
        
}
});


function getCurrentURL(){

    var currentWindow = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator).getMostRecentWindow("navigator:browser");

    var currBrowser = currentWindow.getBrowser();
    var currURL = currBrowser.currentURI.spec;

    return currURL;
}




function play_video(url) {


if (url.indexOf("cricfree.tv") > -1) {


        var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
	file.initWithPath("/usr/local/bin/cricfree.tv");

	// create an nsIProcess
	var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
	process.init(file);

// Run the process.
// If first param is true, calling thread will be blocked until
// called process terminates.
// Second and third params are used to pass command-line arguments
// to the process.
  var url_current  = getCurrentURL()
  var args =[url_current]
process.run(false,args,args.length);
   }
}