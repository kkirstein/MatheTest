library math_test;

import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';

import 'math_task.dart';

/**
 * GUI controller for MatheTest app
 */
@Controller(
    selector: '[mathtest-gui]',
    publishAs: 'ctrl')
class MathTestGuiController {
  
  // public properties
  int numTasks;
  bool isRunning;
  String successMsg;
  List<MathTask> tasks;
  
  // private properties
  int _correctTasks;
  
  // constructor
  MathTestGuiController() {
    _defaultData();
  }
  
  // public methods
  void startTest() {
    isRunning = true;
    
    tasks.clear();
    
    // generate tasks
    for (var i=0; i<numTasks; i++) {
      tasks.add(new MathTask(['+', '-'], 100));
    }
  }
  
  void stopTest() {
    isRunning = false;
    _correctTasks = 0;
    
    for (var i=0; i<numTasks; i++) {
      if (tasks[i].checkResult()) {
        _correctTasks++;
      }
    }
    
    _successMsg();
  }
  
  // private mathods
  void _defaultData() {
    isRunning = false;
    numTasks = 10;
    tasks = [];
    successMsg = '';
    _correctTasks = 0;
  }
  
  void _successMsg() {
    var ratio = _correctTasks/numTasks * 100;
    if (ratio < 50) {
      successMsg = "Das war wohl nichts! Nur ${_correctTasks} Aufgaben von ${numTasks} sind richtig. Am besten gleich noch mal versuchen...";
    } else if (ratio < 75) {
      successMsg = "Gar nicht so schlecht: ${_correctTasks} von ${numTasks} Aufgaben sind richtig.";
    } else if (_correctTasks == numTasks) {
      successMsg = "PERFECT! Alles richtig!";
    } else {
      successMsg = "Sehr gut!! ${_correctTasks} Aufgaben von ${numTasks} sind richtig!";
    }
  }
}


class MathTestModule extends Module {
  // constructor
  MathTestModule() {
    type(MathTestGuiController);
  }
}

void main() {
  applicationFactory()
    .addModule(new MathTestModule())
    .run();
}
