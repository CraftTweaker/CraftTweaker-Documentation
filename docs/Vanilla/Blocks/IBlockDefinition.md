# 方块定义（IBlockDefinition）

方块定义对象能够给方块提供附加信息。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。    
`import crafttweaker.block.IBlockDefinition;`

## 调用一个方块定义（IBlockDefinition）对象

* 对一个 [方块](IBlock) 对象使用 `definition` ZenGetter 即可。

## 调用一个方块定义（IBlockDefinition）列表

* 使用 `game.blocks` 能够获取游戏中所有方块的定义列表。

## ZenGetters/ZenSetters

|    ZenGetter    |      ZenSetter      |      返回值/说明       |                        类型                        |
| :-------------: | :-----------------: | :--------------------: | :------------------------------------------------: |
|                 |   canSpawnInBlock   | 实体是否能在方块上生成 |                        bool                        |
|   creativeTab   |     creativeTab     |     创造模式标签页     | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab) |
|  defaultState   |                     |                        |             [IBlockState](IBlockState)             |
|                 | defaultSlipperiness |                        |                       float                        |
|       id        |                     |      返回方块 ID       |                       string                       |
|   displayName   |                     |    返回方块显示名称    |                       string                       |
|                 |      hardness       |      设定方块硬度      |                        int                         |
|  harvestLevel   |                     |    返回方块采掘等级    |                        int                         |
|   harvestTool   |                     |   返回方块的采掘工具   |                       string                       |
|                 |     lightOpacy      |     设定方块透光性     |                        int                         |
|                 |     lightLevel      |      设定方块亮度      |                        int                         |
|                 |     resistance      |     设定方块抗爆性     |                        int                         |
| unlocalizedName |                     | 返回方块的语言文件 key |                       string                       |
|  tickRandomly   |    tickRandomly     |    方块的随机 tick     |                        bool                        |


## ZenMethods
### 设定方块不可破坏
不传入任何参数。  
不返回任何数值。  
和 `hardness = -1; `功效一致。
```
defObj.setUnbreakable();
```

### 获取一个特点世界的 tick 频率
需要传入[世界](/Vanilla/World/IWorld)对象。  
返回整型数字。
```
defObj.getTickRate(IWorld world);
```

### 检查一个方块是否可以被放置在另一个方块上
需要传入[世界](/Vanilla/World/IWorld)对象，一个[方块位置](/Vanilla/World/IBlockPos)对象，依据具体的方法不同，可能还需要 [IFacing](/Vanilla/World/IFacing) 对象。  
返回布尔值。
```
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```


### 获取方块的滑动数值
需要传入[方块状态](IBlockState)对象，一个[方块访问](/Vanilla/World/IBlockAccess)对象，一个[方块位置](/Vanilla/World/IBlockPos)对象，以及一个可选的[实体](/Vanilla/Entites/IEntity)对象。  
返回浮点值。
```
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### 设置方块挖掘等级
需要传入字符串和整型数。  
不返回数值。
```
defObj.setHarvestLevel(string toolclass, int level);
```
