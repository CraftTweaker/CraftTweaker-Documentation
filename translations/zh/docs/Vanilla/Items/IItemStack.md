# IItemStack

一个 IItemStack 对象由一个 [项目定义](/Vanilla/Items/IItemDefinition/)、 元/损坏值和 NBT 数据组成。  
换言之，它指的是一个项目或一个块。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.item.IItemStack；`

## Calling an IItemStack

有几种方法返回一个 IItemStack

* 使用 [括号处理器](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* 在 [IItemDefinition](/Vanilla/Items/IItemDefinition/) 对象 `<minecraft:stone>.definition.makeStack(0)` 上使用 `makeStack()` 方法
* 在 [IEntityDrop](/Vanilla/Entities/IEntityDrop/) 对象上使用 `堆栈` 获取
* 使用 `firstitem` 在一个 [IOreeDictentre](/Vanilla/OreDict/IOreDictEntry/) 上获取

## Calling an IItemStack[] or a IItemStack List

如果你调用这些函数, 你很可能会通过生成的列表/数组进行迭代。

* 在一个 [元素上使用 `项目` 方法](/Vanilla/Variable_Types/IIngredient/) 返回一个 IItemStack 列表： `<ore:ingotGold>.item`
* 使用 `itemArray` 方法在 [IIngredient](/Vanilla/Variable_Types/IIngredient/) 返回一个 IItemStack[] `<ore:ingotGold>.itemArray`
* 在 [IMod 上使用 `个项目` 个方法](/Vanilla/Game/Mods/#imod) 对象返回 IItemStack[]： `加载Mods["minecraft"].items`

## 职能

那么，我们现在能够做些什么呢？

### 扩展IIngredient

IItemStack 扩展 [个元素](/Vanilla/Variable_Types/IIngredient/)。  
这意味着 [IIngredient](/Vanilla/Variable_Types/IIngredient/) 对象也适用于IItemStack。 <details><summary>派生方法</summary> 

* 标记
* 堆栈数量
* 项目
* 条目数组
* 液体
* 命令字符串
* 堆栈|其他属性
* stack.or(其他成分)
* stack.transform([变压器](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([变压器](/Vanilla/Items/Item_Transformers/))
* 仅供stack.([条件](/Vanilla/Items/Item_Conditions/))
* 已标记(mark)
* stack.match(项目)
* stack.matchesExact(item)
* 堆栈匹配(液体)
* 堆栈具有成分：
* 应用转换(堆栈，播放器)
* stack.hasTransformers()</details>

### ZenGetters/ZenSetters

Read how to use them [here](/UsingThisWiki/). 并查看下面的示例。

| ZenGetter/ZenMethod（ZenMethod） | ZenSetter/ZenMethods | 类型                                                       |
| ------------------------------ | -------------------- | -------------------------------------------------------- |
| definition                     |                      | [IItem定义](/Vanilla/Items/IItemDefinition/)               |
| 名称                             |                      | string                                                   |
| 显示名称                           | 显示名称                 | 字符串                                                      |
| maxStackSize                   | maxStackSize         | 整数                                                       |
| 硬度                             | 硬度                   | 浮点数                                                      |
| 伤害                             |                      | 整数                                                       |
| maxDamage                      | maxDamage            | 整数                                                       |
| 哈斯塔克                           |                      | bool                                                     |
| 标签                             | withTag(标签)          | [IData](/Vanilla/Data/IData/)                            |
| ores                           |                      | 列表<[IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/)\>   |
| 工具类                            |                      | 列表<string\>                                             |
| itemEnchantability             |                      | 整数                                                       |
| 容器物品                           |                      | IItemStack                                               |
| 急性容器物品                         |                      | 布尔值                                                      |
| 修理成本                           | 修理成本                 | 整数                                                       |
| canEditBlocks                  |                      | 布尔值                                                      |
| isOnItemFrame                  |                      | 布尔值                                                      |
| isEnchangable                  |                      | 布尔值                                                      |
| 有附魔的                           |                      | 布尔值                                                      |
| isdamaged                      |                      | 布尔值                                                      |
| isdamageable                   |                      | 布尔值                                                      |
| isItemBlock                    |                      | 布尔(如果包含项目是一个项目块)                                         |
| 可叠加层                           |                      | 布尔值                                                      |
| isBeacon支付                     |                      | 布尔值                                                      |
| 哈斯特效                           |                      | 布尔值                                                      |
| hasDisplayName                 |                      | 布尔值                                                      |
| 元数据                            |                      | 整数                                                       |
| hassubtypes                    |                      | 布尔值                                                      |
| isEmpty                        |                      | 布尔值                                                      |
| 烧焦时间                           |                      | 整数                                                       |
| 显示耐久条                          |                      | 布尔值                                                      |
| 哈斯定制实体                         |                      | 布尔值                                                      |
| 附属机构                           |                      | 列表<[IEnchantage](/Vanilla/Enchantments/IEnchantment/)\> |
| 匹配标签精度                         |                      | 布尔值                                                      |

#### 金额

| 方法调用                   | 返回                      | 参数类型 |
| ---------------------- | ----------------------- | ---- |
| `任何金额()`               | 一个带有更改属性的新的 IItemStack  |      |
| `stack.amount(整数)`     | 一个带有更改属性的新的 IItemStack  | 整数   |
| `包含金额(整数)`             | 一个带有更改属性的新的 IItemStack  | 整数   |
| `堆栈* 金额`               | 一个带有更改属性的新的 IItemStack  | 整数   |
| `stack.splitStack(整数)` | 拆分的IItemStack。 旧的将相应减少。 | 整数   |

#### 权重

| 方法调用                  | 返回                                            | 参数类型             |
| --------------------- | --------------------------------------------- | ---------------- |
| `stack.percent(浮动概率)` | 一个 [重量物品栈](/Vanilla/Items/WeightedItemStack/) | 浮点数 (100 = 100%) |
| `stack.digit(浮动概率)`   | 一个 [重量物品栈](/Vanilla/Items/WeightedItemStack/) | 浮点数 (1 = 100%)   |

#### 伤害

| 方法调用                      | 返回                     | 参数类型                                         |
| ------------------------- | ---------------------- | -------------------------------------------- |
| `stack.anyDamage()`       | 一个带有更改属性的新的 IItemStack |                                              |
| `含有伤害(int damage)`        | 一个带有更改属性的新的 IItemStack | 整数                                           |
| `stack.damageItem(英寸，实体)` | 空(无)                   | 整数型变量， [Ientity](/Vanilla/Entities/IEntity/) |

#### 标签

| 方法调用                                             | 返回                     | 参数类型                                |
| ------------------------------------------------ | ---------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | 一个带有更改属性的新的 IItemStack |                                     |
| `stack.withTag(IData标签)`                         | 一个带有更改属性的新的 IItemStack | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | 一个带有更改属性的新的 IItemStack | [IData](/Vanilla/Data/IData/), bool |
| `移除标签(名称)`                                       | 一个带有更改属性的新的 IItemStack | 字符串                                 |
| `更新标签(IData标签)`                                  | 一个带有更改属性的新的 IItemStack | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData tag, bool matchTagExact)` | 一个带有更改属性的新的 IItemStack | [IData](/Vanilla/Data/IData/), bool |

#### 屏蔽连铸中

| 方法调用              | 返回                                       |
| ----------------- | ---------------------------------------- |
| `stack.asBlock()` | 新的 [IBlock](/Vanilla/Blocks/IBlock/) 对象。 |
| `打包为 IBlock`      | 新的 [IBlock](/Vanilla/Blocks/IBlock/) 对象。 |

#### Lore/显示名称

| 方法调用                           | 返回                                                        | 参数类型                |
| ------------------------------ | --------------------------------------------------------- | ------------------- |
| `用显示名称(名字)`                    | 一个新的 IItemStack 带有已更改的属性。 不同于 displayName 设置，这只适用于这个单个项目。 | 字符串 (支持 "§") 的颜色代码  |
| `stack.withLore(String]loare)` | 一个新的 IItemStack 带有已更改的属性。                                 | string\[…\](支持带"§") |
| `stack.clearCustomName()`      | 空(无)                                                      |                     |

#### 附属机构

| 方法调用                                                               | 返回   | 参数类型                                                            |
| ------------------------------------------------------------------ | ---- | --------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition Annotation)` | 布尔值。 | [IEnchantment定义](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(I附魔附魔)`                                      | 空(无) | [IEnchantage](/Vanilla/Enchantments/IEnchantment/)              |

#### canItem...

| 方法调用                                         | 返回                   | 参数类型                                                  |
| -------------------------------------------- | -------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlock定义块)`                | 提示物品是否可以放置在方块上的布尔值。  | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.can Destroy(IBlock定义块)`               | 一个能告诉物品是否可以摧毁方块的布尔值。 | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(IBlockState块)`        | 一个能告诉物品是否可以收获方块的布尔值。 | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengthAginstBlock(IBlockState块)` | 一个代表物件与方块的强度的浮点数。    | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| 方法调用                                                         | 返回                                                               | 参数类型                                                                     |
| ------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z)；` | 一个新的 [IEntityItem](/Vanilla/Entities/IEntityItem/) 个对应于世界上新创建的项目 | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | 一个新的 [IEntityItem](/Vanilla/Entities/IEntityItem/) 个对应于世界上新创建的项目 | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## 物品变换器和物品条件

您可以在 [Iugrendient](/Vanilla/Variable_Types/IIngredient/) 页面或在他们的respective条目中找到如何使用这些选项：  
[项目条件](/Vanilla/Items/Item_Conditions/)  
[项目变换](/Vanilla/Items/Item_Transformers/)

## 例子

#### 显示名称

全局（将物品翻译成新名称）。

```zenscript
val appe = <minecraft:apple>;

//prints "Apple"
print(apple.displayname);

// Sets Appes Display name to "Tomato"
apple. isplayname = "Tomato";

//prints "Tomato"
print(apple.displayname);
```

本地(仅此单项)。

```zenscript
<minecraft:coal>.withDisplayName("黑金")；
```

#### 洛尔

`<minecraft:coal>withLore(["此函数","request a","string[]"]);`

#### 最大堆栈大小

最大堆栈大小是一个堆栈中适合的物品数量，比如羊毛堆栈大小是64个，而布克茨只是16个。

```zenscript
val Appe = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(aplle). 轴StackSize);

/set appes Max Stack size to 32
apple.maxStackSize = 32;

//prints 32
print(aplle). 轴StackSize);

/set appes Max Stack size to Bucket 的最大堆栈大小
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

#### 硬度

硬度是打破上述方块需要多长时间。 仅当对象指向一个方块时有效。

```zenscript
val grasss = <minecraft:grass>;

//prints 1.0
print(grass.hardness);

//set grasss Hardness to 10.0
grav.hardness = 10.0;

//prints 10.0
print(grass.hardness);
```

#### 伤害

不能损坏的物品的损坏为0。

```zenscript
val cets = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick). 轴损伤)；

//将钻石饼干最大损伤设置为256
皮卡最大损伤=256；

//prints 256
打印(pick)。 轴损伤)；



//damage 不重要，用于配方
<minecraft:iron_pickaxe>.anydamage();

//with 给定的损伤
<minecraft:iron_pickaxe>.withdamage(122)；
```

#### 标签

标签是 [IData](/Vanilla/Data/IData/) 对象。  
如果项目没有包含标签，它将返回一个空标签，不能为空

```zenscript
//creating 苹果给定标签
////删除现有标签
<minecraft:apple>ithTag({Unbreakable: 1});

//creating appe with an emtpy tag
<minecraft:apple>ithEmptyTag();

//over a tag by its name
items 表情标签("标签名称")；

//更新现有标签
///如果标签不覆盖现有标签，它们将保持常数。
更新标签({Unbreakable: 1});
```

#### 液体

返回一个物品中含有的液体(如果是多项)，如果物品不是容器，则返回零。  
返回一个 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 对象或空。

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.like.name);
```

#### 金额

有多少苹果？

```zenscript
<minecraft:apple>. nyamount();

//1 Apple
valal appe = <minecraft:apple>;

//2 Apples
val more Apples = appe * 2;

//3 苹果
val eveneApples = <minecraft:apple> * 3;
```

#### 权重

返回一个 [重量物品堆栈](/Vanilla/Items/WeightedItemStack/) 并提供百分比。

```zenscript
val 苹果 = <minecraft:apple>;

//Create 一个重量物品堆栈, 拥有100%的几率
var Apple百分比= 苹果 % 100;

//does 等于上述
小程序百分比=苹果。 八(1.0)；
```

#### Ores

返回 [IOreDictEntres](/Vanilla/OreDict/IOreDictEntry/) 的列表提及此项目。

```zenscript
<minecraft:apple>.ores;
```

#### 投射到 IBlock

您可以将 IItemStack 投射到 [IBlock](/Vanilla/Blocks/IBlock/)， 只要你指的是一个方块，否则投影将会抛出一个例外。

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> 为 crafttminstrer.block.IBlock;
```

您也可以测试如果一个 IItemStack 包含一个项目块，因此可以转换：

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.istemBlock; // true
&lt;minecraft:stick&gt;.istemBlock; // false
</code></pre>

#### 食物属性

您可以检查 IItemStack 是否为食物，以及它具有什么样的食物属性。  
可能无法适用于每个模式下的食物！

```zenscript
<minecraft:apple>.isFood; /true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```