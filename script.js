function generateSignal() {
    const currencyPair = document.getElementById("currencyPair").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const percentage = document.getElementById("percentage").value;

    if (!startTime || !endTime || !percentage) {
        alert("Please fill all the fields!");
        return;
    }

    const baseUrl = "https://alltradingapi.com/signal_list_gen_vip/qx_signal.js";
    const params = `?start=${startTime}&end=${endTime}&duration=30&currency_pairs=${currencyPair}&operation_mode=normal&percentage_min=${percentage}&apply_filter=1&is_separate=1&backtest_advanced=on`;

    const signalUrl = `${baseUrl}${params}`;
    document.getElementById("signalUrl").textContent = signalUrl;
}
