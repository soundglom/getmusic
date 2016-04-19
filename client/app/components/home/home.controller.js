const ebUrl = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=Oakland&venue.region=CA&categories=103&token=MD33DX7LJOIGAGCBYRF7'
class HomeController {
  constructor($http, $q) {
    this.name = 'home';
    console.log('This works')
    
    const formatData = (source, dest) => {
      let convert = JSON.parse(source);
      console.log(convert)
      dest = Object.assign({}, convert);
    }

    function httpPromise (url) {
      var deferred = $q.defer();
      $http.get(url)
      .success(function (data) {              
        deferred.resolve(data);
      })
      return deferred.promise; 
    }

    // let getEvents = () => {
    //   return httpPromise('/events');
    // }


    let getEvents = () => {
      return httpPromise(ebUrl);
    }
    
    const ebData = {};



    $http.get('/events')
      .then(res => {
        console.log(res.data);
      })
      

      // getEvents()
      // .then(data => {
      //   console.log(data.events)
      //   // formatData(data, ebData);
      // })
      // .then(() => {
      //   ebData.forEach( function(element, index) {
      //     console.log(element)    
      //   });
      // })
     
  }
}

HomeController.$inject = ['$http', '$q'];
export default HomeController;
