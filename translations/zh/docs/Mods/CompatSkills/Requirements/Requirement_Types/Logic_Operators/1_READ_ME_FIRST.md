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

与其它逻辑条件语句不太一样，“**与**”条件主要在嵌套式逻辑条件语句中发挥作用（关于嵌套式逻辑条件语句见下文），如同时使用多个条件锁定一个物品或其它对象，并把达成给定的所有条件作为解锁条件。 这和**“与”**功能相同，所以应该尽可能的使用，因为这将使得它更容易阅读

## 例子

下面所有的例子都将使用 CompatSkill's CraftTweaker 帮助中的语句以方便阅读。 逻辑要求在配置中也很细。

下面的示例脚本脚本条目使用导入声明： `导入mods.compatskills.Requirement。 dddrequirement;` 这主要是为了缩短其他行的长度，使其更易读。 (如果您正在复制任何示例你需要将它包含在脚本文件顶部。) 下面的一些示例直接以 `模式开始。 忽略技能。` 是专用于Compatskill的锁，我提出了体面的逻辑要求示例。

* * *

只允许攻击内外的僵尸猪人： `mods.compatsk技能.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Allow entering the nether if a player has an attack or defense level of at least 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "or|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

当一个玩家的防御等级和灵巧等级都到达了24级后，不允许他们使用皮革护甲

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]";
    

* * *

只允许使用木制铲，直到玩家采矿或收集等级 5： `添加需求(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:greating|5]"。`

* * *

只允许玩家使用末影珍珠，如果它们有32个魔法或敏捷的话。 但是，如果他们在32级上具有两种技能，不要让他们使用它： `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32])；` 如果你想要有多个进化树并确保它们必须跟随一棵，如果他们想要继续使用特定的物品，这可能是有用的。

* * *

很难为 **XNOR**找到一个示例，但这是一个如何工作的例子。

只允许玩家将防御等级升到5级，如果他们还没有将任何点放在攻击中或者他们处于攻击级32级： `Mod。 ompatskillables.Skillaks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### 嵌套逻辑请求

嵌套逻辑要求是当你在另一个逻辑要求中使用逻辑要求作为 `要求中的一个` 参数。 特别注意嵌套要求中的括号。

* * *

只有当玩家拥有开采等级20或拥有采集等级25和开采等级15时才允许破坏钻石矿石： `添加要求(<minecraft:diamond_ore>, "或|[reskillable:mining|20]~[and|[reskillable:greating|25]~[reskillable:mining|15]]";` *注*: 这也会产生副作用，不允许玩家放置钻石矿石，除非他们也符合要求。

* * *

只允许在末尾使用灵活度15或灵活度及魔法等级25的精灵： `附加要求(<minecraft:elytra:*>) "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]]";` *备注* 这在一定程度上只是一个例子，而不一定是有人想要的。

可以写入上述要求的另一种方式是： `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]" ~[reskillable:magic|25]";` 因为双方至少需要15的敏捷性。