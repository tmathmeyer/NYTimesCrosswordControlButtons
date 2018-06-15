newCall = function(Cls) {
    return new (Function.prototype.bind.apply(Cls, arguments));
}

getDateOfCurrentPuzzle = function() {
  return newCall(Date, window.location.href.split('/').slice(-3))
}

setUrlByDirection = function(cpd, direction) {
  cpd.setDate(cpd.getDate() + direction)
  url = window.location.href.split('/').slice(0, -3)
  url.push(cpd.getFullYear(), cpd.getMonth()+1, cpd.getDate())
  window.location.href = url.join('/')
}

createNextButton = function() {
  menu = document.getElementsByClassName('Toolbar-tools--2qUqg')[0];
  next_button = menu.children[2].cloneNode(true);
  next_button.children[0].innerText = 'Next';
  next_button.children[0].onclick = function() {
    setUrlByDirection(getDateOfCurrentPuzzle(), 1)
  }
  prev_button = menu.children[2].cloneNode(true);
  prev_button.children[0].innerText = 'Previous';
  prev_button.children[0].onclick = function() {
    setUrlByDirection(getDateOfCurrentPuzzle(), -1)
  }

  menu.append(prev_button)
  menu.append(next_button)
}

createNextButton();