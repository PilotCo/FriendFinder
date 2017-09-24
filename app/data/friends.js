/* You should save your application's data inside of app/data/friends.js as an array of objects. 
Each of these objects should roughly follow the format below.
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
*/

var friendArray = [];

friendArray[0] =  {
	name: "Chuck Norris"
	,photo: "http://cdn.business2community.com/wp-content/uploads/2016/03/Vd3MJo.jpg"
	,scores: [
      1,
      1,
      1,
      1,
      1,
      5,
      5,
      1,
      1,
      1
	]
};

friendArray[1] =  {
	name: "Adolf Hitler"
	,photo: "http://static4.businessinsider.com/image/55088a02eab8eac97a092d78-1179-1219/hitelr%20color.jpg"
	,scores: [
      5,
      3,
      5,
      3,
      5,
      5,
      1,
      1,
      5,
      1
	]
};

module.exports = friendArray;