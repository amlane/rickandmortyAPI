var app = Elm.Main.init({
    node: document.getElementById('elm')
  });
  app.ports.cache.subscribe(function(data) {
    localStorage.setItem('cache', JSON.stringify(data));
  });