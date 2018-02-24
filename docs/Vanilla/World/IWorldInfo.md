# 世界信息接口

IWorldInfo用于从 [IWorld](IWorld) 对象中获取更多信息。

## 导入包
如果你遇到任何问题，可以尝试通过导入相关包来解决。
`import crafttweaker.world.IWorldInfo;`



## 没有参数和 ZenGetters 的 ZenMethods

|       ZenGetter       |         ZenMethod          | 返回类型 |         描述         |
| :-------------------: | :------------------------: | :------: | :------------------: |
|    commandsAllowed    |    isCommandsAllowed()     |  布尔值  |       命令允许       |
|     borderCenterX     |     getBorderCenterX()     |  双精度  |    边境中心X坐标     |
|     borderCenterZ     |     getBorderCenterZ()     |  双精度  |    边境中心Z坐标     |
| borderDamagePerBlock  | getBorderDamagePerBlock()  |  双精度  | 边境之地每方块的伤害 |
|    borderSafeZone     |    getBorderSafeZone()     |  双精度  |    边境之地安全区    |
|      borderSize       |      getBorderSize()       |  双精度  |     边境之地大小     |
| borderWarningDistance | getBorderWarningDistance() |   整型   |   边境之地警告距离   |
|   borderWarningTime   |   getBorderWarningTime()   |   整型   |   边境之地警告时间   |
|   cleanWeatherTime    |   getCleanWeatherTime()    |  双精度  |      无天气时间      |
|      difficulty       |      getDifficulty()       |  字符串  |         难度         |
|   generatorOptions    |   getGeneratorOptions()    |  字符串  |       生成选项       |
|    lastTimePlayed     |    getLastTimePlayed()     |  长整型  |    上次玩过的时间    |
|       rainTime        |       getRainTime()        |   整型   |       下雨时间       |
|      saveVersion      |      getSaveVersion()      |   整型   |       保存版本       |
|         seed          |         getSeed()          |  长整型  |         种子         |
|        spawnX         |        getSpawnX()         |   整型   |     出生点X坐标      |
|        spawnY         |        getSpawnY()         |   整型   |     出生点Y坐标      |
|        spawnZ         |        getSpawnZ()         |   整型   |     出生点Z坐标      |
|      thunderTime      |      getThunderTime()      |   整型   |       打雷时间       |
|       versionId       |       getVersionId()       |   整型   |        版本Id        |
|      versionName      |      getVersionName()      |  字符串  |       版本名称       |
|       worldName       |       getWorldName()       |  字符串  |       世界名称       |
|    worldTotalTime     |    getWorldTotalTime()     |  长整型  |      世界总时间      |
|    boderLerpTarget    |    getBoderLerpTarget()    |  双精度  |   boderLerpTarget    |
|     boderLerpTime     |     getBoderLerpTime()     |  长整型  |    boderLerpTime     |
|   difficultyLocked    |    isDifficultyLocked()    |  布尔值  |       难度锁定       |
|  hardcoreModeEnabled  |  isHardcoreModeEnabled()   |  布尔值  |    极限模式已启用    |
|      initialized      |      isInitialized()       |  布尔值  |        初始化        |
|  mapFeaturesEnabled   |   isMapFeaturesEnabled()   |  布尔值  |    地图功能已启用    |
|      thundering       |       isThundering()       |  布尔值  |         打雷         |
|    versionSnapshot    |    isVersionSnapshot()     |  布尔值  |       快照版本       |
