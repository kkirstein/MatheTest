library math_test;

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';

import 'math_task.dart';

/**
 * GUI controller for MatheTest app
 */
@Injectable()
class MathTestGuiController {
  
  // const properties
  static const UPPER_LIMIT = 500;
//  static final OPERANDS = ['+', '-', '*', '/'];
  static final OPERANDS = ['+', '-'];
  static final POSITIONS = [3];
  
  // public properties
  int numTasks;
  bool isRunning;
  String successMsg;
  List<MathTask> tasks;
  int elapsed;

  // private properties
  int _correctTasks;
  Timer _timer;
  final Duration _tick = new Duration(seconds: 1);
  
  
  // constructor
  MathTestGuiController() {
    _defaultData();
  }
  
  // public methods
  void startTest() {
    isRunning = true;
    
    tasks.clear();
    elapsed = 0;
    
    // generate tasks
    for (var i=0; i<numTasks; i++) {
      tasks.add(new MathTask(OPERANDS, UPPER_LIMIT, POSITIONS));
    }

    // start timer
    _timer = new Timer.periodic(_tick, (_) {elapsed++;});
  }
  
  void stopTest() {
    _timer.cancel();
    isRunning = false;
    _correctTasks = 0;
    
    for (var i=0; i<numTasks; i++) {
      if (tasks[i].checkResult()) {
        _correctTasks++;
      }
    }
    
    _successMsg();
  }

  String formatElapsedTime() => "${elapsed~/60} Minuten und ${elapsed%60} Sekunden";
  
  void checkArgument() {
    if (numTasks < 1) numTasks = 1;
    if (numTasks > 25) numTasks = 25;
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
      successMsg = "Das war wohl nichts! Nur ${_correctTasks} Aufgaben von ${numTasks} sind richtig in ${formatElapsedTime()}. Am besten gleich noch mal versuchen...";
    } else if (ratio < 75) {
      successMsg = "Gar nicht so schlecht: Du hast ${_correctTasks} von ${numTasks} Aufgaben in ${formatElapsedTime()} richtig gelöst.";
    } else if (_correctTasks == numTasks) {
      successMsg = "PERFECT! Alles richtig in ${formatElapsedTime()} Sekunden!";
    } else {
      successMsg = "Sehr gut!! ${_correctTasks} Aufgaben von ${numTasks} sind richtig gelöst in ${formatElapsedTime()} Sekunden!";
    }
  }
  
}


/// 
/// main entry point
/// 
void main() {
  var module = new Module()..bind(MathTestGuiController);
  
  applicationFactory()
    .addModule(module)
    .rootContextType(MathTestGuiController)
    .run();
}
