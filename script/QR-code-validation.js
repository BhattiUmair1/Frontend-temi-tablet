let ScannedGUID;

const GetGUIDBezoeker = function (GescannedGUID) {
  console.log('GUID send');
  // onderstaande link is voor te testen. Later moet de GescannedGUID in de URL komen te staan.
  url = 'https://bezoekersapi.azurewebsites.net/api/afspraken/af1b5fdd-3293-4f4c-bb38-a1890c882512';
  handleData(url, showResultGUID, null, (method = 'GET'), (body = null));
  return null;
};

const showResultGUID = function (jsonObject) {
  console.log(jsonObject);
  ResultId = jsonObject['afspraakId'];
  if (ScannedGUID == ResultId) {
    console.log('GUID is correct');
    // doorsturen naar volgende pagina met goedkeuring
    // OPGELET onderstande is een test html bestand, gelieve deze te vervangen correcte html bestand
    //window.location.href = 'juist.html';
  } else {
    console.log('GUID is foutief');
    // doorsturen naar volgende pagina met foutmelding
    // OPGELET onderstande is een test html bestand, gelieve deze te vervangen correcte html bestand
    //window.location.href = 'fout.html';
  }
};

function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

document.addEventListener('DOMContentLoaded', function () {
  console.log('Camera script');
});
