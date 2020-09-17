# IWorld

IWorld 对象包含游戏中一个维度的信息。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.world.IWorld`

## 继承自 IBlockProperties

IBlockState扩展 [IBlockAccess](/Vanilla/World/IBlockAccess/)。 这意味着 [IBlockAccess](/Vanilla/World/IBlockAccess/) 对象可以使用的所有方法也适用于IBlockState物体。

## 创建 IWorld 对象

通常，您可以从实体或其他函数获取此对象。 如果您需要自己创建它， 这是前进的方式：  
注意，此方法只能调用在需要在Minecraft中运行的函数内， 不在加载圆圈中。

```zenscript
craftminvest.world.IWorld.getFromID(int id)；
```

## 无参数的 ZenMethods 和 ZenGetters

| ZenMethod（ZenMethod） | ZenGetter | 退货类型                                             | 描述                                                                 |
| -------------------- | --------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| isRemote()           | 远程        | boolean                                          | 如果世界是一个“奴隶”客户端，则为真；更改将不会从这个世界上保存或传播。 例如，服务器世界有这个设置为假，客户端世界有这个设置为真。 |
| isRaining()          | 正在下雨      | boolean                                          | 如果它目前正在降雨，则返回 true。                                                |
| isThundering()       | 雷阵雨       | boolean                                          | 如果它目前正在缩小，则返回 true。                                                |
| getMoonPhase()       | 月经阶段      | 整数                                               | 返回当前月亮阶段。                                                          |
| isDayTime()          | dayTime   | boolean                                          | 检查它是否是白天。                                                          |
| getWorldTime()       | 时间        | 长                                                | 返回世界时间。                                                            |
| getDimension()       | 尺寸        | 整数                                               | 返回世界层面。                                                            |
| isSurfaceWorld()     | 表面世界      | boolean                                          | 返回您是否在表面世界中。                                                       |
| getDimensionType()   | 尺寸类型      | 字符串[string]                                      | 返回维度的类型名称。                                                         |
| getWorldType()       | worldType | 字符串[string]                                      | 返回世界类型名称。                                                          |
| getWorldInfo()       | 世界信息      | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | 返回世界信息。 可以用来检索更多关于世界的信息。                                           |
| getProvider()        | 提供商       | [IWorldProvider](/Vanilla/World/IWorldProvider/) | 返回世界提供者。 可以用来检索更多关于世界的信息。                                          |

## 带参数的 ZenMethods

### 在指定位置获取生物组

使用 [IPosition3f](/Vanilla/Utils/Position3f/) 或 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。  
返回一个 [IBiome](/Vanilla/Biomes/IBiome/) 对象。

```zenscript
worldObj.getBiome(IPosition3f 位置)；
worldObj.getBiome(IBlockPos 位置)；
```

### 在指定位置获得亮度

使用三块粉丝或 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。 返回整数。

```zenscript
worldObj.getBrightness(int x, int y, int z)；
worldObj.getBrightness(IBlockPos 位置)；
```

### 在指定位置获取块

使用三块粉丝或 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。 返回 [IBlock](/Vanilla/Blocks/IBlock/) 对象。

```zenscript
worldObj.getBlock(int x, int y, int z)；
worldObj.getBlock(IBlockPos 位置)；
```

### 在指定位置获取或设置方块状态

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象，同时也使用 [IBlockState](/Vanilla/Blocks/IBlockState/) 对象。 可选的 [IData](/Vanilla/Data/IData/) 对象在设置时可以定义区块状态的 TileEntity 的 NBT 数据。 获取返回一个 [IBlockState](/Vanilla/Blocks/IBlockState/), 设置一个布尔值。

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### 生成实体

使用 [IEnty](/Vanilla/Entities/IEntity/) 对象。  
返回一个如果生成成功状态的布尔值。

```zenscript
worldObj.spawnEntity(Ientity entity);
```

### Get a raytrace result

使用 [IVector3d](/Vanilla/World/IVector3d/) 对象和三个布尔值获得 [IRayTraceResult](/Vanilla/World/IRayTraceResult/)。  
**可以为空**

第一个矢量描述了起点，第二个矢量描述了我们正在搜索的方向和长度。  
默认只有最后一个参数为 true。

```zenscript
worldObj.rayTraceBlocks(IVector3d begin, IVector3d ray, @Optional boolian stopOnLiquid, @Optional boolian ignoreBlockwithout BoundingBox, @Optional(true) 布尔返回 LastUncollidableBlock)
```

### 获取选中的块

使用 [IBlockPos](/Vanilla/World/IBlockPos/), [IRayTraceResults 结果](/Vanilla/World/IRayTraceResult/) 和 [IPlayer](/Vanilla/Players/IPlayer/).  
返回 [ItemStack](/Vanilla/Items/IItemStack/)。  
**可以为空**

获取可以通过在位置选择方块获取的IItemStack。

```zenscript
worldObj.getPickedBlock(IBlockPos pos，IRayTraceResult RayTraceResult，IPlayer player player)；
```