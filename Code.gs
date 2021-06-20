function myFunction() {
  
  // BLUEPRINTS
  // fetches individual lesson plan docs for processing
  var module1Blueprint = DocumentApp.openById('1IB7zWkk5xEa436DjyK_Kk8Zius5bNgupBGSXy5mM8xA').getBody();
//  var module2Blueprint = DocumentApp.openById('1gWe8Zz9G_-7HsIQf-iWlSt2SfCMMsqjgwnQ80VpFS9Q').getBody();
//  var module3Blueprint = DocumentApp.openById('18s4Ub2zkcviqgsuZqRXpxHVFHI2cW8rMIXv7gQ-Jvk8').getBody();
//  var module4Blueprint = DocumentApp.openById('1XUaRqybvAkM6qh-VJIEoSuYoZYl6oXLskvGxmCMFmDw').getBody();
//  var module5Blueprint = DocumentApp.openById('192HizNZ4d4IOhs0AWOw4tXEx5D2s6Pu_EaYOM0hOq-w').getBody();
  
  // CONTAINERS
  // fetches blank google doc as repo for compiled html
  var module1Container = DocumentApp.openById('1JKzydVJPMzZy_ZCuJph9Za1PlIR7CqnMPq62Uezz5Gg').getBody();
//  var module2Container = DocumentApp.openById('1bBummJEG6xnlgHBbdleQCuc80_JXP1hSWnN-khxcfyM').getBody();
//  var module3Container = DocumentApp.openById('1NaZ_ISWiQABy-rirDNd-U89WZVcHT5lGfuMhh9LsGTI').getBody();
//  var module4Container = DocumentApp.openById('19hiP9SHU_9tlrPo9DtMg6bpUTJVBuu4MQbwggee7V6E').getBody();
//  var module5Container = DocumentApp.openById('1L5Xnm1Hh4iIYfflp5sCTBcayJiSiVph9qpfCE55dnA4').getBody();
  
  // BUILD
  // converts lesson plan docs into html & dumps to container docs
  onlineCoursework(module1Blueprint, module1Container);
//  onlineCoursework(module2Blueprint, module2Container);
//  onlineCoursework(module3Blueprint, module3Container);
//  onlineCoursework(module4Blueprint, module4Container);
//  fosterLive_plus_immersion(module5Blueprint, module5Container);
  
}
