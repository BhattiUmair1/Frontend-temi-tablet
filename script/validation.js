let afspraakJson = [];

function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
  checkValidity(decodedText);
}

var html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

const get = (url) => fetch(url).then((r) => r.json());

const showResult = (queryResponse) => {
  for (let i = 0; i < queryResponse.length; i++) {
    afspraakJson += `\n ${queryResponse[i].afspraakId}`;
  }
  console.log(afspraakJson);
};

const getOnlineAPI = async () => {
  const endPoint = `https://bezoekersapi.azurewebsites.net/api/afspraken`;
  const response = await get(endPoint);
  console.log({ response });
  showResult(response);
};

const checkValidity = (code) => {
  console.log(code);
  console.log(afspraakJson);
  if (afspraakJson.indexOf(code) >= 0) {
    console.log('Code geldig');
    window.location.href = 'mainpage.html';
  } else {
    console.log('Code niet geldig');
    window.location.href = 'error.html';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM geladen');
  getOnlineAPI();
});
