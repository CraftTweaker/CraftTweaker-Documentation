# MCIngredientTransformed

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCIngredientTransformed
```

## Implemented Interfaces
MCIngredientTransformed implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Methods
### anyDamage

Return type: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.anyDamage();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
null.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
null.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description                               |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return type: boolean

```zenscript
null.matches(stack as crafttweaker.api.item.IItemStack);
null.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                                              | Description        |
| --------- | ----------------------------------------------------------------- | ------------------ |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



Return type: boolean

```zenscript
myMCIngredientTransformed.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Parameter    | Type                                                              | Description             |
| ------------ | ----------------------------------------------------------------- | ----------------------- |
| stack        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |
| ignoreDamage | boolean                                                           | No description provided |


### onlyDamaged

Return type: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyDamaged();
```

### onlyIf

Return type: [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
null.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Parameter | Type                                                                                                    | Description             | IsOptional | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- | ------------- |
| uid       | String                                                                                                  | No description provided | false      | `null`        |
| function  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | No description provided | true       | `null`        |



## Properties

| 이름             | Type                                                                                                           | Has Getter | Has Setter |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| baseIngredient | T                                                                                                              | true       | false      |
| commandString  | String                                                                                                         | true       | false      |
| items          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]                                            | true       | false      |
| transformer    | [crafttweaker.api.item.IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true       | false      |

## 연산자
### OR

```zenscript
<tag:ingotIron> | other as crafttweaker.api.item.IIngredient
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No description provided |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | true        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | true        |

