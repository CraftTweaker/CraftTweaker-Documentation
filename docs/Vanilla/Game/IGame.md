# 游戏 Class

游戏 Class 用于获取基本游戏信息。
可以通过`game`使用。


## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。   
`import crafttweaker.game.IGame;`

## Zengetters

| Zengetter | 它能干什么?                              | 返回值类型                                                      | 用法            |
|-----------|-----------------------------------------|----------------------------------------------------------------|-----------------|
| biomes    |  以列表形式返回所有注册过的生物群系        | <[生物群系](/Vanilla/Biomes/IBiome)>列表                        | `game.biomes`   |
| blocks    |  以列表形式返回所有注册过的方块            | <[方块定义](/Vanilla/Blocks/IBlockDefinition)>列表              | `game.blocks`   |
| entities  |  以列表形式返回所有注册过的实体            | <[实体定义](/Vanilla/Entities/IEntityDefinition)>列表           | `game.entities` |
| items     |  以列表形式返回所有注册过的物品            | <[物品定义](/Vanilla/Items/IItemDefinition)>列表                | `game.items`    |
| liquids   |  以列表形式返回所有注册过的流体            | <[流体定义](/Vanilla/Liquids/ILiquidDefinition)>列表            | `game.liquids`  |
| potions   |  以列表形式返回所有注册过的药水            | <[药水](/Vanilla/Potions/IPotion)>列表                          | `game.potions`  |

## 方法

### 获取实体
```
//getEntity(实体名称)

//两种方法本质上没有区别
val sheep = game.getEntity("sheep");
val sheep1 = <entity:minecraft:sheep>;
```

### 设置本地化

设置本地化。 
参数均为字符串。
`game.setLocalization(key, 值);`  
`game.setLocalization(语言, key, 值);`

### 本地化

返回本地化的字符串。
`game.localize(key)`  
`game.localize(key, 语言)`
