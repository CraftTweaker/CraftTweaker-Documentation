# IItemStack

Объект IItemStack состоит из [определения предмета](/Vanilla/Items/IItemDefinition/), значения метаданных и NBT.  
Другими словами, он ссылается на предмет или блок.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.item.IItemStack;`

## Вызов IItemStack

Есть несколько методов, как получить IItemStack:

* Using the [bracket Handler](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Using the `makeStack()` method on a [IItemDefinition](/Vanilla/Items/IItemDefinition/) object `<minecraft:stone>.definition.makeStack(0)`
* Using the `stack` getter on a [IEntityDrop](/Vanilla/Entities/IEntityDrop/) object
* Using the `firstItem` getter on a [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

If you call these functions, you will most likely do so to iterate through the resulting lists/Arrays

* Using the `items` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient/) returns a IItemStack List: `<ore:ingotGold>.items`
* Using the `itemArray` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient/) returns a IItemStack[]: `<ore:ingotGold>.itemArray`
* Using the `items` method on a [IMod](/Vanilla/Game/Mods/#imod) object returns a IItemStack[]: `loadedMods["minecraft"].items`

## Функции

Так что же мы можем сделать с ним сейчас?

### Наследование от IIngredient

IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
That means all functionality that is available to [IIngredient](/Vanilla/Variable_Types/IIngredient/) objects also is applicable to IItemStacks. <details><summary>Derived Methods</summary> 

* stack.mark
* stack.amount
* stack.items
* stack.itemArray
* stack.liquids
* stack.commandString
* stack | otherIngredient
* stack.or(otherIngredient)
* stack.transform([transformer](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([transformer](/Vanilla/Items/Item_Transformers/))
* stack.only([condition](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* stack.matches(item)
* stack.matchesExact(item)
* stack.matches(liquid)
* stack has ingredient
* stack.applyTransform(stack,player)
* stack.hasTransformers()</details>

### Геттеры/сеттеры

Можете прочитать, как их использовать [здесь](/UsingThisWiki/). Также, можете проверить примеры ниже.

| Геттер/метод          | Сеттер/метод | Тип                                                         |
| --------------------- | ------------ | ----------------------------------------------------------- |
| definition            |              | [IItemDefinition](/Vanilla/Items/IItemDefinition/)          |
| name                  |              | string                                                      |
| displayName           | displayName  | string                                                      |
| maxStackSize          | maxStackSize | int                                                         |
| hardness              | hardness     | float                                                       |
| damage                |              | int                                                         |
| maxDamage             | maxDamage    | int                                                         |
| hasTag                |              | bool                                                        |
| tag                   | withTag(tag) | [IData](/Vanilla/Data/IData/)                               |
| ores                  |              | List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>    |
| toolClasses           |              | List<string\>                                              |
| itemEnchantability    |              | int                                                         |
| containerItem         |              | IItemStack                                                  |
| hasContainerItem      |              | bool                                                        |
| repairCost            | repairCost   | int                                                         |
| canEditBlocks         |              | bool                                                        |
| isOnItemFrame         |              | bool                                                        |
| isEnchantable         |              | bool                                                        |
| isEnchanted           |              | bool                                                        |
| isDamaged             |              | bool                                                        |
| isDamageable          |              | bool                                                        |
| isItemBlock           |              | bool (if contained item is an itemblock)                    |
| isStackable           |              | bool                                                        |
| isBeaconPayment       |              | bool                                                        |
| hasEffect             |              | bool                                                        |
| hasDisplayName        |              | bool                                                        |
| metadata              |              | int                                                         |
| hasSubtypes           |              | bool                                                        |
| isEmpty               |              | bool                                                        |
| burnTime              |              | int                                                         |
| showsDurabilityBar    |              | bool                                                        |
| hasCustomEntity       |              | bool                                                        |
| enchantments          |              | List<[IEnchantment](/Vanilla/Enchantments/IEnchantment/)\> |
| совпадающий Тег Точно |              | bool                                                        |
| maxItemUseDuration    |              | int                                                         |

#### Количество

| Вызов метода                   | Возвращает                                                  | Типы параметров |
| ------------------------------ | ----------------------------------------------------------- | --------------- |
| `stack.anyAmount()`            | Новый IItemStack с измененным свойством                     |                 |
| `stack.amount(int amount)`     | Новый IItemStack с измененным свойством                     | int             |
| `stack.withAmount(int amount)` | Новый IItemStack с измененным свойством                     | int             |
| `stack *  amount`              | Новый IItemStack с измененным свойством                     | int             |
| `stack.splitStack(int amount)` | Разделяет IItemStack. Старый будет соответственно уменьшен. | int             |

#### Вес

| Вызов метода                  | Возвращает                                             | Типы параметров    |
| ----------------------------- | ------------------------------------------------------ | ------------------ |
| `stack.percent(float chance)` | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%) |
| `stack.weight(float chance)`  | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)   |

#### Damage

| Вызов метода                                   | Возвращает                              | Типы параметров                            |
| ---------------------------------------------- | --------------------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                            | Новый IItemStack с измененным свойством |                                            |
| `stack.withDamage(int damage)`                 | Новый IItemStack с измененным свойством | int                                        |
| `stack.damageItem(int amount, IEntity entity)` | void                                    | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Теги

| Вызов метода                                     | Возвращает                              | Типы параметров                     |
| ------------------------------------------------ | --------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Новый IItemStack с измененным свойством |                                     |
| `stack.withTag(IData tag)`                       | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String name)`                   | Новый IItemStack с измененным свойством | string                              |
| `stack.updateTag(тег IDat)`                      | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData тег, bool matchTagExact)` | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/), bool |

#### Block Casting

| Вызов метода      | Возвращает                                      |
| ----------------- | ----------------------------------------------- |
| `stack.asBlock()` | A new [IBlock](/Vanilla/Blocks/IBlock/) object. |
| `stack as IBlock` | A new [IBlock](/Vanilla/Blocks/IBlock/) object. |

#### Lore/DisplayName

| Вызов метода                         | Возвращает                                                                                                        | Типы параметров                          |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `stack.withDisplayName(String name)` | A new IItemStack with the changed property. Unlike the displayName setter, this only applies to this single item. | string (supports color codes with "§")   |
| `stack.withLore(String[] lore)`      | A new IItemStack with the changed property.                                                                       | string[] (supports color codes with "§") |
| `stack.clearCustomName()`            | void                                                                                                              |                                          |

#### Enchantments

| Вызов метода                                                        | Возвращает | Типы параметров                                                         |
| ------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| `stack.canApplyAtCraftingTable(IEnchantmentDefinition enchantment)` | A bool.    | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `stack.addEnchantment(IEnchantment enchantment)`                    | void       | [IEnchantment](/Vanilla/Enchantments/IEnchantment/)                     |

#### canItem...

| Вызов метода                                       | Возвращает                                                     | Типы параметров                                       |
| -------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition block)`         | A bool that tells if the item can be placed on the block.      | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(IBlockDefinition block)`         | A bool that tells if the item can destroy the block.           | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(IBlockState block)`         | A bool that tells if the item can harvest the block.           | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengthAgainstBlock(IBlockState block)` | A float that represents the item's strength against the block. | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| Вызов метода                                                 | Возвращает                                                                                                  | Parameter Types                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | A new [IEntityItem](/Vanilla/Entities/IEntityItem/) that corresponds to the newly created item in the world | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | A new [IEntityItem](/Vanilla/Entities/IEntityItem/) that corresponds to the newly created item in the world | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## ItemTransformers and ItemConditions

You can find how to use these either in the [IIngredient](/Vanilla/Variable_Types/IIngredient/) page or in their respecive entries:  
[Item Conditions](/Vanilla/Items/Item_Conditions/)  
[Item Transformers](/Vanilla/Items/Item_Transformers/)

## Примеры

#### DisplayName

Globally (translates the item to the new name).

```zenscript
val apple = <minecraft:apple>;

//prints "Apple"
print(apple.displayName);

//Sets apples Display Name to "Tomato"
apple.displayName = "Tomato";

//prints "Tomato"
print(apple.displayName);
```

Locally (only this single item).

```zenscript
<minecraft:coal>.withDisplayName("Black Gold");
```

#### Lore

`<minecraft:coal>.withLore(["This function","requires a","string[]"]);`

#### Maximum Stack Size

The maximum Stack Size is how many items fit in one Stack, for example, wool’s Stack size is 64 and Buckets’ only 16.

```zenscript
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//prints 64
print(apple.maxStackSize);

//sets apples Max Stack size to 32
apple.maxStackSize = 32;

//prints 32
print(apple.maxStackSize);

//sets apples Max Stack size to Bucket's Max Stack size
apple.maxStackSize = bucket.maxStackSize;

//prints 16
print(apple.maxStackSize);
```

#### Hardness

The Hardness is how long it takes to break the referred block. Only works if the object refers to a block.

```zenscript
val grass = <minecraft:grass>;

//prints 1.0
print(grass.hardness);

//sets grass Hardness to 10.0
grass.hardness = 10.0;

//prints 10.0
print(grass.hardness);
```

#### Damage

The damage for items that cannot be damaged is 0.

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//prints 1561
print(pick.maxDamage);

//sets the max damage of the Diamond Pickaxe to 256
pick.maxDamage = 256;

//prints 256
print(pick.maxDamage);



//Damage doesn't matter, used in recipes
<minecraft:iron_pickaxe>.anyDamage();

//With the given damage
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Tag

The tag is an [IData](/Vanilla/Data/IData/) object.  
If the item does not contain a tag, it will return an empty tag, never null.

```zenscript
//creates apple with the given tag
//Removes existing tags
<minecraft:apple>.withTag({Unbreakable: 1});

//creates apple with an emtpy tag
<minecraft:apple>.withEmptyTag();

//removes a tag by its name
item.removeTag("tagName");

//update the existing tag
//If the tag doesn't override an existing tag, they will stay constant.
item.updateTag({Unbreakable: 1});
```

#### Liquid

Returns the liquid contained in a single item (if multiple) or null if the item is no container.  
Returns an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Object or null.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Количество

How many apples are there?

```zenscript
<minecraft:apple>.anyAmount();

//1 Apple
val apple = <minecraft:apple>;

//2 Apples
val moreApples = apple * 2;

//3 Apples
val evenMoreApples = <minecraft:apple> * 3;
```

#### Weight

Returns a [weightedItemStack](/Vanilla/Items/WeightedItemStack/) with the provided percentage.

```zenscript
val apple = <minecraft:apple>;

//Creates a weightedItemStack with 100 percent chance
var applePercentage = apple % 100;

//Does the same as the above
applePercentage = apple.weight(1.0);
```

#### Ores

Returns a List of [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) referring to this item.

```zenscript
<minecraft:apple>.ores;
```

#### Casting to IBlock

You can cast an IItemStack to an [IBlock](/Vanilla/Blocks/IBlock/), as long as you are referring to a block, otherwise the cast will throw an exception.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> as crafttweaker.block.IBlock;
```

You can also test if an IItemStack contains an ItemBlock and can thus be converted:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Food Properties

You can check if an IItemStack is a food item and what food properties it has.  
May not work for every modded food item!

```zenscript
<minecraft:apple>.isFood; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```