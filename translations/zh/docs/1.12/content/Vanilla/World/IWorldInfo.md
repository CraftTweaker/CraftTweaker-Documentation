# IWorldInfo

The World Info interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## 导入相关包
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldInfo;`



## ZenMethods without parameters and ZenGetters

| ZenGetter             | ZenMethod                  | 返回值类型  |
| --------------------- | -------------------------- | ------ |
| commandsAllowed       | isCommandsAllowed()        | bool   |
| borderCenterX         | getBorderCenterX()         | 双精度    |
| borderCenterZ         | getBorderCenterZ()         | 双精度    |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | 双精度    |
| borderSafeZone        | getBorderSafeZone()        | 双精度    |
| borderSize            | getBorderSize()            | 双精度    |
| borderWarningDistance | getBorderWarningDistance() | int    |
| borderWarningTime     | getBorderWarningTime()     | int    |
| cleanWeatherTime      | getCleanWeatherTime()      | 双精度    |
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
| boderLerpTarget       | getBoderLerpTarget()       | 双精度    |
| boderLerpTime         | getBoderLerpTime()         | long   |
| difficultyLocked      | isDifficultyLocked()       | bool   |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool   |
| initialized           | isInitialized()            | bool   |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool   |
| thundering            | isThundering()             | bool   |
| versionSnapshot       | isVersionSnapshot()        | bool   |