sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForProductoCreate: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"PrecioUnidad": 0
			};
		},
		getDefaultValuesForProductoDetail: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"PrecioUnidad": 0
			};
		},
		getDefaultValuesForSalesOrderCreate: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"___FK_99bc6a84410e9fc31a2ba70f_00013": "",
				"___FK_85217062c6ffb08d1a2c4c4e_00003": ""
			};
		}
	};
});
