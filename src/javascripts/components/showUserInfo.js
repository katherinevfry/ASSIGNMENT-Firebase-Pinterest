const showUserInfo = (user) => {
  document.querySelector('#user-info').innerHTML = `
  <div id="user-area">
    <img id="user-image" src="${user.photoURL}">
    <h3 id="user-name">${user.displayName}</h3>
  </div>`;
};

export default showUserInfo;
