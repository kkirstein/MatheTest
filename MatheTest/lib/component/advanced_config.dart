library math_test.config;

import 'package:angular/angular.dart';

class Operator {
  String label;
  bool selected;
}

class Position {
  String label;
  bool selected;
}

@Component(
    selector: 'advanced-config',
    templateUrl: 'advanced_config.html')
class AdvancedConfig {
  
  // component attributes
  @NgTwoWay('operators')
  List<String> get operators => _getOperators();
  
  @NgTwoWay('positions')
  List<int> get positions => _getPositions();
  
  // public properties
  List<Operator> allOperators;
  List<Position> allPositions;
  
  // constructor
  AdvancedConfig() {
    _defaultOperators();
    _defaultPositions();
  }
  
  // private stuff
  List<String> _getOperators() {
    // TODO
    return [];
  }
  
  List<int> _getPositions() {
    // TODO
    return [];
  }
  
  void _defaultOperators() {
    allOperators = new List(4);
    allOperators[0].label = '+';
    allOperators[0].selected = true;
    allOperators[1].label = '-';
    allOperators[1].selected = true;
    allOperators[2].label = '*';
    allOperators[2].selected = true;
    allOperators[3].label = '/';
    allOperators[3].selected = true;
  }
  
  void _defaultPositions() {
    allPositions = new List(3);
    allPositions[0].label = '1';
    allPositions[0].selected = true;
    allPositions[1].label = '2';
    allPositions[1].selected = true;
    allPositions[2].label = '3';
    allPositions[2].selected = true;    
  }
}