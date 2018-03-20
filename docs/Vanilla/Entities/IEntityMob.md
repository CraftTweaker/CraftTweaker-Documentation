# 怪物

就是游戏中的怪物。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明 [数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.entity.IEntityMob;`

## 继承自[生物](IEntityCreature)
怪物继承自[生物](IEntityCreature)。这意味着所有[生物](IEntityCreature)对象函数，均可在怪物对象上使用。

## 方法
### ZenMethods
#### 检查这个怪物是否会禁止玩家睡觉
这个方法需要传入一个[玩家](/Vanilla/Players/IPlayer)对象。   
返回一个布尔值。
```
entMobObj.isPreventingPlayerRest(IPlayer player);
```