@Library ('folio_jenkins_shared_libs@folio-3226-jenkinsfile-defaultbranch-2') _

buildNPM {
  publishModDescriptor = 'yes'
  runLint = 'yes'
  runSonarqube = true
  runTest = 'yes'
  runScripts = [
   ['formatjs-compile': ''],
   ['test': '--ci'],
  ]
}
