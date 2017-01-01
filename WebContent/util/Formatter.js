jQuery.sap.declare("sap.ui.TaxiSystem.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.TaxiSystem.util.Formatter = {
	date : function (value) {
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MMM dd, yyyy"}); 
			return oDateFormat.format(new Date(value));
		} else {
			return value;
		}
	}

};
