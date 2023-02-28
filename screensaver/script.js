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
        "beginning %start%,",
        "we moved for %reason%,",
        "but we kept %weight% alive,",
        "now, we are the hyphen between %expanse%.",
        "they tried to %sound% us,",
        "we carried a %baggage%,"
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

var interval = setInterval(timer, 16000);

function timer() {
  newPhrase();
}