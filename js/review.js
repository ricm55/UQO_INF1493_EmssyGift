//Simulation de revues dans une database
var Reviews = {
    "reviews": [
        {
            "name": "Marc",
            "review": "Ce site est très inspirant !"
        },
        {
            "name": "Joe le boss",
            "review": "J'ai enfin pu trouvé un cadeau pour ma petite fille !"
        }
    ]
};

    
initialReview(Reviews);

function sendReview(){
    var review = document.getElementById("reviewUser").value;
    if(review != ''){
        console.log(review);
        var name = document.getElementById("name").value;
        console.log(name);
        if(name == '')
            name = "Anonymous";
        putReview(name, review);
    }else{
        alert("Vous devez mettre une revue avant de soumettre !");
    }
}

function putReview(name, review){
    var p_review = document.createElement("p");
    p_review.className = "reviewInList";
    p_review.innerHTML = name + ' : ' + review;
    document.getElementsByClassName("reviewList")[0].append(p_review);
    
}


function initialReview(reviews){
    reviews.reviews.forEach(rev => {
        putReview(rev.name, rev.review);
    });
}