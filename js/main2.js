//Angularjs based App Controller
var app = angular.module('myApp', []);
app.controller('myController',function ($scope) {
//Allocation of variables and arrays to store values
  $scope.newData = [];
  //default sortType
  $scope.sortType = 'none';
  //Array to temporarily store values while editing
  $scope.editData = [];
  $scope.editThing = false;
  $scope.sortReverse = false;
  //Search parameter variable initialization
  $scope.searchVal = '';
  $scope.checkUniqueness=false;
  $scope.checkUniqueness2=false;
  $scope.saveFlag=false;
  //JSON data structure to store values temporarily
  $scope.NOMArray =
  [
    { 'id': '1', 'name': 'Application Server', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'ip': '192.168.6.26' },
    { 'id': '2','name': 'VPN Server', 'description': 'Enables hosting and delivery of VPN services.', 'ip': '192.168.3.66' },
    { 'id': '3','name': 'FTP Server', 'description': 'Provides a secure file transfer between computers.', 'ip': '192.168.9.43' },
    { 'id': '4','name': 'Mail Server', 'description': 'Transfers and stores mails over corporate networks.', 'ip': '192.168.6.5' },
    { 'id': '5', 'name': 'Web Server', 'description': 'Maecenas ultrices, mauris ac congue lacinia.', 'ip': '192.163.2.13' },
    { 'id': '6','name': 'Proxy Server', 'description': 'Nunc id malesuada elit, eu vehicula libero..', 'ip': '192.168.255.255' },
    { 'id': '7','name': 'Mailing List Server', 'description': 'Etiam orci tellus, tempus non neque ac, mollis vestibulum eros..', 'ip': '255.250.205.63' },
    { 'id': '8','name': 'Telnet Server', 'description': 'Mauris tempus, quam at molestie mattis, justo erat sodales leo.', 'ip': '192.158.6.35' }
  ];

  /* Add Rows Section*/
  // Add input box values to the JSON data structure
  $scope.addRow = function() {
    $scope.NOMArray.push({ 'id': $scope.NOMArray.length+1, 'name':$scope.name, 'description': $scope.description, 'ip':$scope.ip });
    $scope.name='';
    $scope.description='';
    $scope.ip='';
  };

  //Toggle the removee multiple rows or single element option
  $scope.checkbo = true;
  $scope.checkbo2 = false;
  $scope.toggleCheckbo = function(){
    if($scope.checkbo === true){
      $scope.checkbo = false;
      $scope.checkbo2 = true;}
      else if($scope.checkbo === false){
        $scope.checkbo = true;
        $scope.checkbo2 = false;}
      };
      //Check unique values addition for error
      $scope.checkNameDuplicate=function(nameVal){
      $scope.errorUnique=false;
      $scope.NOMArray.forEach(nameVals => {
        if (nameVals.name===nameVal){
          $scope.errorUnique=true;
        }}
      )
      if ($scope.errorUnique===false){
      $scope.checkUniqueness=true;
      }
      };
      //Form validation function
      $scope.funcSave = function(){
        if ($scope.checkUniqueness===false)
        {
          alert("Error: Check name availibility first");
        }
        else{
          $scope.checkUniqueness=false;
        if($scope.AddRowForm.$valid) {
          $scope.addRow();
        }
        else
        {
          alert("Error: Form is invalid.");
        }
      }
      };
      //Check unique values addition for error
      $scope.checkNameDuplicate2=function(nameVal2){
      $scope.errorUnique2=false;
      var startVal=0;
      console.log($scope.errorUnique2);
      $scope.NOMArray.forEach(nameVals2 => {
        console.log(nameVals2.name);
           console.log(nameVal2);
      if (nameVals2.name===nameVal2){
        if (startVal===0){
          $scope.errorUnique2=false;
          startVal=1;
        }
        else {
          $scope.errorUnique2=true;
        }
      }}
      )
      console.log($scope.errorUnique2);
      if ($scope.errorUnique2===false){
      $scope.checkUniqueness2=true;
      alert("Available Name");
      }
      };

      //Form validation function for editing
      $scope.funcSave2 = function()
      {
        if ($scope.checkUniqueness2===false)
        {
          alert("Error: Check name availibility first");
        }
        else{
        $scope.checkUniqueness2=false;
        if($scope.AddRowForm2.$valid) {
          //alert("Form is valid.");
          saveFlag=true;
          $scope.editObject($scope.fieldVal);
        }
        else
        {
          alert("Form data is invalid.");
        }}
      };

      /* Edit Table Section*/
      // Edit table values
      $scope.editObject = function(field) {
        $scope.fieldVal=field;
        $scope.editThing = $scope.NOMArray.indexOf(field);
        $scope.newData = angular.copy(field);
      };
      //Save the updated data
      $scope.editObjectSave = function() {
        console.log("saveFlag:",saveFlag);
        if ($scope.saveFlag===true){
          if ($scope.editThing !== false) {
            //console.log(editThing);
            $scope.NOMArray[$scope.editThing] = $scope.newData;
            $scope.editMode=false;
            $scope.saveFlag=false;
          }}
          $scope.editThing = false;
      };
      //Discard the changes made
      $scope.editObjectCancel = function(index) {
        if ($scope.editThing !== false) {
          $scope.NOMArray[$scope.editThing] = $scope.newData;
          $scope.editThing = false;
        }
      };

      /* Remove Rows Section*/
      //Remove a row from the table.
      $scope.removeRow = function (idnx) {
        $scope.NOMArray.splice(idnx-1, 1);
      };
      //Remove checked rows from table.
      $scope.removeRows = function () {
        var arrNOM = [];
        angular.forEach($scope.NOMArray, function (value) {
          if (!value.Remove) {
            arrNOM.push(value);
          }
        });
        $scope.NOMArray = arrNOM;
      };



});
