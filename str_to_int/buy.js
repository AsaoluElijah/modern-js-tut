function buyAirtime(apiKey, price, network, phone) {
    network = network + "_custom";
    $.ajax({
        url: `api.php?url=https://quickrecharge.com.ng/api/v2/airtime/?api_key=${apiKey}&product_code=${network}&phone=${phone}&amount=${price}`,
        method: 'post',
        success: function(data) {
            getAirtime(data);
        }
    });
}

function getAirtime(data) {
    var a = data;
    a = JSON.stringify(data);
    localStorage.restData = a;
    //  localStorage.restData = JSON.parse(localStorage.restData)
}