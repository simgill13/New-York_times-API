var state = {
  currentSection : "politics",
  submitted : false,
  rawData: [],
  articles: [],
}

var baseUrl = "https://api.nytimes.com/svc/topstories/v2/";
var endUrl = '.json?api-key=3047b4f43aa340b1a9976a2cefadbf7f';
var fullUrl = baseUrl + state.currentSection + endUrl;
//category = input.val()

function getData(callback){
  $.ajax({
    url: fullUrl,
    method: 'GET',
    success: callback
  });
}

function addToState(data){
  state.rawData = data.results;
  console.log(state.rawData);
  // data.results.forEach(function(article){
  //   var articleObj = {
  //     abstract : article.abstract || '',
  //     byline : article.byline || '',
  //     published_date : article.published_date || '',
  //     url: article.url || '',
  //     title: article.title || '',
  //     thumbnail: article.multimedia[3].url || '',
  //     thumbCaption: article.multimedia[3].caption || '',
  //     jumboThumb: article.multimedia[4].url || '',
  //     jumboCaption: article.multimedia[4].caption || ''
  //   };
    //console.log(articleObj);
    //state.articles.push(articleObj);
  //})
  //console.log(state.articles);
  // console.log(data);
  // console.log(data.results[0].abstract);
  // console.log(data.results[0].byline);
  // console.log(data.results[0].published_date);
  // console.log(data.results[0].url);
  // console.log(data.results[0].title);
  // console.log(data.results[0].multimedia[3].url);
  // console.log(data.results[0].multimedia[3].caption);
  // console.log(data.results[0].multimedia[4].url);
  // console.log(data.results[0].multimedia[4].caption);
}

function display(data){

}

$(getData(addToState));
