function m() {
  var db = firebase.firestore();
  db.collection("movie")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var num = `${doc.data().listN}`
        var card =
          `<div class="card">
          <img class="card-img-top" src="${doc.data().posterURL}" alt="">
          <div class="card-doby">
             <h4 class="card-title">${doc.data().title} - ${doc.data().year}</h4>
             <p class="card-text">${doc.data().detail}</p>
             </div>
        </div>
        <center>
        <div class="bass">Trailer</div>
                    <iframe src="${doc.data().Trailer}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                    <center>`
          $("#D"+ num).append(card);
        
      }
      )
    }
    )
};

$(function () {
  var db = firebase.firestore();
  db.collection("poster").get().then((querySnapshot) => {
         
      querySnapshot.forEach((doc) => {
              var num = `${doc.data().No}`
              var card = ` <img src="${doc.data().URL}" width="375" height="200" id="m1">
              `;
              $("#m" + num).append(card);
          });
      })
})

$(function () {
  var db = firebase.firestore();
  db.collection("valo").get().then((querySnapshot) => {
         
      querySnapshot.forEach((doc) => {
              var num = `${doc.data().No}`
              var card = ` <img src="${doc.data().URL}" width="80" height="70" id="a1">
              `;
              $("#a" + num).append(card);
          });
      })
})


var db = firebase.firestore();
db.collection("news")
.get()
.then((querySnapshot) => {
  querySnapshot.forEach((doc)=>{
    var c = `${doc.data().No}`
      var card =
    `<div class="card">
      <img class="card-img-top" src="${doc.data().URL}" alt="">
      <div class="card-doby">
         <p class="card-text">${doc.data().news}</p>
         </div>
    </div>`
    $("#list2"+c).append(card);
  }
  )
}
);