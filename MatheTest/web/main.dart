library math_test;

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';

import 'package:math_test/math_task.dart';
import 'package:math_test/component/advanced_config.dart';

part 'controller.dart';


///
/// top-level module definition
/// 
class MathTestModule extends Module {
  MathTestModule() {
    bind(MathTestGuiController);
    bind(AdvancedConfig);
  }
}

/// 
/// main entry point
/// 
void main() {
  var module = new Module()..bind(MathTestGuiController);
  
  applicationFactory()
    .addModule(new MathTestModule())
//    .rootContextType(MathTestGuiController)
    .run();
}
