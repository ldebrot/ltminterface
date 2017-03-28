(function(){

/*
 * 
 * temp = document.getElementById("temporarycriterionwrapper").offsetWidth - document.getElementById("dropbtn").offsetWidth - 32
 * document.getElementById("autocomplete-ajax").style.width = temp + "px";
 * .offsetWidth
 */



/* DEFINE GLOBAL FUNCTION AND VARIABLE VEHICLES */
window.ldbfunctions ={}; // 
window.ldbvars = {};
window.ldbcriteria = {};
window.ldbjson = {};

/* DEFINE DEFAULTS! */
ldbvars.ltm_defaultlist = "ltm_suggestions_jobs";//define skills as default list (which will be loaded as default suggestion list)
ldbvars.baseurl = "http://localhost:1337/";
ldbvars.ltm_criteria_current = 0;
ldbfunctions.ltm_suggestionarray = "";

/* DEFINE SEARCH STRUCTURE ! */
ldbvars.ltm_criteria = {
	//Entry number : ["innerHTML","name of suggestion list","background color in hexa","font color"] 
    "0": ["<i class='fa fa-wrench' aria-hidden='true'></i> métier</a>","ltm_suggestions_jobs","#6aa95b","white","est aujourd'hui "],
    "1": ["<i class='fa fa-bolt' aria-hidden='true'></i> compétences</a>","ltm_suggestions_skills","#cdcfff","black","a la compétence "],
    "2": ["<i class='fa fa-map-marker' aria-hidden='true'></i> localisation</a>","ltm_suggestions_locations","#f2b51a","black","travaille/réside à "]
};
//     "3": ["<i class='fa fa-arrows' aria-hidden='true'></i> situation</a>","ltm_suggestions_situations","#ffc3a0","black","se trouve dans la situation suivante : "],


/* WHAT HAPPENS ONCE THE DOCUMENT IS LOADED */
window.onload = function () {
	// Load the Criteria!
	ldbfunctions.dropbtnload();
	ldbfunctions.initializeautocomplete();
	ldbfunctions.autoreadjustinput();
	ldbfunctions.initializetemporarycriterionwrapperbottom();
	//TEMPORARY STUFF RIGHT HERE : TAKE OUT WHEN ONLINE JSON RETRIEVAL SETUP
	/*ldbfunctions.loadjson = function () {
		ldbjson = '[{"skills":[{"skill":1,"profil":8,"id":29,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":8,"id":36,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":8,"id":39,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":8,"id":43,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":8,"id":50,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":8,"id":64,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 3","firstname":"firstname 3","lastname":"lastname 3","email":"3@email.fr","enabled":true,"status":"user","id":4,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"fonction public","id":1,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"artisant","id":4,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":8,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":5,"profil":9,"id":5,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":1,"profil":9,"id":10,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":9,"id":21,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":1,"profil":9,"id":24,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":9,"id":25,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":9,"id":42,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":9,"id":46,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":9,"id":62,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":3,"profil":9,"id":63,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":9,"id":72,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":3,"profil":9,"id":87,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":9,"id":94,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":1,"profil":9,"id":95,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 7","firstname":"firstname 7","lastname":"lastname 7","email":"7@email.fr","enabled":true,"status":"user","id":8,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"fonction public","id":1,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"commercial","id":3,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":9,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":3,"profil":10,"id":4,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":10,"id":27,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":10,"id":33,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":10,"id":38,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":10,"id":82,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":10,"id":84,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":1,"profil":10,"id":89,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":3,"profil":10,"id":97,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 8","firstname":"firstname 8","lastname":"lastname 8","email":"8@email.fr","enabled":true,"status":"user","id":9,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"fonction public","id":1,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"serveur","id":1,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":10,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[],"user":{"username":"user 9","firstname":"firstname 9","lastname":"lastname 9","email":"9@email.fr","enabled":true,"status":"user","id":10,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"fonction public","id":1,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"artisant","id":4,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":11,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":2,"profil":2,"id":6,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":1,"profil":2,"id":15,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":2,"id":52,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":2,"id":54,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":2,"id":76,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":2,"id":86,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":3,"profil":2,"id":96,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":2,"id":99,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 0","firstname":"firstname 0","lastname":"lastname 0","email":"0@email.fr","enabled":true,"status":"user","id":1,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"Informatique","id":3,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"commercial","id":3,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":2,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":2,"profil":4,"id":3,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":4,"id":11,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":4,"id":12,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":4,"id":16,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":4,"id":17,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":4,"id":23,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":4,"id":26,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":4,"id":32,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":4,"id":41,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":4,"id":45,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":4,"id":56,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":4,"id":79,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":4,"id":83,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":4,"id":88,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":4,"id":90,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":4,"id":91,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 4","firstname":"firstname 4","lastname":"lastname 4","email":"4@email.fr","enabled":true,"status":"user","id":5,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"BTP","id":4,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"dev","id":5,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":4,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":3,"profil":5,"id":1,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":5,"id":2,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":5,"id":8,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":5,"id":18,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":1,"profil":5,"id":19,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":1,"profil":5,"id":20,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":5,"id":34,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":5,"id":35,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":5,"id":59,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":5,"id":61,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":1,"profil":5,"id":65,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 5","firstname":"firstname 5","lastname":"lastname 5","email":"5@email.fr","enabled":true,"status":"user","id":6,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"BTP","id":4,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"dev","id":5,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":5,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":3,"profil":7,"id":7,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":2,"profil":7,"id":51,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":7,"id":57,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":7,"id":58,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":3,"profil":7,"id":71,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":7,"id":73,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":7,"id":81,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 2","firstname":"firstname 2","lastname":"lastname 2","email":"2@email.fr","enabled":true,"status":"user","id":3,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"BTP","id":4,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"dev","id":5,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":7,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"},{"skills":[{"skill":2,"profil":6,"id":30,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":6,"id":40,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":3,"profil":6,"id":47,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":5,"profil":6,"id":49,"createdAt":"2017-03-02T14:56:16.000Z","updatedAt":"2017-03-02T14:56:16.000Z"},{"skill":4,"profil":6,"id":53,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":6,"id":69,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":2,"profil":6,"id":75,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":5,"profil":6,"id":93,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"},{"skill":4,"profil":6,"id":100,"createdAt":"2017-03-02T14:56:18.000Z","updatedAt":"2017-03-02T14:56:18.000Z"}],"user":{"username":"user 6","firstname":"firstname 6","lastname":"lastname 6","email":"6@email.fr","enabled":true,"status":"user","id":7,"createdAt":"2017-03-02T14:48:35.000Z","updatedAt":"2017-03-02T14:48:35.000Z"},"sector":{"sector":"Hospitalier","id":5,"createdAt":"2017-03-02T14:48:30.000Z","updatedAt":"2017-03-02T14:48:30.000Z"},"work":{"work":"dev","id":5,"createdAt":"2017-03-02T14:48:44.000Z","updatedAt":"2017-03-02T14:48:44.000Z"},"id":6,"createdAt":"2017-03-02T14:48:58.000Z","updatedAt":"2017-03-02T14:48:58.000Z"}]';
		ldbjson = JSON.parse(ldbjson);
		console.log("JSON loaded");
	};*/
};

//What happens if window resized
$(window).resize(function () {
	ldbfunctions.autoreadjustinput();
});

//auto re-adjust width of 
ldbfunctions.autoreadjustinput = function () {
	temp = (document.getElementById("temporarycriterionwrapper").offsetWidth - document.getElementById("dropbtn").offsetWidth - 32);
	document.getElementById("autocomplete-ajax").style.width = temp + "px";	
	document.getElementById("autocomplete-ajax-x").style.width = temp + "px";	
};


//This prepares the array to be used for the lookup
ldbfunctions.ltm_loadsuggestionarray = function (list) {
	ldbfunctions.ltm_suggestionarray = $.map(list, function (value, key) {
		return { value: value, data: key }; 
	});
};

//call this function now!
ldbfunctions.ltm_loadsuggestionarray(window[ldbvars.ltm_defaultlist]);//loads skills as it is default


//This one updates the dropdown button
ldbfunctions.dropbtnchange = function (itemnumber) {
	ldbvars.ltm_criteria_current = itemnumber;
	dropbtn.innerHTML = ldbvars.ltm_criteria[itemnumber][0];//gets innerHTML for selected criteria
	dropbtn.style.backgroundColor= ldbvars.ltm_criteria[itemnumber][2];
	dropbtn.style.color= ldbvars.ltm_criteria[itemnumber][3];	
	ldbfunctions.ltm_loadsuggestionarray(window[ldbvars.ltm_criteria[itemnumber][1]]);//loads corresponding suggestion list
	$('#autocomplete-ajax-x').val("");//clear the text bar
	ldbfunctions.initializeautocomplete();//re-initialize the autocomplete as search criteria/category has changed
};

//This one loads the dropdown button
ldbfunctions.dropbtnload = function () {
	var temp_dropbtnload = "";
	for (i_dropbtnload = 0; i_dropbtnload < 3; i_dropbtnload++) {//XXX WHY SET NUMBER!!?? MUST BE FLEXIBLE
		temp_dropbtnload += '<a id="dropdownlevel'+i_dropbtnload+'"style="color:'+ldbvars.ltm_criteria[i_dropbtnload][3]+';background:'+ldbvars.ltm_criteria[i_dropbtnload][2]+'" href="#'+ i_dropbtnload +'" onclick="ldbfunctions.dropbtnchange('+ i_dropbtnload +')"">'+ldbvars.ltm_criteria[i_dropbtnload][0]+'</a>';
	}
	dropdowncontent.innerHTML = temp_dropbtnload;
};

//Prepare addbutton
ldbfunctions.initializetemporarycriterionwrapperbottom = function () {
	//define what happens when adding elements to selection
	window.temporarycriterionwrapperbottom.ldbaddtoselection = function () {ldbfunctions.ldbaddtoselection();};
};

//This one updates the temporary criterion
ldbfunctions.updatetemporarycriterion = function (suggestion) {
    ldbvars.ltm_suggestion_current = suggestion;
   	if (suggestion=="") {
		//There is no valid suggestion
        $('#temporarycriterionwrapperbottom').attr('class', "temporarycriterionwrapperbottominactive");
	} else {
		//There is a valid suggestion
		temporarycriterion.innerHTML = ldbvars.ltm_criteria[ldbvars.ltm_criteria_current][4] + suggestion;	
		temporarycriterion.style.backgroundColor = ldbvars.ltm_criteria[ldbvars.ltm_criteria_current][2];
		temporarycriterion.style.color = ldbvars.ltm_criteria[ldbvars.ltm_criteria_current][3];		
        $('#temporarycriterionwrapperbottom').attr('class', "temporarycriterionwrapperbottomactive");
	}
};

//This one initiates the autocomplete function based on the current search criteria / category
ldbfunctions.initializeautocomplete = function() {
	document.getElementById("autocomplete-ajax").value = "";
    ldbfunctions.updatetemporarycriterion("");//set criteria to zero
    $('#temporarycriterion').addClass('unvisible');//delete temporary criterion
    // Setup jQuery ajax mock:
    /*$.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = settings.data.query,
                queryLowerCase = query.toLowerCase(),
                re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
                suggestions = $.grep(ltm_suggestionarray, function (suggestionfield) {
                     // return suggestionfield.value.toLowerCase().indexOf(queryLowerCase) === 0;
                    return re.test(suggestionfield.value);
                }),
                response = {
                    query: query,
                    suggestions: suggestions
                };

            this.responseText = JSON.stringify(response);
        }
    });*/

    // Initialize ajax autocomplete:
    $('#autocomplete-ajax').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: ldbfunctions.ltm_suggestionarray,
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            ldbfunctions.updatetemporarycriterion(suggestion.value);
            $('#temporarycriterion').removeClass('unvisible');
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function() {
        }
    });
	
};

/* ADDING/REMOVING CRITERION TO SELECTION*/

//Prepare function for future clones of added criteria
ldbfunctions.removecriterion = function (id) {
	delete ldbcriteria[id];
	ldbfunctions.updateresults();//update the result area according to the search criteria
};

//What happens when temporarycriterionbottom clicked?
ldbfunctions.ldbaddtoselection = function () {
	if (temporarycriterion.attributes.class.value.search("unvisible")==-1) {//checks if the temp criterion is visible (=valid) or not
		if (ldbfunctions.ldbcriteriacheckifthere()==false) {//checks if criteria already used			
			console.log("new criterion ready, let's add it!'");
			console.log(ldbfunctions.ldbcriteriagetnextkeyposition() + " " + ldbfunctions.ldbcriteriagetnextidnumber());
			var nextidnb = ldbfunctions.ldbcriteriagetnextidnumber();
			ldbcriteria[nextidnb]={};//gets next available id in criteria array
			ldbcriteria[nextidnb].criteriatype = ldbvars.ltm_criteria_current;//adds id of criteria in criteria configuration array
			ldbcriteria[nextidnb].keyword = ldbvars.ltm_suggestion_current;//adds validated search term
			ldbcriteria[nextidnb].suggestionlist = ldbvars.ltm_criteria[ldbvars.ltm_criteria_current][1];//adds name of suggestion list
			// XXX there will also have to be added the name of the corresponding API command (e.g. "skills" for a criterion of type skills)
			
			temp_newid = "searchcriterion" + nextidnb;
			$('#temporarycriterion').clone().attr('id', temp_newid).appendTo('#selectioncriteria');
			$('#'+temp_newid).addClass("deleteable");//make the object "deleteable" from a css POV
			$('#'+temp_newid).data("ldbid",nextidnb);//attach id to object
			$('#'+temp_newid).on ("click", function () {
					ldbfunctions.removecriterion ($(this).data("ldbid"));
					this.remove();		
					});
			ldbfunctions.updateresults();//update the result area according to the search criteria
		} else {
			console.log("Criterion is already used - no criterion to be added");			
		}

	} else {
		console.log("no suggestion - no criterion to be added");
	}
};

//this one checks whether the current criterion is already used as search criterion
ldbfunctions.ldbcriteriacheckifthere = function () {
	var temp_count = 0 ;
	Object.keys(ldbcriteria).forEach( function (entry) {
		if (ldbcriteria[entry].criteriatype+ldbcriteria[entry].keyword+ldbcriteria[entry].suggestionlist == ldbvars.ltm_criteria_current+ldbvars.ltm_suggestion_current+ldbvars.ltm_criteria[ldbvars.ltm_criteria_current][1]) {temp_count++;};	
	});
	if( temp_count>0){
		return true;//true = yes it is already there
	} else {
		return false;//false = no it is not yet there			
	}
};

/* LDB CRITERIA HANDLER HERE */
//provides the number of criteria, hence the next position in the criteria queue
ldbfunctions.ldbcriteriagetnextkeyposition = function () {
	return Object.keys(ldbcriteria).length; //no need to "+1" as JS counts from 0 to X-1 (instead of 1 to X)	
};

//provides the next available id number in the criteria queue --> if 1,2,5,8 it will choose 9.
ldbfunctions.ldbcriteriagetnextidnumber = function () {
	if (ldbfunctions.ldbcriteriagetnextkeyposition()!=0){
		//the ldbcriteria list is not empty
		return Math.max.apply(null,Object.keys(ldbcriteria).map(Number)) + 1;		
	} else {
		//the ldbcriteria list IS empty
		return 0;		
	}
};

/* RESULT SHOW HERE */

//This one updates the result area, it is called when adding or deleting a criterion
ldbfunctions.updateresults = function () {

	//Prepare API command
	var url = 'profils';
	
	//Launch API command
	ldbfunctions.getjson(url);

};

ldbfunctions.getjson = function (getjsonurl) {

	$.ajax({
    type: 'GET',
    url: ldbvars.baseurl+getjsonurl,
    success: function(data) {
	    console.log("Got JSON!");
	    ldbjson = JSON.parse(data);
		ldbfunctions.loadresults();
    },
    error: function(data) {
	    console.log("Couldn't get JSON!");
    }, 
    dataType: 'text'
	});

/* THIS IS JUST PRETENDING TO GET THE JSON !!! 	
	ldbfunctions.loadjson();*/
};

ldbfunctions.loadresults = function () {
	var loadresultshtml = "";
	Object.keys(ldbjson).forEach( function (entry) {//build resultbox for every result
		loadresultshtml += '<div class="resultbox" id="resultbox'+entry+'">';
		loadresultshtml += '<img class="resultpicture" src="media/tete.jpg" alt="tete'+entry+'"></a>';
		loadresultshtml += '<div class="resultcaption">';
		loadresultshtml += ldbjson[entry].user.firstname+'<br/>';
		loadresultshtml += '</div></div>';
	});
	document.getElementById('resultwrapper').innerHTML = loadresultshtml;
		
/*
		
			Lucien
		</div>
	</div>								
*/
};

})();

/*
//A FAIRE:
- Production des profils : what body use? Canvas? sth else?

*/

