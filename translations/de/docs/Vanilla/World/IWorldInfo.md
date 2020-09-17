# IWorldInfo

Das World Info Interface wird verwendet, um noch mehr Informationen aus einem [IWorld](/Vanilla/World/IWorld/) Objekt zu holen.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`import craftweaker.world.IWorldInfo;`

## ZenMethoden ohne Parameter und ZenGetters

| ZenGetter              | ZenMethode                 | Rückgabetyp |
| ---------------------- | -------------------------- | ----------- |
| commandsErlaubt        | isCommandsAllowed()        | bool        |
| borderCenterX          | getBorderCenterX()         | double      |
| borderCenterZ          | getBorderCenterZ()         | double      |
| borderSchadenPerBlock  | getBorderDamagePerBlock()  | double      |
| borderSafeZone         | getBorderSafeZone()        | double      |
| bordersize             | getBorderSize()            | double      |
| borderWarnung-Distanz  | getBorderWarningDistance() | int         |
| borderWarnungszeit     | getBorderWarningTime()     | int         |
| cleanWeatherTime       | getCleanWeatherTime()      | double      |
| Schwierigkeit          | getDifficulty()            | string      |
| generatoroptionen      | getGeneratorOptions()      | string      |
| zuletzt gespielt       | getLastTimePlayed()        | long        |
| Regenzeit              | getRainTime()              | int         |
| saveVersion            | getSaveVersion()           | int         |
| seed                   | getSeed()                  | long        |
| spawnX                 | getSpawnX()                | int         |
| spawnY                 | getSpawnY()                | int         |
| spawnZ                 | getSpawnZ()                | int         |
| donnerzeit             | getThunderTime()           | int         |
| versionId              | getVersionId()             | int         |
| versionname            | getVersionName()           | string      |
| Weltname               | getWorldName()             | string      |
| worldTotalTime         | getWorldTotalTime()        | long        |
| boderLerpTarget        | getBoderLerpTarget()       | double      |
| boderLerpTime          | getBoderLerpTime()         | long        |
| schwierig gesperrt     | isDifficultyLocked()       | bool        |
| hardcoreMode aktiviert | isHardcoreModeEnabled()    | bool        |
| initialisiert          | isInitialized()            | bool        |
| mapFeaturesaktiviert   | isMapFeaturesEnabled()     | bool        |
| donnernd               | isThundering()             | bool        |
| versionSnapshot        | isVersionSnapshot()        | bool        |