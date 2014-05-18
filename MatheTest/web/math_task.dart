// math_task.dart

import 'dart:math';

/**
 * Single task for math test app
 */
class MathTask {
  
  // public properties
  int operand_1;
  int operand_2;
  int result;
  String operator;
  String trial;
  bool correct;
  
  // private properties
  static Random _rand = new Random();
  int _upperLimit;
  
  // constructor
  // TODO: hand-over list of allowed operators
  MathTask(String op, [int maxValue]) {
    
    trial = "";
    correct = true;
    
    // TODO: randomly select operator from given list
    operator = op;
    if (maxValue != null) { _upperLimit = maxValue; }
    else { _upperLimit = 100; }
    
    switch (operator) {
      case '+':
        result = _getNumber(1, _upperLimit);
        operand_1 = result - _getNumber(0, result);
        operand_2 = result - operand_1;
        break;
      case '-':
        operand_1 = _getNumber(1, _upperLimit);
        operand_2 = operand_2 - _getNumber(0, operand_1);
        result = operand_1 - operand_2;
        break;
      default:
        throw "Unsuported operator $operator";
    }
  }
  
  // check trial
  bool checkResult() {
    try {
      var trialNum = int.parse(trial);
      if (trialNum == result) correct = true;
      else correct = false;
    } on FormatException {
      correct = false;
    }
    
    return correct;
  }
  
  // private methods
  int _getNumber(int min, int max) {
    return (min + _rand.nextInt(max-min));
  }
}