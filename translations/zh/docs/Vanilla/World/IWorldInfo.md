# IWorldInfo

世界信息接口用于从 [IWorld](/Vanilla/World/IWorld/) 对象中获取更多信息。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入craftweaper.worldIWorldInfo；`

## 无参数的 ZenMethods 和 ZenGetters

| ZenGetter       | ZenMethod（ZenMethod）       | 返回值类型 |
| --------------- | -------------------------- | ----- |
| 已允许命令           | isCommandsalled()          | 布尔值   |
| 边界中心            | getBorderCenterX()         | 双精度   |
| 边界中心            | getBorderCenterZ()         | 双精度   |
| 边界伤害PerBlock    | getBorderDamagePerBlock()  | 双精度   |
| 边界安全区           | getBorderSafeZone()        | 双精度   |
| 边框大小            | getBorderSize()            | 双精度   |
| 边界警告距离          | getBorderWarningDistance() | 整数    |
| 边界警告时间          | getBorder警告时间()            | 整数    |
| 清洁天气时间          | getCleanWeatherTime()      | 双精度   |
| 难度：             | getDifficulty()            | 字符串   |
| 生成器选项           | getGeneratorOptions()      | 字符串   |
| 上次播放时间          | getLastTimePlayed()        | 长     |
| 雨时间             | getRainTime()              | 整数    |
| 保存版本            | getSaveVersion()           | 整数    |
| 种子              | getSeed()                  | 长     |
| 生成              | getSpawnX()                | 整数    |
| 出生日期            | getSpawnY()                | 整数    |
| 生成 nZ           | getSpawnZ()                | 整数    |
| 雷达时间            | getThunderTime()           | 整数    |
| versionId       | getVersionId()             | 整数    |
| 版本名称            | getVersionName()           | 字符串   |
| 世界名称            | getWorldName()             | 字符串   |
| 世界总时间           | getWorldTotalTime()        | 长     |
| boderLerpTarget | getBoderLerpTarget()       | 双精度   |
| boderLerpTime   | getBoderLerpTime()         | 长     |
| 难度锁定            | isdifficultyLocked()       | 布尔值   |
| 硬coreMode启用     | isHardcoreModeEnabled()    | 布尔值   |
| 初始化             | isalized()                 | 布尔值   |
| 地图功能已启用         | isMapFeatures启用()          | 布尔值   |
| 雷阵雨             | isThundering()             | 布尔值   |
| 版本快照            | isVersionSnapshot()        | 布尔值   |