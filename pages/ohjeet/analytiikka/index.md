---
title: Analytiikka
---

Web analytiikka on tullut pitkän matkan ajasta, jolloin sivuilla näkyvä vieraslaskuri oli aina kävijämittari. Nykyään kävijän sivuilla tapahtuvaa toimintaa voidaan mitata hyvinkin tarkasti. Datalla ei kuitenkaan saavuteta mitään, ellei sen keräämisen ja hyödyntämiseen tehdä mitään suunnitelmaa. 

Ilmaisilla ohjelmilla web analytiikassa pääsee hyvin pitkälle. <a href="https://analytics.google.com" target="_blank">Google Analytics</a> lienee käytetyin ohjelma ja se on täysin ilmainen käyttää. Useimmiten olisi kuitenkin suotavaa, että yritys hankkisi itselleen osaajan, jotta dataa voitaisiin paremmin hyödyntää toiminnan kehittämisessä. Suomessa Google on järjestänyt ilmaisia koulutuksia, joten yritys voi itsekkin helposti kouluttaa uusia analytiikan osaajia edullisesti. Materiaalia pystyy myös opiskelemaan itsenäisesti <a href="https://support.google.com/partners/answer/3125774?hl=fi" target="_blank">Google Partners -portaalissa</a>.

## Analytiikan suunnittelu
Valitettavan usein erityisesti pienempien yrityksien kohdalla, analytiikka tarkoittaa useimmiten sitä, että sivuille asennetaan Google Analytics ja kuukauden päästä käydään ihmittelemässä mitä kaikkea dataa se sinä aikana kerännyt. Vaikka Analytics loistava ohjelma onkin, se ei automaattisesti kerää kaikista tapahtumista dataa. Nämä pitää tehdä itse. 

### Maalien asettaminen
Maalien asettaminen on erittäin tärkeää, jotta kävijöiden käyttämisestä saadaan tarkempaa tietoa. Niiden avulla nähdään sivujen konversio. Vaikka maalien asettaminen usein mielletään vain pakolliseksi verkkokaupoissa, on se hyödyllinen kaikilla sivustoilla. Useimmiten sivuilla on aina jokin tarkoitus, saada käyttäjä tekemään jotain. Tämä voi olla toiselle sivulle siirtyminen, postituslistalle liittyminen yms. 

### Tapahtumien seuraaminen
Sivustolla tapahtumia klikkejä on myös mahdollista seurata. Tämän voi tehdä suoraan itse sivuston koodin JavaScriptillä.

```javascript
function klikki(){
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Videot',
	  eventAction: 'katso video',
	  eventLabel: 'Huikea mainosvideo'
	});
}
```

Ylla oleva esimerkki tallentaa tapahtuman, kun kävijä katsoo sivuilla videon. Functio pitää tietenkin vielä sitoa itse nappiin tai painikkeeseen, joka function laukaisee.

Koska koodaaminen on hieman haastavaa ja usein vaatii kahden osaston yhteistyön, toi Google markkinoille <a href="https://www.google.com/analytics/tag-manager/" target="_blank">Tag Manager -ohjelman</a>. Näin ollen jos yllä oleva JavaScript esimerkki näyttää heprealta, niin ei hätää, sinun ei tarvitse opetella JavaScriptiä. Tag Mangerilla voi yhtälailla luoda näitä samoja tapahtumia ja tuoda näin lisää dataa Analyticsiin. Lisäksi sillä voidaan myös kerätä dataa muiden, kolmansien osapuolien tapahtumista.  

## Sisäisen liikenteen poissulkeminen
Sisäisellä liikenteellä tarkoitetaan yrityksen sisältä tapahtuvaa liikennettä. Tämä voidaan suodattaa pois datasta, ja se onkin aina suotavaa tehdä, sillä muuten tulokset hieman vääristyvät. 