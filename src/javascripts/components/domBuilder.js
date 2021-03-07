const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="display">
      <div id="header"></div>
      <div id="add-button"></div>
      <div id="form-container"></div>
      <div id="display-area" class="d-flex flex-row flex-wrap align-items-center"></div>
    </div>
  </div>`;
};

export default domBuilder;
