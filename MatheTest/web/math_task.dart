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
  int position;
  bool correct;

  // private properties
  static Random _rand = new Random();
  int _upperLimit;

  // constructor
  MathTask(List<String> ops, [int maxValue, List<int> trialPosition]) {

    trial = "";
    correct = true;

    // randomly select operator from given list
    if (ops.length == 1) {
      operator = ops.first;
    } else {
      var idx = _rand.nextInt(ops.length);
      operator = ops[idx];
    }

    // check for optional args
    if (maxValue != null) {
      _upperLimit = maxValue;
    } else {
      _upperLimit = 100;
    }
    if (trialPosition != null) {
      // TODO: boundary check
      var idx = _rand.nextInt(trialPosition.length);
      position = trialPosition[idx];
    } else {
      position = 3;
    }


    switch (operator) {
      case '+':
        result = _getNumber(1, _upperLimit);
        operand_1 = result - _getNumber(0, result);
        operand_2 = result - operand_1;
        break;
      case '-':
        operand_1 = _getNumber(1, _upperLimit);
        operand_2 = operand_1 - _getNumber(0, operand_1);
        result = operand_1 - operand_2;
        break;
      case '*':
        var operand_limit = sqrt(_upperLimit).ceil();
        operand_1 = _getNumber(1, operand_limit);
        operand_2 = _getNumber(1, operand_limit);
        result = operand_1 * operand_2;
        break;
      case '/':
        var operand_limit = sqrt(_upperLimit).ceil();
        operand_2 = _getNumber(1, operand_limit);
        result = _getNumber(1, operand_limit);
        operand_1 = result * operand_2;
        break;        
      default:
        throw "Unsuported operator $operator";
    }
  }

  // check trial
  bool checkResult() {
    try {
      var trialNum = int.parse(trial);
      
      // select expection value
      var expected;
      switch (position) {
        case 1:
          expected = operand_1;
          break;
        case 2:
          expected = operand_2;
          break;
        case 3:
          expected = result;
          break;
        default:
          throw "Illegal trial position $position";
      }
      
      if (trialNum == expected) correct = true; else correct = false;
    } on FormatException {
      correct = false;
    }

    return correct;
  }

  // private methods
  int _getNumber(int min, int max) {
    return (min + _rand.nextInt(max - min));
  }
}
