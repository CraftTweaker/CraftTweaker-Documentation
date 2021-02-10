# IIngredient

This is IIngredient!!!

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredient;
```


## Implemented Interfaces
IIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredient

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| Result type                                | Is Implicit |
| ------------------------------------------ | ----------- |
| [IData](/vanilla/api/data/IData)           | true        |
| [Ingredient](/vanilla/api/item/Ingredient) | true        |
| [MapData](/vanilla/api/data/MapData)       | true        |

## Methods

### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.anyDamage() as MCIngredientConditioned<IIngredient>
<tag:items:forge:ingots>.anyDamage();
```

### asVanillaIngredient

Create a Vanilla ingredient matching this one.

Return Type: [Ingredient](/vanilla/api/item/Ingredient)

```zenscript
IIngredient.asVanillaIngredient() as Ingredient
<tag:items:forge:ingots>.asVanillaIngredient();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IIngredient.getRemainingItem(stack as IItemStack) as IItemStack
<tag:items:forge:ingots>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack) as boolean
<tag:items:forge:ingots>.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IIngredient.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Parameter    | Type                                        | Description                |
| ------------ | ------------------------------------------- | -------------------------- |
| stack        | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check         |
| ignorar daño | boolean                                     | ¿Debe comprobarse el daño? |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyDamaged() as MCIngredientConditioned<IIngredient>
<tag:items:forge:ingots>.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


## Operators

### OR

```zenscript
myIIngredient | other as IIngredient
```




## Properties

| Name          | Type                                          | Has Getter | Has Setter |
| ------------- | --------------------------------------------- | ---------- | ---------- |
| commandString | string                                        | true       | false      |
| items         | [IItemStack](/vanilla/api/items/IItemStack)[] | true       | false      |

