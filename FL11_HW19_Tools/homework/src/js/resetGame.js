export function resetGame(...elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].innerHTML = "";
  }
}
