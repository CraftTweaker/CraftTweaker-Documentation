# IWorldProvider

Das World Provider Interface wird verwendet, um noch mehr Informationen aus einem [IWorld](/Vanilla/World/IWorld/) Objekt zu holen.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`import craftweaker.world.IWorldProvider;`

## Erstelle einen WorldProvider

Normalerweise können Sie den worldProvider nur von einem [IWorld](/Vanilla/World/IWorld/) Objekt oder einigen Funktionen bekommen, obwohl, wenn Sie einen selbst erstellen müssen hier ist, wie du es machst:  
Beachten Sie, dass diese Methode nur innerhalb von Funktionen aufgerufen werden sollte, die in Minecraft ausgeführt werden sollen, nicht während des Laderaums.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMethoden ohne Parameter und ZenGetters

| ZenGetter              | ZenMethode                  | Rückgabetyp                            |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int                                    |
| aktuelles Bodenlevel   | getAverageGroundLevel()     | int                                    |
| wolkenhöhe             | getCloudHeight()            | float                                  |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | float                                  |
| dimensionID            | getDimensionID()            | int                                    |
| Höhe                   | getHeight()                 | int                                    |
| horizon                | getHorizon()                | double                                 |
| lightBrightnesTable    | getLightBrightnesTable()    | float[]                                |
| movementFactor         | getMovementFactor()         | double                                 |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| speicherordner         | getSaveFolder()             | string                                 |
| seed                   | getSeed()                   | long                                   |
| spawnkoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnpunkt             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | double                                 |
| Weltzeit               | getWorldTime()              | long                                   |
| canRespawnHere         | canRespawnHere()            | bool                                   |
| waterVaporize          | does WaterVaporize()        | bool                                   |
| skylight               | hasSkyLight()               | bool                                   |
| daytime                | isDaytime()                 | bool                                   |
| nether                 | isNether()                  | bool                                   |
| skycolored             | isSkyColored()              | bool                                   |
| oberflächenwelt        | isSurfaceWorld()            | bool                                   |

## ZenMethoden mit Parametern

### bekomme Biom an einer bestimmten Position

Verwende entweder ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.  
Gibt ein [IBiome](/Vanilla/Biomes/IBiome/) Objekt zurück.

```zenscript
worldProvObj.getBiome(IBlockPos Position);
```

### erhalte Mondphase für eine bestimmte Zeit

Verwende eine lange.  
Gibt einen Int zurück.

```zenscript
worldProvObj.getMoonPhase(lange Zeit);
```

### erhalte Respawn Dimension für einen bestimmten Spieler

Verwende ein [IPlayer](/Vanilla/Players/IPlayer/) Objekt.  
Gibt ein neues IWorldProvider Objekt zurück.

```zenscript
worldProvObj.getRespawnDimension(ISpieler Spieler);
```

### erhalte Helligkeiten (Faktor) an einer bestimmten Stelle

Float verwenden.  
Gibt einen Float zurück.

```zenscript
worldProvObj.getStarBrightness(float etwas);
worldProvObj.getSunBrightness(float etwas);
worldProvObj.getSunBrightnessFactor(float etwas);
```

### Prüfen Sie, ob ein Block eine hohe Luftfeuchtigkeit hat

Verwende ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.  
Gibt einen Boolean zurück.

```zenscript
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```