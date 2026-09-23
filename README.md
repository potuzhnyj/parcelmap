# parcelmap

An interactive parcel map for the Jičín area. Click a parcel to see its parcel number, registered area and cadastral reference.

**Live demo:** [potuzhnyj.github.io/parcelmap](https://potuzhnyj.github.io/parcelmap/)

## Features

- Leaflet map with OpenStreetMap tiles
- Parcel boundaries loaded from a local GeoJSON file
- Clickable parcels with visual selection
- Parcel number, area and cadastral reference in the details panel
- Zoom to the selected parcel
- English and Czech interface
- About page describing the project stack and data sources

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- [Leaflet](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- GeoJSON
- QGIS for converting the source data

## Data

The parcel data comes from the Czech Office for Surveying, Mapping and Cadastre (ČÚZK), using the INSPIRE Cadastral Parcels dataset.

The original ČÚZK files were provided as GML. They were converted to GeoJSON in QGIS and merged into:

```text
data/parcels.geojson
```

The dataset covers Jičín and three nearby cadastral areas. The application uses preprocessed local data instead of requesting the whole dataset from ČÚZK in the browser. This keeps the map more predictable during local development and the interview demonstration.

## Run locally

The project does not need a build step or a backend server. It should be opened through a local HTTP server because the application loads GeoJSON and translation files with `fetch()`.

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The recommended layout is a desktop or landscape browser window.

## Project structure

```text
parcelmap/
├── data/
│   ├── languages.json
│   └── parcels.geojson
├── images/
│   └── favicon.svg
├── scripts/
│   ├── app.js
│   └── lang.js
├── styles/
│   └── style.css
├── about.html
├── index.html
└── README.md
```

The favicon is stored at `images/favicon.svg` and is referenced from both HTML pages.

## Design decisions

The parcel data is downloaded and converted before it reaches the browser. A live WFS request would make the first version more dependent on network availability and would require more work to keep the map responsive over a larger area.

Leaflet was chosen because it is small, well documented and works directly with GeoJSON. OpenStreetMap is used as the map background, with attribution shown on the map.

## Possible next improvements

- Add parcel search by cadastral reference
- Load data by cadastral area instead of one combined file
- Add a loading indicator and a visible data-loading error state
- Improve the mobile layout instead of showing the desktop-orientation notice
- Add more cadastral areas from the Jičín district

## License and attribution

The application code is provided for the interview task. Map tiles are provided by OpenStreetMap contributors. Parcel data is provided by ČÚZK under its published service conditions.

## Česká verze

### parcelmap

Interaktivní mapa parcel pro oblast Jičínska. Kliknutím na parcelu zobrazíte její číslo, evidovanou výměru a katastrální referenci.

**Živá ukázka:** [potuzhnyj.github.io/parcelmap](https://potuzhnyj.github.io/parcelmap/)

### Funkce

- mapa Leaflet s podklady OpenStreetMap;
- hranice parcel načítané z lokálního GeoJSON souboru;
- výběr parcely kliknutím a její vizuální zvýraznění;
- zobrazení čísla parcely, výměry a katastrální reference;
- přiblížení na vybranou parcelu;
- anglické a české rozhraní;
- About stránka s popisem technologií a zdrojů dat.

### Použité technologie

- HTML5;
- CSS3;
- čistý JavaScript bez frameworku;
- [Leaflet](https://leafletjs.com/);
- [OpenStreetMap](https://www.openstreetmap.org/);
- GeoJSON;
- QGIS pro převod zdrojových dat.

### Data

Data parcel pocházejí z Českého úřadu zeměměřického a katastrálního (ČÚZK), konkrétně z datové sady INSPIRE Katastrální parcely.

Původní soubory ČÚZK byly ve formátu GML. Pomocí QGIS byly převedeny do GeoJSON a sloučeny do souboru:

```text
data/parcels.geojson
```

Dataset pokrývá Jičín a tři okolní katastrální území. Data jsou předem připravena lokálně, aby aplikace nebyla při demonstraci závislá na živém WFS dotazu a načítala se plynuleji.

### Spuštění lokálně

Projekt nevyžaduje build ani backend. Protože aplikace načítá GeoJSON a překlady pomocí `fetch()`, je potřeba použít lokální HTTP server.

V kořenové složce projektu spusťte:

```bash
python3 -m http.server 8000
```

Poté otevřete:

```text
http://localhost:8000
```

Pro nejlepší zobrazení je doporučený desktopový nebo horizontální režim prohlížeče.

### Struktura projektu

```text
parcelmap/
├── data/
│   ├── languages.json
│   └── parcels.geojson
├── images/
│   └── favicon.svg
├── scripts/
│   ├── app.js
│   └── lang.js
├── styles/
│   └── style.css
├── about.html
├── index.html
└── README.md
```

Favicon je uložený v `images/favicon.svg` a je použitý na obou HTML stránkách.

### Rozhodnutí

Data parcel se stahují a převádějí předem. Živý WFS dotaz by znamenal větší závislost na dostupnosti služby ČÚZK a složitější optimalizaci pro větší území.

Leaflet byl zvolen kvůli jednoduché práci s GeoJSON, malé velikosti a dobré dokumentaci. Jako mapový podklad jsou použity dlaždice OpenStreetMap s uvedením zdroje.

### Možná další rozšíření

- vyhledávání podle katastrální reference;
- načítání dat podle jednotlivých katastrálních území;
- indikátor načítání a viditelná chybová hláška;
- plnohodnotná mobilní verze;
- rozšíření pokrytí o další katastrální území okresu Jičín.

### Licence a uvedení zdrojů

Zdrojový kód aplikace vznikl pro účely interview úlohy. Mapové podklady poskytují přispěvatelé OpenStreetMap. Data parcel poskytuje ČÚZK podle podmínek svých služeb.
