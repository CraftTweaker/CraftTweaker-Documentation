# IItemStack

An IItemStack Object consists of an [item definition](IItemDefinition), a meta/damage value and NBT data.  
In other words, it refers to an item or to a block.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemStack;`

## Calling an IItemStack
There are several methods that return an IItemStack

* Using the [bracket Handler](/Vanilla/Brackets/Bracket_Item) `<minecraft:apple>`
* Using the `makeStack()` method on a [IItemDefinition](IItemDefinition) object `<minecraft:stone>.definition.makeStack(0)`
* Using the `stack` getter on a [IEntityDrop](/Vanilla/Entities/IEntityDrop) object
* Using the `firstItem` getter on a [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)

## Calling an IItemStack[] or a IItemStack List
If you call these functions, you will most likely do so to iterate through the resulting lists/Arrays

* Using the `items` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient) returns a IItemStack List: `<ore:ingotGold>.items`
* Using the `itemArray` method on an [IIngredient](/Vanilla/Variable_Types/IIngredient) returns a IItemStack[]: `<ore:ingotGold>.itemArray`
* Using the `items` method on a [IMod](/Vanilla/Game/Mods#imod) object returns a IItemStack[]: `loadedMods["minecraft"].items`


## Functions
So what can we do with that now?

### Extending IIngredient
IItemStack extends [IIngredient](/Vanilla/Variable_Types/IIngredient).  
That means all functionality that is available to  [IIngredient](/Vanilla/Variable_Types/IIngredient) objects also is applicable to IItemStacks.
<details><summary>Derived Methods</summary>
	<ul>
		<li>stack.mark</li>
		<li>stack.amount</li>
		<li>stack.items</li>
		<li>stack.itemArray</li>
		<li>stack.liquids</li>
		<li>stack | otherIngredient</li>
		<li>stack.or(otherIngredient)</li>
		<li>stack.transform([transformer](Item_Transformers))</li>
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

| ZenGetter/ZenMethod | ZenSetter/ZenMethod | Type                                                   |
|---------------------|---------------------|--------------------------------------------------------|
| definition          |                     | [IItemDefinition](IItemDefinition)                     |
| name                |                     | string                                                 |
| displayName         | displayName         | string                                                 |
| maxStackSize        | maxStackSize        | int                                                    |
| hardness            | hardness            | float                                                  |
| damage              |                     | int                                                    |
| maxDamage           | maxDamage           | int                                                    |
| hasTag              |                     | bool                                                   |
| tag                 | withTag(tag)        | [IData](/Vanilla/Data/IData)                           |
| ores                |                     | List<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry)>  |
| toolClasses         |                     | List<string\>                                          |
| itemEnchantability  |                     | int                                                    |
| containerItem       |                     | IItemStack                                             |
| hasContainerItem    |                     | bool                                                   |
| repairCost          | repairCost          | int                                                    |
| canEditBlocks       |                     | bool                                                   |
| isOnItemFrame       |                     | bool                                                   |
| isEnchantable       |                     | bool                                                   |
| isEnchanted         |                     | bool                                                   |
| isDamaged           |                     | bool                                                   |
| isDamageable        |                     | bool                                                   |
| isStackable         |                     | bool                                                   |
| hasEffect           |                     | bool                                                   |
| hasDisplayName      |                     | bool                                                   |
| metadata            |                     | int                                                    |
| hasSubtypes         |                     | bool                                                   |
| isEmpty             |                     | bool                                                   |
| burnTime            |                     | int                                                    |
| showsDurabilityBar  |                     | bool                                                   |
| hasCustomEntity     |                     | bool                                                   |



#### Amount

| Method call                    | Returns                                                        | ParameterTypes |
|--------------------------------|----------------------------------------------------------------|----------------|
| `stack.anyAmount()`            | A new IItemStack with the changed property                     |                |
| `stack.amount(int amount)`     | A new IItemStack with the changed property                     | int            |
| `stack.withAmount(int amount)` | A new IItemStack with the changed property                     | int            |
| `stack *  amount`              | A new IItemStack with the changed property                     | int            |
| `stack.splitStack(int amount)` | The split IItemStack. The old one will be reduced accordingly. | int            |


#### Weight

| Method call                    | Returns                                    | ParameterTypes     |
|--------------------------------|--------------------------------------------|--------------------|
| `stack.percent(float chance)`  | A [WeightedItemStack](WeightedItemStack)   | float (100 = 100%) |
| `stack.weight(float chance)`   | A [WeightedItemStack](WeightedItemStack)   | float (1 = 100%)   |


#### Damage

| Method call                                    | Returns                                    | ParameterTypes                            |
|------------------------------------------------|--------------------------------------------|-------------------------------------------|
| `stack.anyDamage()`                            | A new IItemStack with the changed property |                                           |
| `stack.withDamage(int damage)`                 | A new IItemStack with the changed property | int                                       |
| `stack.damageItem(int amount, IEntity entity)` | void (nothing)                             | int, [IEntity](/Vanilla/Entities/IEntity) |


#### Tags

| Method call                    | Returns                                    | ParameterTypes               |
|--------------------------------|--------------------------------------------|------------------------------|
| `stack.withEmtpyTag()`         | A new IItemStack with the changed property |                              |
| `stack.withTag(IData tag)`     | A new IItemStack with the changed property | [IData](/Vanilla/Data/IData) |
| `stack.removeTag(String name)` | A new IItemStack with the changed property | string                       |
| `stack.updateTag(IData tag)`   | A new IItemStack with the changed property | [IData](/Vanilla/Data/IData) |


#### Block Casting

| Method call           | Returns                                        |
|-----------------------|------------------------------------------------|
| `stack.asBlock()`     | A new [IBlock](/Vanilla/Blocks/IBlock) object. |
| `stack as IBlock`     | A new [IBlock](/Vanilla/Blocks/IBlock) object. |


#### Lore/DisplayName

| Method call                          | Returns                                                                                                           | ParameterTypes                            |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| `stack.withDisplayName(String name)` | A new IItemStack with the changed property. Unlike the displayName setter, this only applies to this single item. | string   (supports color codes with "Â§") |
| `stack.withLore(String[] lore)`      | A new IItemStack with the changed property.                                                                       | string[] (supports color codes with "Â§") |
| `stack.clearCustomName()`            | void (nothing)                                                                                                    |                                           |


#### canItem...

| Method call                                    | Returns                                                        | ParameterTypes                        |
|------------------------------------------------|----------------------------------------------------------------|---------------------------------------|
| `stack.canPlaceOn(IBlockPos pos)`              | A bool that tells if the item can be placed on the block.      | [IBlockPos](/Vanilla/World/IBlockPos) |
| `stack.canDestroy(IBlockPos pos)`              | A bool that tells if the item can destroy the block.           | [IBlockPos](/Vanilla/World/IBlockPos) |
| `stack.canHarvestBlock(IBlockPos pos)`         | A bool that tells if the item can harvest the block.           | [IBlockPos](/Vanilla/World/IBlockPos) |
| `stack.getStrengthAgainstBlock(IBlockPos pos)` | A float that represents the item's strength against the block. | [IBlockPos](/Vanilla/World/IBlockPos) |