var app = angular.module('AngularToDo', ['LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
		.setPrefix('AngularMultipage-pate0359')
	//.setStorageType('sessionStorage')
	.setNotify(true, true)
});

//Tab controller
app.controller("PanelController", function () {

	this.tab = 1;

	this.selectTab = function (setTab) {
		this.tab = setTab;
	};

	this.isSelected = function (checkTab) {
		return this.tab === checkTab;
	}
});

//List 1
app.controller('List1Controller', function ($scope, localStorageService) {

	if (localStorageService.isSupported) {
		
		this.allItems = localStorageService.get('allItems');
		if (!this.allItems) //Initialize local storage if NOT
		{
			//List1
			var arrayList1 = [{
					'title': 'item 1'
						},
				{
					'title': 'item 2'
						},
				{
					'title': 'item 3'
						}];
			//List2
			var arrayList2 = [{
					'title': 'item 1'
						},
				{
					'title': 'item 2'
						},
				{
					'title': 'item 3'
						}];

			//List3
			var arrayList3 = [{
					'title': 'item 1'
						},
				{
					'title': 'item 2'
						},
				{
					'title': 'item 3'
						}];

			 this.allItems = {
				'list1': arrayList1,
				'list2': arrayList2,
				'list3': arrayList3
			}

			//Set local storage
			localStorageService.set("allItems", this.allItems);
		}

		this.list1_Items = this.allItems.list1;

	} else {

		alert("Local Storage not supported");
	}

	this.addValue = function () {

		var item = '{"title":"' + this.newValue + '"}';
		//alert(item);
		var obj = JSON.parse(item);
		this.list1_Items.push(obj);
		this.newValue = "";
		//Set local storage
		this.allItems.list1=this.list1_Items;
		
		localStorageService.set("allItems", this.allItems);
	}

	this.removeValue = function ($index, item) {
		//alert("remove");
		this.list1_Items.splice($index, 1);

		//Set local storage
		this.allItems.list1=this.list1_Items;
		localStorageService.set("allItems", this.allItems);
	}
});

//List 2
app.controller('List2Controller', function ($scope, localStorageService) {

	if (localStorageService.isSupported) {
		
		this.allItems = localStorageService.get('allItems');
		this.list2_Items = this.allItems.list2;
		} else {

		alert("Local Storage not supported");
		}

	this.addValue = function () {

		var item = '{"title":"' + this.newValue + '"}';
		//alert(item);
		var obj = JSON.parse(item);
		this.list2_Items.push(obj);
		this.newValue = "";
		//Set local storage
		this.allItems.list2=this.list2_Items;
		
		localStorageService.set("allItems", this.allItems);
	}

	this.removeValue = function ($index, item) {
		//alert("remove");
		this.list2_Items.splice($index, 1);

		//Set local storage
		this.allItems.list2=this.list2_Items;
		localStorageService.set("allItems", this.allItems);
	}
});

//List 3
app.controller('List3Controller', function ($scope, localStorageService) {

	if (localStorageService.isSupported) {
		
		this.allItems = localStorageService.get('allItems');
		this.list3_Items = this.allItems.list3;
		} else {

		alert("Local Storage not supported");
		}

	this.addValue = function () {

		var item = '{"title":"' + this.newValue + '"}';
		//alert(item);
		var obj = JSON.parse(item);
		this.list3_Items.push(obj);
		this.newValue = "";
		//Set local storage
		this.allItems.list3=this.list3_Items;
		
		localStorageService.set("allItems", this.allItems);
	}

	this.removeValue = function ($index, item) {
		//alert("remove");
		this.list3_Items.splice($index, 1);

		//Set local storage
		this.allItems.list3=this.list3_Items;
		localStorageService.set("allItems", this.allItems);
	}
});