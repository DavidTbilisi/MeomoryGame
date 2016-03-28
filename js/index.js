/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        "use strict";
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        'use strict';
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        'use strict';
        var parentElement = document.getElementById(id),
            listeningElement = parentElement.querySelector('.listening'),
            receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



/*ჩემი კოდის დასაწყისი*/
/*ჩემი კოდის დასაწყისი*/
/*ჩემი კოდის დასაწყისი*/
/*ჩემი კოდის დასაწყისი*/




var winPoint = 0,
    errPoint = 0,
    min = 0,
    max = 99;
document.querySelector("#rand").style.textAlign="center";

function change() {
    "use strict";
    var rand1 = Math.floor(Math.random() * (max - min + 1) + min),
        /* თითოეულ სურათს თავისი შემთხვევითი რიცხვის გენერატორი */
        rand2 = Math.floor(Math.random() * (max - min + 1) + min),
        rand3 = Math.floor(Math.random() * (max - min + 1) + min),
        rand4 = Math.floor(Math.random() * (max - min + 1) + min),
        rand5 = Math.floor(Math.random() * (max - min + 1) + min),
        rand6 = Math.floor(Math.random() * (max - min + 1) + min),
        som = Math.floor(Math.random() * 5),
        /* შემთხვევით ირჩევს ერთერთს 6-დან და ათავსებს ცვლადში */
        sources = [rand1, rand2, rand3, rand4, rand5, rand6], //ყველა ცვლადი ერთ მასივში
        body;


    /*document.querySelectorAll("img").style.border="none";*/

    if (rand1 < 10) {
        rand1 = "0" + rand1;
    } /* წინ ამატებს ნოლს (თუ ციფრი 10-ზე ნაკლებია)  */
    if (rand2 < 10) {
        rand2 = "0" + rand2;
    }
    if (rand3 < 10) {
        rand3 = "0" + rand3;
    }
    if (rand4 < 10) {
        rand4 = "0" + rand4;
    }
    if (rand5 < 10) {
        rand5 = "0" + rand5;
    }
    if (rand6 < 10) {
        rand6 = "0" + rand6;
    }

    document.getElementById("rand7").innerHTML = sources[som]; /* აშუქებს შემთხვევით (და გამოსაცნობ) ციფრს */

    document.getElementById("1").src = "img/" + rand1 + ".jpg"; /* ალაგებს სურათებს შემთხვევითი პრინციპით */
    document.getElementById("2").src = "img/" + rand2 + ".jpg";
    document.getElementById("3").src = "img/" + rand3 + ".jpg";
    document.getElementById("4").src = "img/" + rand4 + ".jpg";
    document.getElementById("5").src = "img/" + rand5 + ".jpg";
    document.getElementById("6").src = "img/" + rand6 + ".jpg";

    document.getElementById("1").style.border = "none";
    document.getElementById("2").style.border = "none";
    document.getElementById("3").style.border = "none";
    document.getElementById("4").style.border = "none";
    document.getElementById("5").style.border = "none";
    document.getElementById("6").style.border = "none";


    /*********************************
       
       *****************************************/
    if (sources[som] < 10) {
        sources[som] = "0" + sources[som];
    }

    function dav(e) { /*alert(e.target.nodeName); */
        if (e.target.nodeName === "IMG") /*თუ დავაკლიკე სურათზე*/ {

            var res = e.target.src.match(sources[som]);
            /*ვირჩევ დაკლიკებულს და ვამოწმებ 
                   თუ შეიცავს დაკლიკებული სურათის source-ი გაშუქებულ რიცხვს*/


            body.removeEventListener('click', dav); /* "სხეულს" ვაშორებ მსმენელს*/
            if (res === null) {
                /*alert("პასუხი არასწორია");*/

                errPoint++; /* არასწორი პასუხების ცვლადში ვამატებ ერთს */
                document.getElementById("left").innerHTML = 'err: ' + errPoint; /* ვაშუქებ არასწორი პას. ცვლადს */
                //უნდა გამწვანდეს სწორი სურათი და გაწითლდეს არასწორი
                document.querySelector("[src='img\/" + sources[som] + ".jpg']").style.border = "15px outset  green";

            } else {
                /* alert("ყოჩაღ! შენ ჩემ თვალში კიდევ უფრო აიწიე");*/

                winPoint++; /* სწორი პასუხების ცვლადში ვამატებ ერთს */
                document.getElementById("right").innerHTML = 'win: ' + winPoint; /* ვაშუქებ სწორი პას. ცვლადს */
                //უნდა გამწვანდეს სწორი სურათი და გაწითლდეს არასწორი
                /*document.querySelector("[src='img\/62.jpg']");*/
                document.querySelector("[src='img\/" + sources[som] + ".jpg']").style.border = "10px inset  green";
            }
        }


    }

    /*********************************
    
    *****************************************/


    body = document.querySelector('body'); /* ირჩევს 'სხეულს' */
    body.addEventListener('click', dav); /* აბამს 'მსმენელს' */


}