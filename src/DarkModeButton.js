export default function DarkModeButton() {
    const theBody = document.getElementsByTagName('body')[0];
    function darkModeToggle() {
      if (theBody.classList.contains("darkmode")) {
        theBody.classList.remove("darkmode");
      } else {
        theBody.classList.add("darkmode");
      }
    }
    return (
      <label class="switch">
        <input type="checkbox" onClick={darkModeToggle}></input>
        <b>Toggle Dark Mode</b>
      </label>
    )
  }