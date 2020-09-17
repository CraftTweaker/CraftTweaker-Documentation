# IWorldProvider

Интерфейс World Provider используется для получения еще большей информации из [IWorld](/Vanilla/World/IWorld/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт crafttweaker.world.IWorldProvider;`

## Создать мирового провайдера

Обычно вы можете просто получить WorldProvider из объекта [IWorld](/Vanilla/World/IWorld/) или некоторых функций, хотя если он должен создать один себя, вот как это сделать:  
Заметьте, что этот метод следует использовать только внутри функций, которые предназначены для работы внутри minecraft, не во время загрузки круга.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## Методы без параметров и геттеры

| Геттер                         | Метод                       | Возвращаемый тип                       |
| ------------------------------ | --------------------------- | -------------------------------------- |
| actualHeight                   | getActualHeight()           | int                                    |
| фактический уровень заземления | getAverageGroundLevel()     | int                                    |
| высота облака                  | getCloudHeight()            | float                                  |
| currentMoonPhaseFactor         | getCurrentMoonPhaseFactor() | float                                  |
| размер ID                      | getDimensionID()            | int                                    |
| height                         | getHeight()                 | int                                    |
| горизонт                       | getHorizon()                | double                                 |
| lightBrightnesTable            | getLightBrightnesTable()    | float[]                                |
| фактор движения                | getMovementFactor()         | double                                 |
| randomizedSpawnPoint           | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| сохранить папку                | getSaveFolder()             | string                                 |
| seed                           | getSeed()                   | long                                   |
| создать координаты             | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| Точка появления                | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor                 | getVoidFogYFactor()         | double                                 |
| мирное время                   | getWorldTime()              | long                                   |
| canRespawnHere                 | canRespawnHere()            | bool                                   |
| waterVaporize                  | не WaterVaporize()          | bool                                   |
| фонарь                         | hasSkyLight()               | bool                                   |
| daytime                        | isDaytime()                 | bool                                   |
| незер                          | isNether()                  | bool                                   |
| цвет неба                      | isSkyColored()              | bool                                   |
| поверхностный мир              | isSurfaceWorld()            | bool                                   |

## Методы с параметрами

### получить биом на определённой позиции

Используйте либо объект [IBlockPos](/Vanilla/World/IBlockPos/) .  
возвращает объект [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldProvObj.getBiome(позиция IBlockPos);
```

### получить Лунную Фазу на определенное время

Используйте длинную.  
Возвращает внутрь.

```zenscript
worldProvObj.getMoonPhase(долгое время);
```

### получить размер Respawn для определенного игрока

Используйте [IPlayer](/Vanilla/Players/IPlayer/) объект.  
Возвращает новый объект IWorldProvider.

```zenscript
worldProvObj.getRespawnDimension(IPlayer player);
```

### получить Brightnes (фактор) на конкретный

Использовать число с плавающей точкой.  
Возвращает число с плавающей точкой.

```zenscript
worldProvObj.getStarBrightness(плавает);
worldProvObj.getSunBrightness(плавает);
worldProvObj.getSunBrightnessFactor(плавает);
```

### Проверьте, имеет ли блок высокую влажность

Используйте [IBlockPos](/Vanilla/World/IBlockPos/) объект.  
Возвращает логическое значение.

```zenscript
worldProvObj.isBlockHighHumidity(позиция IBlockPos);
```