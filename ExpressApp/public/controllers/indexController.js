var IndexViewModel = function () {
	
	//Define an angular module for our app
	var app = angular.module('myApp', []);
	
	app.controller('tasksController', function ($scope, $http) {
		
		$scope.tarefa = {
			id: "",
			task: "",
			status: ""
		};
	    $scope.tasks = [
			{
				'id': '1',
				'task': 'Tarefa 4',
				'status': true
			},
			{
				'id': '2',
				'task': 'Tarefa 3',
				'status': true
			},
			{
				'id': '3',
				'task': 'Tarefa 6',
				'status': false
			}
		];
		
		function getTask() {
            /*
            $http.get("ajax/getTask.php").success(function (data) {
                $scope.tasks = data;
            });
            */
		};
		
		getTask(); // Load all available tasks
		
		$scope.addTask = function (task) {
			/*
            $http.get("ajax/addTask.php?task="+task).success(function(data){
                getTask();
                $scope.taskInput = "";
            });
            */
			console.log('$scope.addTask');
            if (task != "") {
				var id = 0;
				if ($scope.tasks != null && $scope.tasks.length > 0) {
					id = $scope.tasks[0]["id"];
					for (var i = 1; i < $scope.tasks.length; i++) {
						id = Math.max(id, $scope.tasks[i]["id"]);
					}
					id++;
				}
				$scope.tasks.push({ id: id, task: task, status: false });
				delete ($scope.tarefa);
			}
		};
		$scope.deleteTask = function (item) {
			/*
            if(confirm("Are you sure to delete this line?")){
                $http.get("ajax/deleteTask.php?taskid="+task).success(function(data){
                    getTask();
                });
            }
            */
            $scope.tasks.splice($scope.tasks.indexOf(item), 1);
		};
		
		$scope.toggleStatus = function (item, status, task) {
			if (status == '2') { status = '0'; } else { status = '2'; }
			$http.get("ajax/updateTask.php?taskid=" + item + "&status=" + status).success(function (data) {
				getTask();
			});
		};

	});

}