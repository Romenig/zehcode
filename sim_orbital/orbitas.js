angular.module('orbitasApp', []).
	controller('OrbitasController', 
		['$scope', function($scope) {
			$scope.corpos = new Array();
			$scope.nCorpos = 0;
			$scope.adicionarCorpo = function(){
				$scope.corpos.push({
					nome: "Planeta "+$scope.nCorpos,
					massa: 100,
					posicao: {x: 0, y:0},
					cor: '#dddddd',
					velocidade: 40,
					vetor: { cauda: {x: 0, y: 0}, ponta: {x: 0, y: 40}}
				});
				window.globais.adicionarCorpo($scope.corpos[$scope.corpos.length - 1]);
				$scope.nCorpos++;
			}

			$scope.removerCorpo = function(corpo){
				window.globais.removerCorpo($scope.corpos.indexOf(corpo));
				$scope.corpos.splice($scope.corpos.indexOf(corpo),1);
			}
		}
	]);