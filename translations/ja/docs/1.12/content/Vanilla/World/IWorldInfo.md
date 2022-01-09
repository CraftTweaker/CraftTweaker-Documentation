# IWorldInfo

World Infoインタフェースは、[IWorld](/Vanilla/World/IWorld/)オブジェクトからより多くの情報を取得するのに使います。

## パッケージのインポート
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`



## ZenMethods without parameters and ZenGetters

| ZenGetter             | ZenMethod                  | 戻り値    |
| --------------------- | -------------------------- | ------ |
| commandsAllowed       | isCommandsAllowed()        | bool   |
| borderCenterX         | getBorderCenterX()         | double |
| borderCenterZ         | getBorderCenterZ()         | double |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | double |
| borderSafeZone        | getBorderSafeZone()        | double |
| borderSize            | getBorderSize()            | double |
| borderWarningDistance | getBorderWarningDistance() | int    |
| borderWarningTime     | getBorderWarningTime()     | int    |
| cleanWeatherTime      | getCleanWeatherTime()      | double |
| difficulty            | getDifficulty()            | string |
| generatorOptions      | getGeneratorOptions()      | string |
| lastTimePlayed        | getLastTimePlayed()        | long   |
| rainTime              | getRainTime()              | int    |
| saveVersion           | getSaveVersion()           | int    |
| seed                  | getSeed()                  | long   |
| spawnX                | getSpawnX()                | int    |
| spawnY                | getSpawnY()                | int    |
| spawnZ                | getSpawnZ()                | int    |
| thunderTime           | getThunderTime()           | int    |
| versionId             | getVersionId()             | int    |
| versionName           | getVersionName()           | string |
| worldName             | getWorldName()             | string |
| worldTotalTime        | getWorldTotalTime()        | long   |
| boderLerpTarget       | getBoderLerpTarget()       | double |
| boderLerpTime         | getBoderLerpTime()         | long   |
| difficultyLocked      | isDifficultyLocked()       | bool   |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool   |
| initialized           | isInitialized()            | bool   |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool   |
| thundering            | isThundering()             | bool   |
| versionSnapshot       | isVersionSnapshot()        | bool   |