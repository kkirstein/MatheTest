library math_test;

import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';

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
  
  // constructor
  MathTestGuiController() {
    _defaultData();
  }
  
  // public methods
  void startTest() {
    isRunning = true;
  }
  
  void stopTest() {
    isRunning = false;
  }
  
  // private mathods
  void _defaultData() {
    isRunning = false;
    numTasks = 10;
  }
}


class MathTestModule extends Module {
  // constructor
  MandelbrotModule() {
    type(MathTestGuiController);
  }
}

void main() {
  applicationFactory()
    .addModule(new MathTestModule())
    .run();
}
