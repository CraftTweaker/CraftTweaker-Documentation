# IngredientAny

An IIngredient which matches all items

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IngredientAny;
```


## Implemented Interfaces
IngredientAny implements the following interfaces. That means all methods defined in these interfaces are also available in IngredientAny

- [IIngredient](/vanilla/api/items/IIngredient)

## Methods

### getInstance

Return Type: [IngredientAny](/vanilla/api/items/IngredientAny)

```zenscript
IngredientAny.getInstance() as IngredientAny
IngredientAny.getInstance();
```

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |
| [MapData](/vanilla/api/data/MapData) | true |

## Methods

### addShiftTooltip

Return Type: void

```zenscript
IngredientAny.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| content | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false |  |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true |  |

### addTooltip

Return Type: void

```zenscript
IngredientAny.addTooltip(content as MCTextComponent) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| content | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientAny.anyDamage() as MCIngredientConditioned<IIngredient>
myIngredientAny.anyDamage();
```

### clearTooltip

Return Type: void

```zenscript
IngredientAny.clearTooltip() as void
myIngredientAny.clearTooltip();
```

### contains

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IngredientAny.contains(ingredient as IIngredient) as boolean
myIngredientAny.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid?
 Does not check if the stack matches though!
 Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IngredientAny.getRemainingItem(stack as IItemStack) as IItemStack
myIngredientAny.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IngredientAny.matches(stack as IItemStack) as boolean
myIngredientAny.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### modifyTooltip

Return Type: void

```zenscript
IngredientAny.modifyTooltip(function as ITooltipFunction) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


### only

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientAny.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientAny.onlyDamaged() as MCIngredientConditioned<IIngredient>
myIngredientAny.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientAny.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| uid | string | No Description Provided | false |  |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true |  |

### removeTooltip

Return Type: void

```zenscript
IngredientAny.removeTooltip(regex as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | No Description Provided |



## Operators

### CONTAINS

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIngredientAny
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myIngredientAny
```



### OR

```zenscript
myIngredientAny | other as IIngredient
```




## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| burnTime | void | false | true |

