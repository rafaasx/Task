var HomeViewModel = function () {

    //Define an angular module for our app
    var app = angular.module('myApp', []);

    app.controller('tasksController', function ($scope, $http) {

        $scope.tarefa = {
            ID: "",
            TASK: "",
            STATUS: ""
        }

        $scope.tasks = [
                        {
                            'ID': '1',
                            'TASK': 'Tarefa 1',
                            'STATUS': true
                        },
                        {
                            'ID': '2',
                            'TASK': 'Tarefa 2',
                            'STATUS': true
                        },
                        {
                            'ID': '3',
                            'TASK': 'Tarefa 4',
                            'STATUS': false
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

        $scope.addTask = function (TASK) {
            /*
            $http.get("ajax/addTask.php?task="+task).success(function(data){
                getTask();
                $scope.taskInput = "";
            });
            */
            var id = 0;
            if ($scope.tasks != null && $scope.tasks.length > 0) {
                id = $scope.tasks[0]["ID"];
                for (var i = 1; i < $scope.tasks.length; i++) {
                    id = Math.max(id, $scope.tasks[i]["ID"])
                }
                id++;
            }
            $scope.tasks.push({ ID: id, TASK: TASK, STATUS: false });
            delete ($scope.tarefa);
        };
        $scope.deleteTask = function (item) {
            /*
            if(confirm("Are you sure to delete this line?")){
                $http.get("ajax/deleteTask.php?taskID="+task).success(function(data){
                    getTask();
                });
            }
            */
            $scope.tasks.splice($scope.tasks.indexOf(item), 1);
        };

        $scope.toggleStatus = function (item, status, task) {
            if (status == '2') { status = '0'; } else { status = '2'; }
            $http.get("ajax/updateTask.php?taskID=" + item + "&status=" + status).success(function (data) {
                getTask();
            });
        };

    });

}