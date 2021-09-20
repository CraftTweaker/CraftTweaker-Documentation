# 逻辑条件语句

既然你已经明白什么是逻辑门，我可以向你解释在 Reskillable 中允许逻辑门发挥作用的语句。 下一节会有更详细的例子。

在下面的所有语句中， `requirement` 字符串代表任意支持的条件（包括CompatSkills或其它附属添加的条件）。

* * *

## 单一逻辑条件

### “非”条件

Reskillable支持的最简单的逻辑条件语句具有反转一个条件的能力。 It does this using a **NOT** gate and the syntax for it is `not|requirement`. 根据在逻辑门部分的解释，只有在不满足特定的 `requirement` 的情形下，这个“非”逻辑条件才会被满足。

* * *

## 双重逻辑条件

The other logic requirements are slightly more complex as they take two *input* requirements. As the logic gates are relatively simple the order of the requirements does not actually matter, however I will be referring to them as `requirement<sub>1</sub>` and `requirement<sub>2</sub>` as to differentiate which one is which.

They also share the syntax: `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `nor`, `xor`, or `xnor`.  
**Note**: The brackets around `requirement<sub>1</sub>` and `requirement<sub>2</sub>` are needed.

* * *

### “与”条件

The **AND** requirement unlike the other logic requirements is mainly useful for nested logic requirements (more on this lower down), as locking an item or other object with multiple requirements requires all of the given requirements to be met. This is the same as the **AND** functionality, so should be used when possible, as it will make the tooltip be formatted in an easier to read manner.

## Beispiele

下面所有的例子都将使用 CompatSkill's CraftTweaker 帮助中的语句以方便阅读。 The logic requirements work just fine from the config as well.

All the example script CrT script entries below use the import statement: `import mods.compatskills.Requirement.addRequirement;` this is mainly to reduce the lengths of the other lines and make them more readable. (So if you are copying any of the examples you will need to include it at the top of your script file.) A couple of the examples below that directly start with `mods.compatskills.` are locks that are specific to CompatSkills and that I came up with decent logic requirement examples for.

* * *

Only allow attacking zombie pigmen outside of the nether: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Allow entering the nether if a player has an attack or defense level of at least 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "or|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

当一个玩家的防御等级和灵巧等级都到达了24级后，不允许他们使用皮革护甲

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");


* * *

Only allow using a wooden shovel until the player gets mining or gathering level 5: `addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");`

* * *

Only allow a player to use ender pearls if they have magic 32 or if they have agility 32. Do not however let them use it if they have both skills at level 32: `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32]");`. This can be useful if you want to have multiple progression trees and ensure that they have to follow one if they want to keep being able to use specific items.

* * *

It was hard to come up with an example for **XNOR**, however this is an example of how it can work.

Only allow a player to level defense to level 5 if they have not put any points into attack yet or if they are at attack level 32: `mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### 嵌套逻辑请求

Nested logic requirements are when you are using a logic requirement as one of the `requirement` parameters in another logic requirement. Pay special attention to bracket placement in nested requirements.

* * *

Only allow diamond ore to be broken if the player has mining level 20 or if the player has both gathering level 25 and mining level 15: `addRequirement(<minecraft:diamond_ore>, "or|[reskillable:mining|20]~[and|[reskillable:gathering|25]~[reskillable:mining|15]]");` *Note*: This also has the side effect of not allowing players to place diamond ore unless they meet the requirement as well.

* * *

Only allow using the elytra with agility 15 in the end or having agility and magic levels 25 while not being in the end: `addRequirement(<minecraft:elytra:*>, "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` *Note*: Once you reach agility and magic 25 you are unable to use the elytra in the end. This is in part just as an example and not necessarily what someone wants.

Another way that the above requirement could be written is: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` because both sides require at least agility 15.