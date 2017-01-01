jQuery.sap.require("sap.ui.TaxiSystem.util.Formatter");

sap.ui.controller("sap.ui.TaxiSystem.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	}
	
});
