(function (window) {

	'use strict';

	var Collection = (function () {

		function Collection(params) {
			this.items = [];
		}

		Collection.prototype = {

			add: function (item) {
				this.items.push(item);
			},

			remove: function (item) {
				var indexOf = this.items.indexOf(item);
				if (indexOf !== -1) {
					this.items.splice(indexOf, 1);
				}
			},

			find: function (callback, action) {
				var matches = [];

				for (var i = 0 ; i < this.items.length ; i++) {
					var callbackReturn = callback(this.items[i], i);
					if (callbackReturn) {
						matches.push(this.items[i]);
					}
				}

				if (action) {
					action.call(this, matches);
				}

				return matches;
			}

		};

		return Collection;

	}());

	Collection.create = function (params) {
		return new Collection(params);
	}

	window.Collection = Collection;

}(window));