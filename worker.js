'use strict';
var cucumber = process.platform === 'win32' ? 'cucumber.cmd' : 'cucumber';
var path = require('path')

module.exports = {
  init: function (config, context, done) {
    var config = config || {};
    
    var ret = {};
    ret.env= {MOCHA_COLORS: 2};

    if (config.use_custom) {
      ret.prepare =  cloneCucumberRepo(config, done)      
      ret.path = [path.join(context.dataDir, 'cucumber-sample')]
      ret.test =    shellCommand2('cd cucumber-sample\ncucumber')
      ret.cleanup= 'rm -rf cucumber-sample'  
    } else {
      ret.test =    shellCommand2('cucumber')
    }
    done(null, ret)
  }
};

function shellCommand2(command) {

  var normalizedCommand = command.replace(/#[^\n]*/g, '').trim();
  
  if (!normalizedCommand.length) {
    return;
  }
  
  return {
    command: 'sh',
    args: ['-x', '-c', normalizedCommand, '--color=always'],
    screen: command
  };
}

function cloneCucumberRepo(config, done) {
  
  if (!config.repository_cucumber){
    return done(null, true);
  }
  var command = "git clone " + config.repository_cucumber +" --recursive"
  var normalizedCommand = command.replace(/#[^\n]*/g, '').trim();
  
  if (!normalizedCommand.length) {
    return;
  }
  
  return {
    command: 'sh',
    args: ['-x', '-c', normalizedCommand]
  };
}

