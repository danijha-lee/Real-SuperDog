var events = [
    { event: "ComicCon", city: "New York", state: "New York", attendance: 240000, date: "06/01/2017" },
    { event:"ComicCon", city:"New York", state:"New York", attendance:250000, date:"06/01/2018" },
    {event:"ComicCon", city:"New York", state:"New York", attendance:257000, date:"06/01/2019"},
    {event:"ComicCon", city:"San Diego", state:"New York", attendance:130000, date: "06/01/2017"},
    {event:"ComicCon", city:"San Diego", state:"New York", attendance: 140000, date:"06/01/2018"},
    {event: "ComicCon", city:"San Diego", state: "New York",attendance: 150000,date: "06/01/2019"},
    {event: "ComicCon",city: "Charlotte",state: "North Carolina", attendance: 40000, date: "06/01/2017"},
    {event: "ComicCon", city: "Charlotte", state: "North Carolina", attendance: 45000, date: "06/01/2018"},
    {event: "ComicCon", city: "Charlotte", state: "North Carolina", attendance: 50000, date: "06/01/2019" },
];

var filteredEvents = events;

function buildDropDown(){
    let eventDD = document.getElementById("eventDropDown");

    let distinctEvents = [...new Set(events.map(event => event.city))];

    let linkHTMLEnd = ' <div class="dropdown-divider"></div> <a class = "dropdown-item" onclick = "getEvents(this"  data - string = "All" > All < /a>';

    let resultHTML = "";

    for (let index = 0; index < distinctEvents.length; index++) {
        
        resultHTML += `<a class="dropdown-item" onclick="getEvents(this)" data-string="${distinctEvents[index]}">${distinctEvents[index]}</a>`;
    }
    resultHTML += linkHTMLEnd;
    eventDD.innerHTML = resultHTML;

}

function getEvents(element) {
    let city = element.getAttribute("data-string");
    filteredEvents = events;
    document.getElementById("statsHeader").innerHTML = `Stats for ${city} Events`;

    if (city != 'All') {
        filteredEvents = events.filter(funcntion(item));{
            if(item.city == city){
            return item;
            }
        }
    }
}

displayStats();

fucntion displayStats(){
    let toral = 0;
    let average = 0;
    let most = 0;
    let least = 0;
    let currentAttendence = 0;

    for (var index = 0; index < filteredEvents.length; index++) {
        currentAttendence = filteredEvents[index].attendance;
        total += currentAttendence;

        if (most < currentAttendence) {
            most = currentAttendence;
        }

        if (least > currentAttendence || least < 0)
            least = currentAttendence;
    }
    average = total / filteredEvents.length;

    document.getElementById("total").innerHTML = total.toLocalString();
    document.getElementById("most").innerHTML = most.toLocalString();
    document.getElementById("least").innerHTML = least.toLocalString();
    document.getElementById("average").innerHTML = average.toLocalString(undefined, {minimumFractionDigits: 0});



}





