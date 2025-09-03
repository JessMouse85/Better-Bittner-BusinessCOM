document.getElementById('newsBumperClose').addEventListener('click', function () {
  document.getElementById('quickHelpBar').style.visibility = 'hidden';
  document.getElementById('quickHelpBar').style.position = 'absolute';
});

Array.from(document.getElementsByClassName('serviceListing')).forEach(function (element) {
  element.addEventListener('click', function () {
    window.location.href = './ITConsulting.html';
  });
});