# IentityCreenure

创建。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.entity. EntityCreate；`

## 扩展 [IentityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature extension [IEntityLiving](/Vanilla/Entities/IEntityLiving/). 这意味着 [IEntityLive](/Vanilla/Entities/IEntityLiving/) 对象的所有功能也都可供IEntityCreaty使用。

## 方法

### ZenGetters/Setters

| ZenGetter           | 类型                                     |
| ------------------- | -------------------------------------- |
| hasPath             | bool                                   |
| isWithinHome距离      | 布尔值                                    |
| 家居位置                | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance | float                                  |
| hasHome             | bool                                   |

### ZenMethods

#### 播放活的声音

方法不需要任何东西。  
没有返回任何东西。

```zenscript
entCreObj.playLivingSound();
```

#### 设置或离开主页

第一个方法需要一个 [IBlockPos](/Vanilla/World/IBlockPos/) 对象和一个整数。  
第二个方法不需要任何。  
两种方法都不会返回任何东西。

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### 检查位置是否在首页距离内

方法需要 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。  
返回一个布尔值。

```zenscript
entAnObj.isPositionWithinHomeDistance
```