# Vanilla Factory

The Vanilla Factory allows you to create [Blocks](Block), [Items](Item) and [Creative Tabs](CreativeTabs) that you can then add to the game.

## Calling
You can find the package at `mods.contenttweaker.VanillaFactory`

## Creating Content

### Create Blocks

```JAVA
mods.contenttweaker.VanillaFactory.createBlock(String unlocalizedName, IMaterialDefinition material);
```
Parameters:  

- String unlocalizedName: The Block's unlocalized name.
- [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition) material: The base material the block is made of.

Returns a [BlockRepresentation](Block) object. Check the [Block page](Block) for further information and an example script!


### Create Items

```JAVA
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```
Parameters:

- String unlocalizedName: The item's unlocalized name.

Returns an [ItemRepresentation](Item) object. Check the [Item page](Item) for further information and an example script!


### Create Creative Tabs
```JAVA
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
```
Parameters:

- String unlocalizedName: The Tab's unlocalized Name.
- Item or Block representation: The Item/Block to be displayed as the Tab's symbol.

Returns a [ICreativeTab](Creative_Tab) object. Check the [Creative Tab page](Creative_Tab) for further information and an example script!


### Create Fluids
```JAVA
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```
Parameters:

- String unlocalizedName: The Fluid's unlocalized name.
- int color: The fluid's color-code.
- [CTColor](/Mods/ContentTweaker/Vanilly/Types/Color/Color) color: The fluid's color as color-Object.

Returns a [FluidRepresentation](Fluid) object. Check the [Fluid page](Fluid) for further information and an example script.


### Create Food Items
```JAVA
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```
Parameters:

- String unlocalizedName: The item's unlocalized Name.
- int healAmount: The Food Value

Returns an [ItemFoodRepresentation](ItemFood) object. Check out the [Food page](ItemFood) for further information and an example script.
