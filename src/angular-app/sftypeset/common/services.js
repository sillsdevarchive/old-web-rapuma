'use strict';

/* SF Typeset Services */

angular.module('sftypeset.services', [])
	.service('componentService', ['jsonRpc', function(jsonRpc) {
		jsonRpc.connect('/api/sf'); // Note this doesn't actually 'connect', it simply sets the connection url.
		this.read = function(projectId, componentId, callback) {
			jsonRpc.call('component_read', [projectId, componentId], callback);
		};
		this.update = function(projectId, model, callback) {
			jsonRpc.call('component_update', [projectId, model], callback);
		};
		this.remove = function(projectId, componentIds, callback) {
			jsonRpc.call('component_delete', [projectId, componentIds], callback);
		};
		this.list = function(projectId, callback) {
			jsonRpc.call('component_list_dto', [projectId], callback);
		};
		this.settings_dto = function(projectId, componentId, callback) {
			jsonRpc.call('component_settings_dto', [projectId, componentId], callback);
		};
	}])
	;