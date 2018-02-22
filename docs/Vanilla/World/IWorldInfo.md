# 世界信息接口

世界信息接口用于从 [IWorld](IWorld) 对象中获取更多信息。

## 导入包
如果你遇到任何问题，可以尝试通过导入相关包来解决。
`import crafttweaker.world.IWorldInfo;`



## 没有参数和ZenGetters的ZenMethods

| ZenGetter              | ZenMethod                  |返回类型 |
|------------------------|----------------------------|------------|
| 命令允许        | isCommandsAllowed()        | 布尔值       |
| 边境中心X坐标          | getBorderCenterX()         | 双精度     |
| 边境中心Z坐标          | getBorderCenterZ()         | 双精度     |
| 边境之地每方块的伤害   | getBorderDamagePerBlock()  | 双精度     |
| 边境之地安全区         | getBorderSafeZone()        | 双精度     |
| 边境之地大小             | getBorderSize()            | 双精度     |
| 边境之地警告距离  | getBorderWarningDistance() | 整型        |
| 边境之地警告时间      | getBorderWarningTime()     | 整型        |
| 无天气时间       | getCleanWeatherTime()      | 双精度     |
| 难度             | getDifficulty()            | 字符串     |
| 生成选项       | getGeneratorOptions()      | 字符串     |
| 上次玩过的时间         | getLastTimePlayed()        | 长整型       |
| 下雨时间               | getRainTime()              | 整型        |
| 保存版本            | getSaveVersion()           | 整型        |
| 种子                   | getSeed()                  | 长整型       |
| 出生点X坐标                 | getSpawnX()                | 整型        |
| 出生点Y坐标                  | getSpawnY()                | 整型        |
| 出生点Z坐标                  | getSpawnZ()                | 整型        |
| 打雷时间            | getThunderTime()           | 整型        |
| 版本Id              | getVersionId()             | 整型        |
| 版本名称            | getVersionName()           | 字符串     |
| 世界名称              | getWorldName()             | 字符串     |
| 世界总时间         | getWorldTotalTime()        | 长整型       |
| boderLerpTarget        | getBoderLerpTarget()       | 双精度     |
| boderLerpTime          | getBoderLerpTime()         | 长整型       |
| 难度锁定       | isDifficultyLocked()       | 布尔值       |
| 极限模式已启用    | isHardcoreModeEnabled()    | 布尔值       |
| 初始化            | isInitialized()            | 布尔值       |
| 地图功能已启用     | isMapFeaturesEnabled()     | 布尔值       |
| 打雷             | isThundering()             | 布尔值       |
| 快照版本        | isVersionSnapshot()        | 布尔值       |
