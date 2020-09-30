# MCTag

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methoden
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Beschreibung            |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Beschreibung            |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addFluids

```zenscript
myMCTag.addFluids(Flüssigkeiten als crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Beschreibung            |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### addItems

Fügt Items zu diesem Tag hinzu, wird fehlschlagen, wenn dies kein Tag ist, das Items enthalten kann

```zenscript
myMCTag.addItems(Gegenstände als crafttweaker.api.item.IItemStack[]);
myMCTag.addItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Beschreibung                             |
| --------- | ------------------------------------------------------------------- | ---------------------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Elemente, die zum Tag hinzugefügt werden |


### anyDamage

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anySchaden();
```

### createBlockTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createFluidTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createFluidTag();
```

### createItemTag

Rückgabetyp: [craftweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(Stapel als crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung                              |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(Stapel als crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Beschreibung       |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(Stapel als crafttweaker.api.item.IItemStack, ignoreSchaden als boolean);
```

| Parameter     | Type                                                              | Beschreibung                       |
| ------------- | ----------------------------------------------------------------- | ---------------------------------- |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check                 |
| ignoreSchaden | boolean                                                           | Soll der Schaden überprüft werden? |


### onlyDamaged

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Retourentyp: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Beschreibung            | IsOptional | Standardwert |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------ |
| uid       | String                                                                                                  | No description provided | false      | `null`       |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`       |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Parameter | Type                                                            | Beschreibung            |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocks    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Parameter | Type                                                                         | Beschreibung            |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| entities  | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### entfernen Flüssigkeiten

```zenscript
myMCTag.removeFluids(Flüssigkeiten als crafttweaker.api.fluid.MCFluid[]);
```

| Parameter | Type                                                           | Beschreibung            |
| --------- | -------------------------------------------------------------- | ----------------------- |
| fluids    | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[] | No description provided |


### removeItems

entfernt Items von diesem Tag, wird fehlschlagen, wenn dies kein Schlagwort ist, das Items enthalten kann

```zenscript
myMCTag.removeItems(Items als crafttweaker.api.item.IItemStack[]);
myMCTag.removeItems(<item:minecraft:dirt>);
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Zu entfernende Elemente |



## Properties

| Name            | Type                                                                             | Has Getter | Has Setter |
| --------------- | -------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]                  | true       | false      |
| commandString   | String                                                                           | true       | false      |
| entityTypes     | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[]     | true       | false      |
| erster Block    | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)                    | true       | false      |
| firstEntityType | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)       | true       | false      |
| erstefluid      | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true       | false      |
| firstItem       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                | true       | false      |
| fluids          | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)[]                   | true       | false      |
| id              | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| isBlockTag      | boolean                                                                          | true       | false      |
| isEntityTypeTag | boolean                                                                          | true       | false      |
| isFluidTag      | boolean                                                                          | true       | false      |
| isItemTag       | boolean                                                                          | true       | false      |
| items           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]              | true       | false      |

## Operatoren
### OR (ODER)

```zenscript
<tag:ingotIron> | Andere als crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Beschreibung            |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

