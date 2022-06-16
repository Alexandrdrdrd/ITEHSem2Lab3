var ajax = new XMLHttpRequest();

function form1() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                console.dir(ajax.responseText);
                document.getElementById("res").innerHTML = ajax.response;
            }
        }
    }
    var group = document.getElementById("group").value;
    ajax.open("get", "1.php?group=" + group);
    ajax.send();
}

function form2() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {

                console.dir(ajax);
                let rows = ajax.responseXML.firstChild.children;
                let result = "<table border ='1'>";
                result += "<tr><th>Teacher</th><th>Day</th><th>Number</th><th>Auditorium</th><th>Disciple</th><th>Type</th></tr>";
                for (var i = 0; i < rows.length; i++) {
                    result += "<tr>";
                    result += "<td>" + rows[i].children[0].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[1].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[2].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[3].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[4].firstChild.nodeValue + "</td>";
                    result += "<td>" + rows[i].children[5].firstChild.nodeValue + "</td>";
                    result += "</tr>";
                }
                result += "</table>";
                document.getElementById("res").innerHTML = result;
            }
        }
    }
    var teacher = document.getElementById("teacher").value;
    ajax.open("get", "2.php?teacher=" + teacher);
    ajax.send();
}



function form3() {
    ajax.onreadystatechange = function() {
    console.dir(ajax);
    let rows = JSON.parse(ajax.responseText);
    console.dir(rows);
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            console.dir(ajax);
            
            let result = "<table border ='1'>";
            result += "<tr><th>Auditorium</th><th>Day</th><th>Number</th><th>Disciple</th><th>Type</th></tr>";
            for (var i = 0; i < rows.length; i++) {
                result += "<tr>";
                result += "<td>" + rows[i].auditorium + "</td>";
                result += "<td>" + rows[i].week_day + "</td>";
                result += "<td>" + rows[i].lesson_number + "</td>";
                result += "<td>" + rows[i].disciple + "</td>";
                result += "<td>" + rows[i].type + "</td>";
                result += "</tr>";
            }
            document.getElementById("res").innerHTML = result;
        }
    }
};
    var auditorium = document.getElementById("auditorium").value;
    ajax.open("get", "3.php?auditorium=" + auditorium);
    ajax.send();
}
