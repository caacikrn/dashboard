(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Product Sales Chart
var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"], // Rentang tahun sampai 2024
        datasets: [{
                label: "IP Xr", // Ganti USA dengan IP Xr
                data: [15, 30, 55, 65, 60, 80, 95, 100, 110], // Data disesuaikan
                backgroundColor: "rgba(235, 22, 22, .7)" // Warna tetap sama
            },
            {
                label: "IP 14 Promax", // Ganti UK dengan IP 14 Promax
                data: [8, 35, 40, 60, 70, 55, 75, 85, 90], // Data disesuaikan
                backgroundColor: "rgba(235, 22, 22, .5)" // Warna tetap sama
            },
            {
                label: "IP 15 Promax", // Ganti AU dengan IP 15 Promax
                data: [12, 25, 45, 55, 65, 70, 60, 75, 85], // Data disesuaikan
                backgroundColor: "rgba(235, 22, 22, .3)" // Warna tetap sama
            }
        ]
    },
    options: {
        responsive: true
    }
});


// Sales & Revenue Chart
var ctx2 = $("#salse-revenue").get(0).getContext("2d");
var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
                label: "Sales",
                data: [15, 30, 55, 45, 70, 65, 85, 90, 60, 75, 80, 95], // Data untuk tiap bulan
                backgroundColor: "rgba(235, 22, 22, .7)",
                borderColor: "#EB1616", // Warna sesuai #EB1616
                fill: true
            },
            {
                label: "Revenue",
                data: [20, 35, 60, 50, 75, 70, 90, 95, 65, 80, 85, 100], // Data revenue tiap bulan
                backgroundColor: "rgba(0, 0, 0, .7)", // Warna hitam transparan
                borderColor: "#000", // Warna border hitam (#000)
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

