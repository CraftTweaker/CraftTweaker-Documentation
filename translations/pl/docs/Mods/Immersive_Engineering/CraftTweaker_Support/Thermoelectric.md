# Termoelektryczne
Zestaw termoelektryczny może być wykorzystywany do rejestrowania lub wyłączania temperatury bloków, aby umożliwić im zasilanie prądnicy termoelektrycznego Inżynierii. Ciecze z natury mają temperaturę, więc nie są i nie mogą być zarejestrowane. Temperatury występują w Kelwinach.

## Wezwanie do pakietu
Możesz wywołać pakiet termoelektryczny używając `mods.immersiveengineering.Thermoelectric`.

## Dodaj źródło temperatury

| Wymagane | Typ             | Typ danych                                       |
| -------- | --------------- | ------------------------------------------------ |
| Wymagane | Blok docelowy   | [Składnik](/Vanilla/Variable_Types/IIngredient/) |
| Wymagane | Temperatura (K) | Liczba całkowita                                 |

### Przykład
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int Temperre);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Usuń źródło temperatury

| Wymagane | Typ           | Typ danych                                       |
| -------- | ------------- | ------------------------------------------------ |
| Wymagane | Blok docelowy | [Składnik](/Vanilla/Variable_Types/IIngredient/) |

### Przykład
```zenscript
//Example:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
