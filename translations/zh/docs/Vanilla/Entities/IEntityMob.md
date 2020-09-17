# IEntityMod

A Mod.

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.entity. EntityMob;`

## 扩展 [IEntityCreathure](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). 这意味着 [IEntityCreathure](/Vanilla/Entities/IEntityCreature/) 对象的所有可用函数也可供IEntityMob使用。

## 方法

### ZenMethods

#### 检查生物是否阻止玩家睡眠

该方法需要 [IPlayer](/Vanilla/Players/IPlayer/) 对象。  
返回一个布尔值。

```zenscript
entMobObj.isPreventingPlayerRest(IPlayer player玩家)；
```