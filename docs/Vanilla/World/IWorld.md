# 世界

IWorld对象包含了游戏内整个维度的信息。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import) 相关类以避免某些错误。  
`import crafttweaker.world.IWorld`

## 扩展方块属性接口
IBlockState 扩展了 [IBlockAccess](IBlockAccess)。这意味着在 [IBlockAccess](IBlockAccess) 对象上的可用方法也同样适用于 IBlockState 对象。

## 创建一个IWorld对象
通常情况下，你可以从实体或其他功能来获得这个函数。不过如果你想自己重新创建一个的话，请遵循以下步骤：
请注意，此方法只应在函数内调用，这些函数是在minecraft中运行的，而不是在加载循环中运行。
```
crafttweaker.world.IWorld.create(int id);
```

## 没有参数和ZenGetters的ZenMethods

|     ZenMethod      |   ZenGetter   |             返回类型             |                             描述                             |
| :----------------: | :-----------: | :------------------------------: | :----------------------------------------------------------: |
|     isRemote()     |    remote     |              布尔值              | 如果来自“子”客户端的世界设置为True；则当前世界的一切改变都不会被保存或传播。例如，服务端世界将其设为False，客户端世界将其设为True。 |
|    isRaining()     |    raining    |              布尔值              |                 如果当前正在下雨则返回true。                 |
|   isThundering()   |  thundering   |              布尔值              |                如果当前正在打雷，则返回true。                |
|   getMoonPhase()   |   moonPhase   |               整型               |                        返回当前月相。                        |
|    isDayTime()     |    dayTime    |              布尔值              |                       检查是否是白天。                       |
|   getWorldTime()   |     time      |              长整型              |                     返回当前世界的时间。                     |
|   getDimension()   |   dimension   |               整型               |                     返回当前世界的维度。                     |
|  isSurfaceWorld()  | surfaceWorld  |              布尔值              |                      返回你是否在地表。                      |
| getDimensionType() | dimensionType |              字符串              |                     返回维度的类型名称。                     |
|   getWorldType()   |   worldType   |              字符串              |                      返回世界类型名称。                      |
|   getWorldInfo()   |   worldInfo   |     [IWorldInfo](IWorldInfo)     |         返回世界信息。 以便于检索更多世界上的信息。          |
|   getProvider()    |   provider    | [IWorldProvider](IWorldProvider) |         返回世界供应器。以便于检索世界上更多的信息。         |

## 带参数的ZenMethods
### 获取特定位置的生物群系

使用一个 [IPosition3f](/Vanilla/Utils/Position3f) 或者一个 [IBlockPos](IBlockPos) 对象。  
来返回一个 [IBiome](/Vanilla/Biomes/IBiome) 对象。
```
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```


### 获取特定位置的亮度
使用三个整型或者 [IBlockPos](IBlockPos) 对象。
来返回一个整型。
```
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### 获取特定位置的方块
使用三个整型或者 [IBlockPos](IBlockPos) 对象。
来返回一个 [IBlock](/Vanilla/Blocks/IBlock) 对象。
```
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### 获取或设定特定位置的方块状态
使用一个 [IBlockPos](IBlockPos) 对象和 [IBlockState](/Vanilla/Blocks/IBlockState) 对象进行赋值。
取值返回为 [IBlockState](/Vanilla/Blocks/IBlockState)，赋值为布尔值。

```
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
```

### Spawn entity
Use an [IEntity](/Vanilla/Entities/IEntity) object.  
Returns a bool that states if the spawn was successful.
```
worldObj.spawnEntity(IEntity entity);
```
