window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        axisY: {
            title: "Fuel Usage per day in L"
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [{
                    y: 536,
                    label: "Mon"
                },
                {
                    y: 489,
                    label: "Tue"
                },
                {
                    y: 666,
                    label: "Wed",
                    indexLabel: "too high! ",
                    markerColor: "red",
                    markerType: "triangle"
                },
                {
                    y: 512,
                    label: "Thur"
                },
                {
                    y: 412,
                    label: "Fri"
                },
                {
                    y: 576,
                    label: "Sat"
                },
                {
                    y: 419,
                    label: "Sun"
                }
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        axisY: {
            title: "Food Reserves in Kilos"
        },
        data: [{
            type: "column",
            dataPoints: [{
                    y: 159123,
                    label: "Chicken"
                },
                {
                    y: 183654,
                    label: "Pork"
                },
                {
                    y: 169709,
                    label: "Beef"
                },
                {
                    y: 210356,
                    label: "Fish"
                },
                {
                    y: 265349,
                    label: "Vegetables"
                },
                {
                    y: 200987,
                    label: "Rice"
                },
                {
                    y: 234567,
                    label: "Pasta"
                }
            ]
        }]
    });
    chart.render();


    // made with help of answer on https://bytes.com/topic/javascript/answers/91734-generate-random-numbers-range-every-second

    var numberText = document.createTextNode("");
    document.getElementById("number").appendChild(numberText);

    function updateNumber() {
        numberText.nodeValue = Math.floor(Math.random() * 20) + 656;
    }
    updateNumber();
    setInterval(updateNumber, 1000);


}