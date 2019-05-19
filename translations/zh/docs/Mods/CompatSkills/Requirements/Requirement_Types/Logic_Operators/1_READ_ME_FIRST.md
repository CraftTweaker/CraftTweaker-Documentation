# 逻辑条件语句

既然你已经明白什么是逻辑门，我可以向你解释在 Reskillable 中允许逻辑门发挥作用的语句。 下一节会有更详细的例子。

在下面的所有语句中， `requirement` 字符串代表任意支持的条件（包括CompatSkills或其它附属添加的条件）。

* * *

## 单一逻辑条件

### “非”条件

Reskillable支持的最简单的逻辑条件语句具有反转一个条件的能力。 它通过一个 **NOT** 门来实现这个请求，语句是 `not|requirement` 。 根据在逻辑门部分的解释，只有在不满足特定的 `requirement` 的情形下，这个“非”逻辑条件才会被满足。

* * *

## 双重逻辑条件

另外一些逻辑条件语句稍显复杂，因为它们需要两个 *input* （输入）条件。 因为这些逻辑门相对简单，所以两个请求的顺序实际上并不重要，但我会用 `requirement<sub>1</sub>` 和 `requirement<sub>2</sub>` 来区分这两个条件。

它们使用相同的语句： `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]</0 > 。 其中 gate 是 <code>and`, `nand`, `or`, `nor`, `xor` 和 `xnor`  
中的一种。 **注意**： `requirement<sub>1</sub>` 和 `requirement<sub>2</sub>` 两边的方括号不能省略。

* * *

### “与”条件

与其它逻辑条件语句不太一样，“**与**”条件主要在嵌套式逻辑条件语句中发挥作用（关于嵌套式逻辑条件语句见下文），如同时使用多个条件锁定一个物品或其它对象，并把达成给定的所有条件作为解锁条件。 这和“**与**”功能相同，应尽可能地使用它，因为它会让提示以易于阅读的方式显示。

## 例子

下面所有的例子都将使用 CompatSkill's CraftTweaker 帮助中的语句以方便阅读。 The logic requirements work just fine from the config as well.

以下所有的示例脚本 CraftTweaker 脚本条目都使用 import （导入包）语句： `import mods.compatskills.Requirement.addRequirement;` 这主要是为了缩短每行的长度，让文本更具可读性。 (So if you are copying any of the examples you will need to include it at the top of your script file.) A couple of the examples below that directly start with `mods.compatskills.` are locks that are specific to CompatSkills and that I came up with decent logic requirement examples for.

* * *

Only allow attacking zombie pigmen outside of the nether: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Allow entering the nether if a player has an attack or defense level of at least 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "or|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

Once a player gets to defense level 24 and agility level 24 stop allowing them to use leather armor:

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