# IWorldInfo

World Infoインタフェースは、[IWorld](/Vanilla/World/IWorld/)オブジェクトからより多くの情報を取得するのに使います。

## パッケージのインポート

問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。  
`import crafttweaker.world.IWorldInfo;`

## パラメータなしのZenMethodsとZenGetters

| ZenGetter             | ZenMethod                  | 戻り値の型   |
| --------------------- | -------------------------- | ------- |
| commandsAllowed       | isCommandsAllowed()        | bool型   |
| borderCenterX         | getBorderCenterX()         | double型 |
| borderCenterZ         | getBorderCenterZ()         | double型 |
| borderDamagePerBlock  | getBorderDamagePerBlock()  | double型 |
| borderSafeZone        | getBorderSafeZone()        | double型 |
| borderSize            | getBorderSize()            | double型 |
| borderWarningDistance | getBorderWarningDistance() | int型    |
| borderWarningTime     | getBorderWarningTime()     | int型    |
| cleanWeatherTime      | getCleanWeatherTime()      | double型 |
| difficulty            | getDifficulty()            | 文字列型    |
| generatorOptions      | getGeneratorOptions()      | 文字列型    |
| lastTimePlayed        | getLastTimePlayed()        | long型   |
| rainTime              | getRainTime()              | int型    |
| saveVersion           | getSaveVersion()           | int型    |
| seed                  | getSeed()                  | long型   |
| spawnX                | getSpawnX()                | int型    |
| spawnY                | getSpawnY()                | int型    |
| spawnZ                | getSpawnZ()                | int型    |
| thunderTime           | getThunderTime()           | int型    |
| versionId             | getVersionId()             | int型    |
| versionName           | getVersionName()           | 文字列型    |
| worldName             | getWorldName()             | 文字列型    |
| worldTotalTime        | getWorldTotalTime()        | long型   |
| boderLerpTarget       | getBoderLerpTarget()       | double型 |
| boderLerpTime         | getBoderLerpTime()         | long型   |
| difficultyLocked      | isDifficultyLocked()       | bool型   |
| hardcoreModeEnabled   | isHardcoreModeEnabled()    | bool型   |
| initialized           | isInitialized()            | bool型   |
| mapFeaturesEnabled    | isMapFeaturesEnabled()     | bool型   |
| thundering            | isThundering()             | bool型   |
| versionSnapshot       | isVersionSnapshot()        | bool型   |