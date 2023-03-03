var array_list = {
    reason: ["money", "land", "freedom", "opportunity", "ownership", "a chance"]
    ,expanse: ["country and man", "poetry and science", "truth and desire", "indo and caribbean", "knowing myself and knowing you", "a document and a story", "memory and history"]
    ,start: ["at the water", "on Fatel Razack", "in Calcutta", "at the temple", "on the sugarcane field", "inside a data table", "on February 6, 1845"]
    ,sound: ["destroy", "curse", "abandon", "remove", "kill", "crush", "fool", "kidnap", "trap", "imprison", "trick"]
    ,weight: ["the culture", "the music", "the religion", "the food", "the brotherhood", "the family", "the valor"]
    ,baggage: ["cutlass", "lota", "taria", "murti", "rhythm", "wisdom", "tradition", "folklore", "bhajan"]

    // 'truth' is where it all begins.
    ,truth: [
        // "<span class='resting'>Resting today</span> despite %adj1% %obj%.",
        "<img src='images/PIC_1.jpg'>",
        "<img src='images/PIC_2.jpg'>",
        "<img src='images/PIC_3.jpg'>",
        "<img src='images/PIC_4.gif'>",
        "<img src='images/PIC_5.jpg'>",
        "<img src='images/PIC_6.jpg'>",
        "<img src='images/PIC_7.jpg'>",
        "<img src='images/PIC_8.jpg'>",
        "<img src='images/PIC_9.jpg'>",
        "<img src='images/PIC_10.jpg'>",
        "<img src='images/PIC_11.jpg'>",
        "<img src='images/PIC_12.jpg'>",
        "<img src='images/PIC_13.jpg'>",
        "<img src='images/PIC_14.jpg'>",
        "<img src='images/PIC_15.jpg'>",
        "<img src='images/PIC_16.jpg'>",
        "<img src='images/PIC_17.jpg'>",
        "<img src='images/PIC_18.jpg'>",
        "<img src='images/PIC_19.jpg'>",
        "<img src='images/PIC_20.jpg'>",
    ]
}

function getRandomEntry(arrayName) {
    var ary = array_list[arrayName];
    if (!ary) return '%' + arrayName + '%';

    var entry = ary[Math.floor(ary.length * Math.random())];
    entry = entry.replace(/%([^%]+)%/g, function (m) {
        var aname = m.replace(/^%|%$/g,'');
        return getRandomEntry(aname);
    });
    return entry;
}

window.onload = function() {
    document.getElementById("sentence").innerHTML = [
    getRandomEntry("truth")
    ];
}

function newPhrase() {
  document.getElementById("sentence").innerHTML = [
    getRandomEntry("truth")
  ];
}

var interval = setInterval(timer, 20000);

function timer() {
  newPhrase();
}