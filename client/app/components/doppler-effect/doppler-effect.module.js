import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import dopplerEffectComponent from './doppler-effect.component';

let dopplerEffectModule = angular.module('dopplerEffect', [
  uiRouter,
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dopplerEffect', {
      url: '/',
      component: 'dopplerEffect'
    })
})
// .directive('decimal', ($timeout) => {
//   'ngInject';
  
//   return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: (scope, element, attrs, ngModelCtrl) => {
//         $timeout(() => {
//           console.log('$modelValue = ', ngModelCtrl.$modelValue.toFixed(1));
//           ngModelCtrl.$render();
//         }, 0)
//         // const decimal = attrs.decimal;
//         // $timeout(() => {
//         //   let val = parseFloat(ngModelCtrl.$modelValue);
//         //   console.log('val = ', val)
//         //   console.log('decimal = ', decimal)
//         // })
          
//         const numbersOnly = RegExp(/^-?\d*\.?\d+$/);
//         const exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

//         element[0].addEventListener('keydown', (event) => {
//             console.log(event)
//             console.log('numbersOnly.test', numbersOnly.test(event.key))
//             console.log('/^-?\d*\.?\d+$/.test(event.key) = ', /^-?\d*\.?\d+$/.test(event.key))
//             // prevent event if input is not a number
//             if (!exclude.test(event.key) && !/^-?\d*\.?\d+$/.test(event.key)) {
//                 console.log('nononono')
//                 event.preventDefault();
//             } else {
//               console.log('ngModelCtrl = ', ngModelCtrl)
//               $timeout(() => {
//                 const val = (isNaN(ngModelCtrl.$modelValue)) ? 0 : parseInt(ngModelCtrl.$modelValue);
//                 console.log('val = ', val)
//                 ngModelCtrl.$setViewValue(val.toFixed(1));
//                 ngModelCtrl.$render();
//               }, 0)
//             }
//         });
//     }
//   }
// })
.component('dopplerEffect', dopplerEffectComponent) 
.name;



export default dopplerEffectModule;
