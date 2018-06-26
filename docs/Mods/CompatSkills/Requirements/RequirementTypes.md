# 条件类型（Requirement Types）


## 进度:
在 Skillable 模组（源模组）中就已支持进度作为一种条件类型，现在在代码上也有所改进，使其比以往更加可靠的解锁物品。
进度的用法如下:
```
例子:
adv|ResourceLocation
//ResourceLocation 资源位置（模组名称:标签页名称/进度名称）

实例:
adv|minecraft:husbandry/plant_seed
```

它兼容所有的进度，包括由其他模组添加的进度，但需要指定正确的资源位置。



## 维度:
维度是 CompatSkills 加入的条件，有以下两种方法可以将维度作为条件锁定物品:
- 在一个 **指定的** 维度。
- 在 **除了** 指定的维度以外的 **任意** 维度。
```
例子:
dim|integer
//integer 整型（维度ID）

实例:
dim|0
```



## 游戏阶段:
游戏阶段是 CompatSkills 加入的条件，允许你将游戏阶段作为条件锁定物品。
游戏阶段的用法如下:
```
例子:
stage|stageName
//stageName 阶段名称

实例:
stage|test
```



## 物品:
物品是 CompatSkills 加入的条件，允许你用物品作为条件锁定物品。通过在主手或副手持有指定物品或带有 NBT 数据的物品或某个模组的物品解锁物品。
物品的用法如下:
```
例子:
// 指定模组的任意物品
stack|modid

// 方块实体附加值为0的指定物品
stack|modid:item

// 有指定方块实体附加值的指定物品（* = 任意方块实体附加值）
stack|modid:item:meta

// 指定 NBT 数据的任意物品
stack||NBT as JSON

// 指定 NBT 数据且来自指定模组的任意物品
stack|modid|NBT as JSON

// 指定 NBT 数据且方块实体附加值为0的指定物品
stack|modid:item|NBT as JSON

// 指定 NBT 数据且有指定方块实体附加值的指定物品
stack|modid:item:meta|NBT as JSON

//modid 模组 id
//item 物品名称
//meta 方块实体附加值
//NBT as JSON JSON 格式的 NBT 数据

// 实例:
stack|minecraft
stack|minecraft:iron_pickaxe
stack|minecraft:iron_pickaxe:*

//有精准采集魔咒的物品
stack||{ench:[{id: 33s}]} 

//时运强化的匠魂物品
stack|tconstruct|{ench:[{id: 35s}]} 

stack|minecraft:iron_sword|{ench:[{id: 17s}]}
stack|minecraft:iron_sword:*|{ench:[{id: 17s}]}
```


## 技能:
技能和进度都是在 Skillable 模组中就已经添加的条件类型，现已支持其他模组添加更多的技能。
技能用法如下:
```
例子:
ResourceLocation|Level
//ResourceLocation 资源位置（模组ID：技能名称）
//Level 技能等级

实例:
reskillable:building|15
```

自从 Reskillable 发布以来我们就将技能名称改为资源位置。
使用资源位置允许来自不同模组却有相同名称的技能。
在技能和特性（[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits)）页面可以找到所有技能的资源位置:




## 特性:
Traits is a new addition for Reskillable and makes it so you now can lock things behind a required Trait.
Traits are similar to Skills in the way that we've moved them over to a Resource Location instead of a name to allow for more robust extendability.
The Trait Syntax is as follows:
```
Example:
trait|ResourceLocation

Working Example:
trait|reskillable:battle_spirit
```

You can find the Traits's ResourceLocations under:
[Skills & Traits](/Mods/CompatSkills/Requirements/Skills_Traits)


## Inverted Requirements:
Inverted requirements are a 1.4.0+ CompatSkills feature only!
Inverted requirements are unlocked as long as you do not have the required component.
An Inverted Skill Requirement is unlocked as long as you do not have the specified level of the skill or higher.
The Inverted-Syntaxes are as follows:
```
Example:
!adv|
!dim|
!stage|
!skill|
!trait|


Working Example:
!adv|minecraft:husbandry/plant_seed
!dim|0
!stage|test
!skill|reskillable:building|15
!trait|reskillable:battle_spirit
```
