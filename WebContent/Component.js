jQuery.sap.declare("sap.ui.TaxiSystem.Component");

sap.ui.core.UIComponent.extend("sap.ui.TaxiSystem.Component", {

	createContent : function() {

		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.TaxiSystem.view.App",
			type : "JS",
			viewData : { component : this }
		});

		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : sap.ui.Device.system.phone,
			listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
			listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		return oView;
	}
});
