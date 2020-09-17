# MCBiome

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Metody
### getTemperature

Typ zwrotu: zmienna

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parametr | Typ                                                          | Opis             |
| -------- | ------------------------------------------------------------ | ---------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |



## Właściwości

| Nazwisko          | Typ                | Posiada Getter | Ma ustawienie |
| ----------------- | ------------------ | -------------- | ------------- |
| kategoria         | Ciąg znaków        | prawda         | fałszywy      |
| głębokość         | zmiennoprzecinkowe | prawda         | fałszywy      |
| Deszcz            | boolean            | prawda         | fałszywy      |
| Śnieg             | boolean            | prawda         | fałszywy      |
| upadek            | zmiennoprzecinkowe | prawda         | fałszywy      |
| Wysoka wilgotność | boolean            | prawda         | fałszywy      |
| Typ deszczu       | Ciąg znaków        | prawda         | fałszywy      |
| skala             | zmiennoprzecinkowe | prawda         | fałszywy      |
| Wodny Kolor       | odcień             | prawda         | fałszywy      |
| Kolor WodnoFogera | odcień             | prawda         | fałszywy      |

