# IWorldProvider

Interfejs Światowego Dostawcy jest używany do uzyskania jeszcze większej ilości informacji z obiektu [IWorld](/Vanilla/World/IWorld/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.world.IWorldProvider;`

## Utwórz światowego dostawcę

Zazwyczaj możesz po prostu uzyskać dostawcę świata z obiektu [IWorld](/Vanilla/World/IWorld/) lub niektórych funkcji, jeśli yo musi utworzyć siebie sama, oto jak to robisz:  
Zauważ, że ta metoda powinna być wywoływana tylko wewnątrz funkcji, które mają być uruchamiane wewnątrz minecraft, nie podczas okręgu ładunkowego.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMethods bez parametrów i ZenGetters

| ZenGetter              | Metoda ZenMethod            | Typ zwrotu                             |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | odcień                                 |
| Rzeczywisty Poziom     | getAverageGroundLevel()     | odcień                                 |
| wysokość chmur         | getCloudHeight()            | zmiennoprzecinkowe                     |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | zmiennoprzecinkowe                     |
| ID wymiarów            | getDimensionID()            | odcień                                 |
| wysokość               | getHeight()                 | odcień                                 |
| horyzont               | getHorizon()                | podwójne                               |
| LekkiBrightnesTable    | getLightBrightnesTable()    | pływaki[]                              |
| współczynnik ruchu     | getMovementFactor()         | podwójne                               |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| zapisz folder          | getSaveFolder()             | ciąg znaków                            |
| ziarno                 | getSeed()                   | długie                                 |
| współrzędna spawnona   | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | podwójne                               |
| ŚwiecCzas              | getWorldTime()              | długie                                 |
| canRespawnHere         | canRespawnHere()            | bool                                   |
| waterVaporize          | doesWaterVaporize()         | bool                                   |
| świecący               | hasSkyLight()               | bool                                   |
| daytime                | isDaytime()                 | bool                                   |
| nether                 | isNether()                  | bool                                   |
| SkyKolored             | isSkyKolored()              | bool                                   |
| powierzchnia świata    | isSurfaceWorld()            | bool                                   |

## Metody ZenMethods z parametrami

### pobierz Biom na określonym miejscu

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/) .  
Zwraca obiekt [Ibiom](/Vanilla/Biomes/IBiome/).

```zenscript
światProvObj.getBiome(IBlockPos position);
```

### pobierz księżycową fazę na określony czas

Użyj długiego.  
Zwraca int.

```zenscript
worldProvObj.getMoonPhase(długi czas);
```

### pobierz Wymiar Odrodzenia dla konkretnego gracza

Użyj obiektu [IPlayer](/Vanilla/Players/IPlayer/) .  
Zwraca nowy obiekt IWorldProvider.

```zenscript
worldProvObj.getRespawnDimension(IPlayer player);
```

### pobierz Brightnes (czynnik) na określony

Użyj float.  
Zwraca float.

```zenscript
worldProvObj.getStarBrightness(coś pływającego);
worldProvObj.getSunBrightness(coś pływającego);
worldProvObj.getSunBrightnessFactor(coś pływającego);
```

### Sprawdź, czy blok ma wysoką wilgotność

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/) .  
Zwraca wartość logiczną.

```zenscript
światProvObj.isBlockHighHumidity(IBlockPos pos);
```