window.onload = () => {
    // copy below to add more pages
    // Only works if html file is online
    fetch('../web-components/navbar.html') // the page we want to use for our sidebar
    .then(data => {
      return data.text()
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data; // inserts to element id="navbar"
    })
    // copy end
}