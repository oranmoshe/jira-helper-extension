(function() {

	// just place a div at top right
	var h1 = document.getElementsByTagName('h1')[0];

	var aa = document.getElementById('jira-issue-header').getElementsByTagName("a");
	var p = aa[aa.length-1].innerText +"/"+ h1.innerText.replace(/ /g, "-").replace(/---/g, "-").replace(/"/g, "").replace(/'/g, "").toLowerCase();    
	prompt("Branch name", p);

})();