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
   $('.container').empty();
    state.rawData.forEach(function(article) {
        var list = `<div>
                        <h2>${article.title}</h2>
                        <p>${article.byline}<br>${article.published_date}</p>
                      <br><br>
                      <div class="inner"
                        <h5>${article.abstract}</h5>
                      <br><br>
                        <a href="${article.url}">Full Text Article</a>
                        </div>
                    </div>`
        $('.container').append(list);
    });
    state.rawData=[];
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
