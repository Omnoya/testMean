function mainController($scope){
    $scope.maVariable = 'Bonjour';

    $scope.maFonction  = function(){
        console.log($scope.maVariable);
    };

    $scope.message = '';

    $scope.contacts = [];

    $scope.enregistrer = function() {
        if (!$scope.nom || !$scope.numTel) {
            $scope.message = 'Veuillez saisir les champs !'
        } else {

        console.log($scope.nom, $scope.numTel);
        $scope.contacts.push({
            nom: $scope.nom,
            tel: $scope.numTel
        });
        $scope.nom = '';
        $scope.numTel = '';
        $scope.message = '';
        }
    };

    $scope.supprimer = function($index) {
        $scope.contacts.splice($index, 1);

    }

}

