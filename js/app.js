(function(){
  renderPage();
  renderDogs();
  function renderPage() {
    var template = $('#index-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled(window.language);

    $('#main').html(rendered);

    $('#languageSwitch').click(function(){
      DogPack.switchLanguage();
    })
  }

  function renderDogs() {
    var template = $('#dogs-template').html(),
      compiled = Handlebars.compile(template),
      rendered = compiled({dogs: DogPack.dogs, language: window.language});
    $('#theDogs').html(rendered);
    attachDogsButton();
  }

  function attachDogsButton() {
    $('.dog-button').click(function(){
      var id = $(this).closest('.dog-card').data('dog-id')
      DogPack.chooseDog(id);
      renderDogs()
    })

    $('.not-dog-button').click(function(){
      var id = $(this).closest('.dog-card').data('dog-id')
      DogPack.chooseNotDog(id);
      renderDogs()
    })
  }
})();