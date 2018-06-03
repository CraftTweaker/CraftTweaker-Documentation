# 物品堆（IItemStack）

所谓物品堆对象，是一个包括了 [物品定义](IItemDefinition)，元数据值/伤害值和 NBT 数据的对象。  
换句话说，它指的就是一个物品或者方块。

## 导入相关包

为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。 
`import crafttweaker.item.IItemStack;`

## 调用物品堆
有好几种方法会返回一个物品堆

* 使用 [尖括号引用](/Vanilla/Brackets/Bracket_Item) `<minecraft:apple>`
* 在  [物品定义](IItemDefinition) 对象上使用 `makeStack()` 方法：`<minecraft:stone>.definition.makeStack(0)`
* 在  [实体掉落物](/Vanilla/Entities/IEntityDrop) 对象上使用 `stack`。
* 在  [矿物词典条目](/Vanilla/OreDict/IOreDictEntry) 对象上使用 `firstItem`。

## 调用物品堆数组和物品堆列表
你如果调用了如下方法，你就会获得一个物品堆数组/列表，通过迭代它们来获取实际可用的数据：

* 对 [材料](/Vanilla/Variable_Types/IIngredient) 对象使用 `items` 方法，返回一个物品堆列表：`<ore:ingotGold>.items`
* 对 [材料](/Vanilla/Variable_Types/IIngredient) 对象使用 `itemArray` 方法，返回一个物品堆数组：`<ore:ingotGold>.itemArray`
* 对  [模组](/Vanilla/Game/Mods#imod)  对象使用 `items` 方法，返回一个物品堆数组：`loadedMods["minecraft"].items`


## 功能
仔细想想能做些什么？

### 继承自材料对象
物品堆继承自 [材料](/Vanilla/Variable_Types/IIngredient)。
这意味着所有 [材料](/Vanilla/Variable_Types/IIngredient) 对象可使用的功能均可在物品堆上使用。
<details><summary>衍生方法</summary>
	<ul>
		<li>stack.mark</li>
		<li>stack.amount</li>
		<li>stack.items</li>
		<li>stack.itemArray</li>
		<li>stack.liquids</li>
		<li>stack.commandString</li>
		<li>stack | otherIngredient</li>
		<li>stack.or(otherIngredient)</li>
		<li>stack.transform([transformer](Item_Transformers))</li>
		<li>stack.transformNew([transformer](Item_Transformers))</li>
		<li>stack.only([condition](Item_Conditions))</li>
		<li>stack.marked(mark)</li>
		<li>stack.matches(item)</li>
		<li>stack.matchesExact(item)</li>
		<li>stack.matches(liquid)</li>
		<li>stack has ingredient</li>
		<li>stack.applyTransform(stack,player)</li>
		<li>stack.hasTransformers()</li>
	</ul>
</details>


### ZenGetters/ZenSetters

阅读 [wiki 使用 ](/UsingThisWiki) 篇章，然后查看下面的例子进行学习。

| ZenGetter/ZenMethod | ZenSetter/ZenMethod |                           类型                           |
| :-----------------: | :-----------------: | :------------------------------------------------------: |
|     definition      |                     |            [IItemDefinition](IItemDefinition)            |
|        name         |                     |                          string                          |
|     displayName     |     displayName     |                          string                          |
|    maxStackSize     |    maxStackSize     |                           int                            |
|      hardness       |      hardness       |                          float                           |
|       damage        |                     |                           int                            |
|      maxDamage      |      maxDamage      |                           int                            |
|       hasTag        |                     |                           bool                           |
|         tag         |    withTag(tag)     |               [IData](/Vanilla/Data/IData)               |
|        ores         |                     |  List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)>   |
|     toolClasses     |                     |                      List<string\>                       |
| itemEnchantability  |                     |                           int                            |
|    containerItem    |                     |                        IItemStack                        |
|  hasContainerItem   |                     |                           bool                           |
|     repairCost      |     repairCost      |                           int                            |
|    canEditBlocks    |                     |                           bool                           |
|    isOnItemFrame    |                     |                           bool                           |
|    isEnchantable    |                     |                           bool                           |
|     isEnchanted     |                     |                           bool                           |
|      isDamaged      |                     |                           bool                           |
|    isDamageable     |                     |                           bool                           |
|     isStackable     |                     |                           bool                           |
|   isBeaconPayment   |                     |                           bool                           |
|      hasEffect      |                     |                           bool                           |
|   hasDisplayName    |                     |                           bool                           |
|      metadata       |                     |                           int                            |
|     hasSubtypes     |                     |                           bool                           |
|       isEmpty       |                     |                           bool                           |
|      burnTime       |                     |                           int                            |
| showsDurabilityBar  |                     |                           bool                           |
|   hasCustomEntity   |                     |                           bool                           |
|    enchantments     |                     | List<[IEnchantment](/Vanilla/Enchantments/IEnchantment)> |



#### 数量（Amount）

|            方法调用            |                返回值                | 参数类型 |
| :----------------------------: | :----------------------------------: | :------: |
|      `stack.anyAmount()`       |          更改了属性的物品堆          |          |
|   `stack.amount(int amount)`   |          更改了属性的物品堆          |   int    |
| `stack.withAmount(int amount)` |          更改了属性的物品堆          |   int    |
|       `stack *  amount`        |          更改了属性的物品堆          |   int    |
| `stack.splitStack(int amount)` | 拆分的物品堆，旧有的数量也相应的减少 |   int    |


#### 权重（Weight）

|           方法调用            |                 Returns                  |      参数类型      |
| :---------------------------: | :--------------------------------------: | :----------------: |
| `stack.percent(float chance)` | A [WeightedItemStack](WeightedItemStack) | float (100 = 100%) |
| `stack.weight(float chance)`  | A [WeightedItemStack](WeightedItemStack) |  float (1 = 100%)  |


#### 伤害值（Damage，也就是常说的耐久）

|                    方法调用                    |      Returns       |                 参数类型                  |
| :--------------------------------------------: | :----------------: | :---------------------------------------: |
|              `stack.anyDamage()`               | 更改了属性的物品堆 |                                           |
|         `stack.withDamage(int damage)`         | 更改了属性的物品堆 |                    int                    |
| `stack.damageItem(int amount, IEntity entity)` |   void (nothing)   | int, [IEntity](/Vanilla/Entities/IEntity) |


#### 标签（Tags，也就是常说的 NBT）

|            方法调用            |      Returns       |           参数类型           |
| :----------------------------: | :----------------: | :--------------------------: |
|     `stack.withEmtpyTag()`     | 更改了属性的物品堆 |                              |
|   `stack.withTag(IData tag)`   | 更改了属性的物品堆 | [IData](/Vanilla/Data/IData) |
| `stack.removeTag(String name)` | 更改了属性的物品堆 |            string            |
|  `stack.updateTag(IData tag)`  | 更改了属性的物品堆 | [IData](/Vanilla/Data/IData) |


#### 方块转换（Block Casting，也就是返回物品对应的方块）

|     方法调用      |                 Returns                  |
| :---------------: | :--------------------------------------: |
| `stack.asBlock()` | 新的 [方块](/Vanilla/Blocks/IBlock) 对象 |
| `stack as IBlock` | 新的 [方块](/Vanilla/Blocks/IBlock) 对象 |


#### 显示名称（Lore/DisplayName）

|               方法调用               |                           Returns                            |          参数类型           |
| :----------------------------------: | :----------------------------------------------------------: | :-------------------------: |
| `stack.withDisplayName(String name)` | 更改了属性的物品堆，不同于 `displayName` ，这个方法只应用于单个物品。 | string   (支持样式符号 "§") |
|   `stack.withLore(String[] lore)`    |                     更改了属性的物品堆.                      | string[] (支持样式符号 "§") |
|      `stack.clearCustomName()`       |                        void (nothing)                        |                             |

#### 附魔（Enchantments）

|                           方法调用                           |    Returns     |                           参数类型                           |
| :----------------------------------------------------------: | :------------: | :----------------------------------------------------------: |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition enchantment)` |     布尔值     | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition) |
|       `stack.addEnchantment(IEnchantment enchantment)`       | void (nothing) |      [IEnchantment](/Vanilla/Enchantments/IEnchantment)      |



#### 物品能力（canItem...）

|                    方法调用                    |                           Returns                            |               参数类型                |
| :--------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------: |
|       `stack.canPlaceOn(IBlockPos pos)`        |                   物品是否可以放置在方块上                   | [IBlockPos](/Vanilla/World/IBlockPos) |
|       `stack.canDestroy(IBlockPos pos)`        |                     物品是否可以破坏方块                     | [IBlockPos](/Vanilla/World/IBlockPos) |
|     `stack.canHarvestBlock(IBlockPos pos)`     |                     物品是否可以采掘方块                     | [IBlockPos](/Vanilla/World/IBlockPos) |
| `stack.getStrengthAgainstBlock(IBlockPos pos)` | A float that represents the item's strength against the block. | [IBlockPos](/Vanilla/World/IBlockPos) |

#### 创建实体物品（create IEntityItem）
|                           方法调用                           |                           Returns                            |                       Parameter Types                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | 生成在世界上的对应 [实体物品](/Vanilla/Entities/IEntityItem) |        [IWorld](/Vanilla/World/IWorld), int, int, int        |
|    `stack.createEntityItem(IWorld world, IBlockPos pos);`    | 生成在世界上的对应 [实体物品](/Vanilla/Entities/IEntityItem) | [IWorld](/Vanilla/World/IWorld), [IBlockPos](/Vanilla/World/IBlockPos) |


## 物品转换和物品条件
你可以在 [材料](/Vanilla/Variable_Types/IIngredient) 篇章，或者是以下两个篇章看到它们的条目：

- [物品条件](Item_Conditions)  
- [物品转换](Item_Transformers)



## 示例

#### 显示名称（DisplayName） 

全局（将物品翻译修改为新的名称）。
```js
val apple = <minecraft:apple>;

//打印出 "Apple"
print(apple.displayName);

//将苹果的显示名称转换为 "Tomato"
apple.displayName = "Tomato";

//打印出 "Tomato"
print(apple.displayName);
```

本地（只作用于单个物品）。
```
<minecraft:coal>.withDisplayName("Black Gold");
```

#### Lore（即物品下方自定义的说明）
`<minecraft:coal>.withLore(["This function","requires a","string[]"]);`

#### 最大堆叠数
举个例子，羊毛的最大堆叠数是 64，但是桶只是 16。
```js
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//打印输出 64
print(apple.maxStackSize);

//将苹果最大堆叠数变换为 32
apple.maxStackSize = 32;

//打印输出 32
print(apple.maxStackSize);

//将苹果最大堆叠数修改为桶的最大堆叠数
apple.maxStackSize = bucket.maxStackSize;

//打印输出 16
print(apple.maxStackSize);
```

#### 硬度（Hardness）
硬度决定了破坏对应方块的耗时长短，仅对方块对应物品有效。
```js
val grass = <minecraft:grass>;

//打印输出 1.0
print(grass.hardness);

//设置草方块硬度为 10.0
grass.hardness = 10.0;

//打印输出 10.0
print(grass.hardness);
```

#### 伤害值（Damage，也就是常说的耐久）
物品的耐久，不能为0。

```kotlin
val pick = <minecraft:diamond_pickaxe>;

//打印输出 1561
print(pick.maxDamage);

//将钻石镐最大耐久设置为 256
pick.maxDamage = 256;

//打印输出 256
print(pick.maxDamage);



//合成中将不限制耐久
<minecraft:iron_pickaxe>.anyDamage();

//指定耐久
<minecraft:iron_pickaxe>.withDamage(122);
```

#### 标签（Tag，也就是常说的 NBT）

标签实际上是一个 [数据](/Vanilla/Data/IData) 对象。
如果一个物品不包含标签，返回值为空标签，永远都不会为 null。

```js
//指定标签的苹果
//会移除已经存在的标签
<minecraft:apple>.withTag({Unbreakable: 1});

//空标签苹果
<minecraft:apple>.withEmptyTag();

//通过名称移除标签
item.removeTag("tagName");

//更新已经存在的标签
//如果标签没有复写已经存在的标签，那么他们会保持不变
item.updateTag({Unbreakable: 1});
```

#### 流体（Liquid）

返回物品中包含的一个或者多个流体，如果没有流体，则返回 null
返回值为 [流体堆](/Vanilla/Liquids/ILiquidStack) 对象，或者为 null
```kotlin
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### 数量（Amount）

苹果的数量？
```kotlin
<minecraft:apple>.anyAmount();

//1 Apple
val apple = <minecraft:apple>;

//2 Apples
val moreApples = apple * 2;

//3 Apples
val evenMoreApples = <minecraft:apple> * 3;
```

#### 权重（Weight）

返回一个指定百分比的 [加权物品堆](weightedItemStack)。
```js
val apple = <minecraft:apple>;

//创建一个 100% 几率的加权物品堆
var applePercentage = apple % 100;

//和上面做法相同
applePercentage = apple.weight(1.0);
```

#### 矿物词典（Ores）
返回这个物品的 [矿物词典条目](/Vanilla/OreDict/IOreDictEntry) 列表。
```kotlin
<minecraft:apple>.ores;
```

#### 转换为方块类型（Casting to IBlock）
你可以将物品堆转换为 [方块](/Vanilla/Blocks/IBlock)，只要这个物品有对应方块，否则就会抛出异常。
```kotlin
<minecraft:dirt>.asBlock();
<minecraft:dirt> as crafttweaker.block.IBlock;
```
