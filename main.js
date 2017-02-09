var state = {
  currentSection : "politics",
  submitted : false,
  rawData: [],
  currentURL: function(){
    return "https://api.nytimes.com/svc/topstories/v2/" + this.currentSection + ".json?api-key=3047b4f43aa340b1a9976a2cefadbf7f";
  }
}


function getData(callback){
  $.ajax({
    url: state.currentURL(),
    method: 'GET',
    success: callback
  });
}


function addToState(data){
  state.rawData = data.results;
}


function display(state) {
   $('.listOfArticles').empty();
    state.rawData.forEach(function(article) {
        var list = `<div><b>${article.title}</b><br>${article.byline}<br>${article.published_date}<br>${article.abstract}<br><br><a href="${article.url}">Full Text Article</a></div>`
        $('.listOfArticles').append(list);
        //We're adding these to a ul, but we aren't adding them as li elements. Should we change that, or even have a ul?
    });
}


function init(data){
  addToState(data);
  display(state);
}


function eventListener(){
  $('#search').submit(function(e) {
    e.preventDefault();
    state.currentSection = $('#selection').val();
    getData(init);
  });
}

$(eventListener);
