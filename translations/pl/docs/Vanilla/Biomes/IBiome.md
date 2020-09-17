# Ibiom

Interfejs IBiome pozwala na pobranie informacji o zarejestrowanym Biome.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.world.IBiome;`

## Wywołanie Ibiomu

Możesz uzyskać listę wszystkich zarejestrowanych biomów używając `game.biomes` z [IGame](/Vanilla/Game/IGame/) Jest to obecnie jedyny sposób

## ZenGetters

Atm, wszystko, co możesz zrobić z obiektem IBiome to pobieranie z niego informacji:

| ZenGetter                     | Typ zwrotu         |
| ----------------------------- | ------------------ |
| Nazwa                         | ciąg znaków        |
| canRain                       | boolean            |
| isSnowyBiome                  | boolean            |
| wysoka wilgotność             | boolean            |
| Szansa odrodzenia             | zmiennoprzecinkowe |
| wysokość podstawy             | zmiennoprzecinkowe |
| zmienność wysokości           | zmiennoprzecinkowe |
| opady deszczu                 | zmiennoprzecinkowe |
| Mnożnik kolorów wody          | odcień             |
| zignorePlayerSpawnSuitability | boolean            |
| temperatura                   | zmiennoprzecinkowe |