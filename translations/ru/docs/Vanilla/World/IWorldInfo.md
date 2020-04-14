# IWorldInfo

Интерфейс IWorldInfo используется, чтобы получать больше информации от объектов [IWorld](/Vanilla/World/IWorld/).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.world.IWorldInfo;`

## Методы без параметров и геттеры

| Геттер                | Метод                      | Возвращаемый тип |
| --------------------- | -------------------------- | ---------------- |
| commandsAllowed       | isCommandsAllowed()        | bool             |
| borderCenterX         | getBorderCenterX()         | double           |
| borderCenterZ         | getBorderCenterZ()         | double           |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | double           |
| borderSafeZone        | getBorderSafeZone()        | double           |
| borderSize            | getBorderSize()            | double           |
| borderWarningDistance | getBorderWarningDistance() | int              |
| borderWarningTime     | getBorderWarningTime()     | int              |
| cleanWeatherTime      | getCleanWeatherTime()      | double           |
| difficulty            | getDifficulty()            | string           |
| generatorOptions      | getGeneratorOptions()      | string           |
| lastTimePlayed        | getLastTimePlayed()        | long             |
| rainTime              | getRainTime()              | int              |
| saveVersion           | getSaveVersion()           | int              |
| seed                  | getSeed()                  | long             |
| spawnX                | getSpawnX()                | int              |
| spawnY                | getSpawnY()                | int              |
| spawnZ                | getSpawnZ()                | int              |
| thunderTime           | getThunderTime()           | int              |
| versionId             | getVersionId()             | int              |
| versionName           | getVersionName()           | string           |
| worldName             | getWorldName()             | string           |
| worldTotalTime        | getWorldTotalTime()        | long             |
| boderLerpTarget       | getBoderLerpTarget()       | double           |
| boderLerpTime         | getBoderLerpTime()         | long             |
| difficultyLocked      | isDifficultyLocked()       | bool             |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool             |
| initialized           | isInitialized()            | bool             |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool             |
| thundering            | isThundering()             | bool             |
| versionSnapshot       | isVersionSnapshot()        | bool             |