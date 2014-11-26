library math_test.config;

import 'package:angular/angular.dart';


@Component(
    selector: 'advanced-config',
    templateUrl: 'advanced_config.html')
class AdvancedConfig {
  
  // component attributes
  @NgTwoWay('operators')
  List<String> get operators => _getOperators();
  set operators(List<String> value) {
    for (var op in value) {
      allOperators[op] = true;
    }
  }
  
  @NgTwoWay('positions')
  List<int> get positions => _getPositions();
  set positions(List<int> value) {
    for (var pos in value) {
      allPositions[pos.toString()] = true;
    }
  }
  
  // public properties
  Map<String, bool> allOperators;
  Map<String, bool> allPositions;
  
  // constructor
  AdvancedConfig() {
//    _defaultOperators();
//    _defaultPositions();
  }
  
  // private stuff
  List<String> _getOperators() {
    allOperators.keys.where((k) => allOperators[k]);
    return [];
  }
  
  List<int> _getPositions() {
    allPositions.keys.where((k) => allPositions[k]);
    return [];
  }
  
  void _defaultOperators() {
    allOperators = new Map();
    allOperators['+'] = true;
    allOperators['-'] = true;
    allOperators['*'] = true;
    allOperators['/'] = true;
  }
  
  void _defaultPositions() {
    allPositions = new Map();
    allPositions['1'] = true;
    allPositions['2'] = true;
    allPositions['3'] = true;
  }
}