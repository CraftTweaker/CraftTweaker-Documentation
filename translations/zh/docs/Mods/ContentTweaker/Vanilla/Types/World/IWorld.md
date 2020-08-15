# IWorld

IWorld对象代表当前玩家所在的世界。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.World；`

## 无参数的 ZenMethods 和 ZenGetters

| ZenMethod（ZenMethod） | ZenGetter | 退货类型                                                           | 描述                                                                 |
| -------------------- | --------- | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| isRemote()           | 远程        | boolean                                                        | 如果世界是一个“奴隶”客户端，则为真；更改将不会从这个世界上保存或传播。 例如，服务器世界有这个设置为假，客户端世界有这个设置为真。 |
| isRaining()          | 正在下雨      | boolean                                                        | 如果它正在下雨，则返回 true                                                   |
| isThundering()       | 雷阵雨       | boolean                                                        | 如果它目前正在缩小，则返回 true                                                 |
| getMoonPhase()       | 月经阶段      | 整数                                                             | 返回当前月球阶段                                                           |
| isDayTime()          | dayTime   | boolean                                                        | 检查它是否是白天                                                           |
| getWorldTime()       | 时间        | 长                                                              | 返回世界时间                                                             |
| getDimension()       | 尺寸        | 整数                                                             | 返回世界尺寸                                                             |
| isSurfaceWorld()     | 表面世界      | boolean                                                        | 返回是否在表面世界                                                          |
| getDimensionType()   | 尺寸类型      | 字符串[string]                                                    | 返回维度类型名称                                                           |
| getRandom()          | 随机的       | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | 返回世界随机数生成器                                                         |

## 带参数的 ZenMethods

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- 布尔型setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockpos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockpos);