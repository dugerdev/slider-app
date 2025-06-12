// script.js

var models = [
    {
        name: "Tamamen Elektrikli İlk BMW i7 Sedan",
        image: "img/bmwi7.jpg",
        link: "https://www.borusanoto.com/markalarimiz/bmw/bmw-i/bmw-i7"
    },
    {
        name: "BMW i4",
        image: "img/bmwi4.jpg",
        link: "https://www.borusanoto.com/markalarimiz/bmw/bmw-i/bmw-i4"
    },
    {
        name: "Yeni BMW iX. %100 Elektrikli.",
        image: "img/bmwix.jpg",
        link: "https://www.borusanoto.com/markalarimiz/bmw/bmw-i/bmw-ix"
    },
    {
        name: "YENİ BMW 1 SERİSİ.",
        image: "img/bmw1.jpg",
        link: "https://www.borusanoto.com/markalarimiz/bmw/1-serisi/yeni-bmw-1-serisi"
    },
    {
        name: "YENİ BMW 2 SERİSİ.",
        image: "img/bmw2.jpg",
        link: "https://www.borusanoto.com/markalarimiz/bmw/2-serisi/yeni-bmw-2-serisi-gran-coupe"
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '2000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}




