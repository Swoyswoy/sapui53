sap.ui.controller("sap.ui.TaxiSystem.view.App", {
	
	to : function (pageId, context) {
		
		var app = this.getView().app;
		
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "sap.ui.TaxiSystem.view." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		app.to(pageId);
		
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
	}
});
