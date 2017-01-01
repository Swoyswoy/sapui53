sap.ui.jsview("sap.ui.TaxiSystem.view.App", {

	getControllerName: function () {
		return "sap.ui.TaxiSystem.view.App";
	},
	
	createContent: function (oController) {
		
		this.setDisplayBlock(true);
		
		this.app = new sap.m.SplitApp();

		var master = sap.ui.xmlview("Master", "sap.ui.TaxiSystem.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		var empty = sap.ui.xmlview("Empty", "sap.ui.TaxiSystem.view.Empty");
		this.app.addPage(empty, false);
		
		return this.app;
	}
});
