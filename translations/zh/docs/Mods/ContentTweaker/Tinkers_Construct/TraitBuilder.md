# 自定义特性

使用这个软件包，您可以创建特征，然后将其放在您的工具上！

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.tconstruct.TraitBuilder；`

## 创建特性

首先，您将需要创建一个特性生成器。  
这可以使用静态函数完成：

```zenscript
//create(String identificer, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweiner.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

`标识符` 必须是唯一的！  
对于 `颜色`, 建议您使用上面显示的十六进制标记。  
`maxlevel` 是特性可以变成的最大级，默认值为0。  
`计数Perlevel` 是特性可以有多少子级别 (如Redstone 50)。

在您完成下面的所有修改后，您需要注册您的特性。  
可以使用 `寄存器` 的方法完成， 返回一个 [表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 的新特性。

```zenscript
myTrait.register();
```

注册后，您仍然可以修改生成器，特性本身不能再被修改。  
你可以很容易地创建多个相似的特性.

## 修改者项目

如果你将给定的成分与工具一起编织在一只修饰工具中，你可以将特性应用为修饰器。

```zenscript
//myTrait.addItem(Ingredient item, @Optional(1) int amountNeed, @Optional(1) int amountMatched);
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(ItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `项目` 是匹配的物品。 您可以使用 [项目条件](/Vanilla/Items/Item_Conditions/) 但没有变压器。 
- `数量` 是匹配的项目数量。 你可以将它们拆分到工具构造提供的所有位置，这也允许你超过64。 在上面的示例中，你需要每个添加4个铁块。 默认值为 1。
- `数量匹配` 是按 `数量添加的特性点数量`。 在上面的例子中，四个铁块给出了两个特性点。 默认值为 1。
- 如果您使用 `移除函数`，它将会移除与项目匹配的所有特性成分。

## 参数

您可以使用指定的名称设置和获取这些属性：

| 名称            | 类型  |
| ------------- | --- |
| color         | int |
| 计数权限          | int |
| hidden        | 布尔值 |
| identifier    | 字符串 |
| 本地化描述         | 字符串 |
| localizedName | 字符串 |
| 最大级别          | 整数  |

## 计算的属性

一些属性将需要计算。  
您可以设置给定的属性函数：

### CanApplyOnly

检查特性是否可以添加到已经具有另一个特性或 [附魔](/Vanilla/Enchantments/IEnchantmentDefinition/) 的工具。

```zenscript
myTrait.canApplytherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canCo-therEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinion enchant){....};
```

### Extra info

返回的字符串[…]将作为额外信息在工具站显示。

```zenscript
myTrait.extraInfo = 函数 (TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## 添加功能

既然你已经创建了一个特征，你需要使它进行修改，不要你吗？  
是指特性事件处理程序的对象：  
每当用户使用包含特性的工具时，他们都会被调用。

下面你会看到所有可能的处理器，以及他们返回的内容和如何为他们写函数的信息。 请记住，您必须用自己的变量名替换 `myTrait` 。  
此外，您只需使用您需要的处理程序。 你不需要空的处理程序以便你填写了一切。

<details>
    <summary>Nutshell 中的所有处理程序</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">beforedBlockBreak</a></li>
        <li><a href="#afterblockbreak">事后阻挡断开</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">calcCrit</a></li>
        <li><a href="#calcdamage">calcamage</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockback</a></li>
        <li><a href="#afterhit">命中后</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">onTool修复工具</a></li>
    </ul>
</details>

### onUpdate

工具调用的每个刻录都已加载(这意味着玩家背包中的内容)。  
个参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IWorld](/Vanilla/World/IWorld/) 代表 `世界`
- [Ienty](/Vanilla/Entities/IEntity/) 代表 `所有者`
- 表示 `项目槽的` 整数
- 一个描述工具当前是否是 `被选中` 的布尔值

**没有返回任何东西。**

使用创建时间：

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

当一个方块被开采时被呼叫。  
小心，因为这个事件也被原版阻塞。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [玩家断路事件](/Vanilla/Events/Events/PlayerBreakSpeed/)

**没有返回任何东西。**

使用创建时间：

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### beforedBlockBreak

在方块损坏前拨打电话。  
小心这个事件也被原版阻塞。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [阻断事件](/Vanilla/Events/Events/BlockBreak/)

**没有返回任何东西。**

使用创建时间：

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### 事后阻挡断开

方块被破坏后调用。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IWorld](/Vanilla/World/IWorld/) 代表 `世界`
- [IBlockState](/Vanilla/Blocks/IBlockState/) 代表已损坏的 `块`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `矿工`
- 如果挖掘 `擦除效果`

**没有返回任何东西。**

使用创建时间：

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

每当一个方块被损坏时拨打电话。  
小心这个事件也被原版 onBlockHarvestBreak 处理器调用。  
与原版版处理程序不同的是，此处理程序只会在玩家打破方块时执行。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [BlockHarvestDrops事件](/Vanilla/Events/Events/BlockHarvestDrops/)

**什么都不返回**

使用创建时间：

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### calcCrit

在计算对该实体造成的损害之前先打电话，以确定它是否为裂缝。  
return `false` 不会阻止已经是破裂的攻击。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 表示 `目标`

**Returns a bool** that is `true` if the hit should crit, false whenever else.

使用创建时间：

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) (
    //CODE
    return true; //or fals
};
```

### calcamage

当一个实体被击中时，但仍然在损坏处理之前和加上破损之前呼叫。  
裂痕伤害将从此结果中计算。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 表示 `目标`
- 一个代表工具的 `原始伤害` (未经修改的工具损坏)
- 一个代表工具 `新伤害` 的浮动(直到这个点之前工具会造成的伤害) 可以是原始损害，或者已经被其他特性修改)。
- 一个表示如果命中 `是关键的` 的布尔值

**返回一个代表新伤害的浮点** 否则返回 `新的伤害`

创建于

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, originalDamage, newDamage, isCritical) 电子邮件：
    //CODE
    return newDamage; //or your modified value
};
```

### onHit

当一个实体被击中时，仅在损坏发生之前被召唤。  
所有伤害计算已经完成。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 表示 `目标`
- 一个代表工具的 `伤害` (包括魔术损坏)
- 一个表示如果命中 `是关键的` 的布尔值

**什么都不返回**

创建于

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
    //CODE
};
```

### calcKnockback

在实体被击中后调用来修改应用的击退。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 表示 `目标`
- 一个表示工具 `伤害的浮点数` (包括临床)
- 一个代表工具 `原始的 alKnokback` (未经修改的工具击退)
- 一个代表工具 `newKnockback` 的浮动(击退工具将持续到这个点) 可以是原生的 alKnockback, 或者已经被其它特性修改了)。
- 一个表示如果命中 `是关键的` 的布尔值

**返回一个代表新回击的浮点** 否则返回 `netikback`

创建于

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### 命中后

在实体被击中后并在损坏发生后拨打电话。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 表示 `目标`
- 一个代表工具的 `严重伤害`
- 如果命中了 `个废墟` 一个布尔表示的
- 一个表示实体 `被击中` 的布尔值。 如果该实体是无敌或有其他方法来达到损害，则可以是虚假的。

**什么都不返回**

创建于

```zenscript
mytrait.afterHit = function(trait, tool, attacker, target, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

当持有工具的玩家阻止攻击时调用。  
`不然的话，` 将被调用。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IPlayer](/Vanilla/Players/IPlayer/) 代表 `播放器`
- 一个 [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**什么都不返回**

创建于

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### onPlayerHurt

当持有工具的玩家不要拦截攻击时调用。  
`onBlock` 将被调用。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- [IPlayer](/Vanilla/Players/IPlayer/) 代表 `播放器`
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表 `攻击者`
- 一个 [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**什么都不返回**

创建于

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

在工具耐久性降低之前呼叫。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- 一个表示耐久性的 `未修改数量的` 的整数。
- 一个整数型变量，表示耐久性为 `的新数量` ，它已经可以被其它特性修改。
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表当前工具 `持有者`

**返回一个 int** 表示新的金额。 否则返回 `新金额`

创建于

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newValent, holder) }.
    //CODE
    return newValent; //or your modified value
};
```

### calcTool恢复

在工具耐久性增加之前呼叫。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- [IItemStack](/Vanilla/Items/IItemStack/) 代表已使用的 `工具`
- 一个表示耐久性的 `未修改数量的` 的整数。
- 一个整数型变量，表示耐久性为 `的新数量` ，它已经可以被其它特性修改。
- [IentityLivingBase](/Vanilla/Entities/IEntityLivingBase/) 代表当前工具 `持有者`

**返回一个 int** 表示新的金额。 否则返回 `新金额`

创建于

```zenscript
myTrait.calcToolToolHeal = function(trait, tool, unmodifiedAmount, newValent, holder) 然后返回
    //CODE
    new Amount; //or your modified value
};
```

### onTool修复工具

已拨打电话，工具才能用防线修理材料修复。  
不要与 `onToolReceal` 混为一谈。  
如果同时使用多个项目，将被调用多次。  
参数：

- [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 代表当前使用的 `特性`。
- 要修复的 [IItemStack](/Vanilla/Items/IItemStack/) 代表 `工具`
- 一个代表要增加耐久性的 `数量的` 整数。

**什么都不返回**

创建于

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## 例子

```zenscript
#loader contenttnowl
#modloaded tconstruct

valal testTrait = mods.contenttweeper.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = “Whooooooooooo ”;
testTrait.localizeddescription = “这是有趣的！ 可悲的是，它没有做任何事情... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```