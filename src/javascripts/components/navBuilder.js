const navBuilder = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#navigation').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id="pinterest-wordmark" href="#">Practically Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" id="boards-link" href="#">Boards<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pins-link" href="#">Pins</a>
      </li>
    </ul>
    <form class="d-flex">
        <input id="search" class="form-control me-2" type="search" placeholder="Search Pins" aria-label="Search">
        <button class="btn btn-outline-danger search-button" type="submit">Search</button>
    </form>
    <div id="logout-button"></div>
  </div>
</nav>`;
};

const loggedOutNav = () => {
  document.querySelector('#login-form-container').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id="pinterest-wordmark" href="#">Practically Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <div id="login-button"></div>
  </div>
</nav>`;
  document.querySelector('#app').innerHTML = '<h1>Please log in</h1>';
};

export { navBuilder, loggedOutNav };
