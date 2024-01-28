window.onload = function(){

/*pojedynczy element po ID*/
    //document.getElementById('box-one').style.border = '3px solid red';

/*pojedynczy el za pomocą selektora*/
    //document.querySelector('#box-one').style.border = '3px solid red';


    //document.querySelector('.boxes').style.border = '3px solid red';


//---------------------------------------
    /*Wiele elementów po nazwie klasy*/
    //let arr = document.getElementsByClassName('boxes');

    /*Wiele elementów po nazwie znacznika*/
    //let arr = document.getElementsByTagName('div');

    /**/
    //let arr = document.querySelectorAll('#big-box div');

    /*for (let element of arr){
        element.style.border = '3px solid red';

    }*/

    let element = document.getElementById('box-two');
    element.style.border = '3px solid red';

    /*węzeł rodzica*/
    //element.parentNode.style.border = '3px solid blue';

    /*Węzeł sąsiadów*/
    //element.previousElementSibling.style.border = '3px solid green';
   // element.nextElementSibling.style.border = '3px solid yellow';

    /*węzeł dziecka*/
    let elementBigBox = socument.getElementById('big-box');

    elementBigBox.firstElementChild =




};