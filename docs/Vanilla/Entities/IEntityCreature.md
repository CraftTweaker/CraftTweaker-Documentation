# 生物

一个生物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.IEntityCreature;`

## [有生命实体](IEntityLiving)对象的扩展
生物是[有生命实体](IEntityLiving)的扩展。这说明所有适用于[有生命实体](IEntityLiving)对象的物体也适用于生物对象。

## Methods
### ZenGetters/Setters
|      ZenGetter       |                 类型                 |
| :------------------: | :----------------------------------: |
|       hasPath        |                布尔值                |
| isWithinHomeDistance |                布尔值                |
|     homePosition     | [方块位置](/Vanilla/World/IBlockPos) |
| maximumHomeDistance  |                浮点数                |
|       hasHome        |                布尔值                |

### ZenMethods
#### 播放生物发出的声音
不传入任何参数。 
不返回任何数值。

```
entCreObj.playLivingSound();
```

#### 设置或移除家
第一条需要传入[方块位置](/Vanilla/World/IBlockPos)对象和一个整数。
第二条不传入任何数值。
两条均不返回任何数值。

```
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### 检测一个位置是否在家的范围内
需要传入[方块位置](/Vanilla/World/IBlockPos)对象。
返回布尔值。

```
entAnObj.isPositionWithinHomeDistance
```
