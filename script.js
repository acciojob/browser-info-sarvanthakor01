//your JS code here. If required.
 function getBrowserInfo() {
            let userAgent = navigator.userAgent;
            let browserName, browserVersion;

            if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) {
                browserName = "Google Chrome";
                browserVersion = userAgent.match(/Chrome\/([\d.]+)/)[1];
            } else if (userAgent.indexOf("Firefox") > -1) {
                browserName = "Mozilla Firefox";
                browserVersion = userAgent.match(/Firefox\/([\d.]+)/)[1];
            } else if (userAgent.indexOf("Edg") > -1) {
                browserName = "Microsoft Edge";
                browserVersion = userAgent.match(/Edg\/([\d.]+)/)[1];
            } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
                browserName = "Apple Safari";
                browserVersion = userAgent.match(/Version\/([\d.]+)/)[1];
            } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
                browserName = "Opera";
                browserVersion = userAgent.match(/OPR\/([\d.]+)/)[1];
            } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                browserName = "Internet Explorer";
                browserVersion = userAgent.match(/(MSIE |rv:)([\d.]+)/)[2];
            } else {
                browserName = "Unknown Browser";
                browserVersion = "N/A";
            }

            document.getElementById("browser-info").innerText = `You are using ${browserName} version ${browserVersion}`;
        }

        getBrowserInfo();