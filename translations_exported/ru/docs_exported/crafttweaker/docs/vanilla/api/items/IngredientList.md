# Список ингредиентов

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IngredientList;
```


## Implemented Interfaces
IngredientList implements the following interfaces. That means all methods defined in these interfaces are also available in IngredientList

- [IIngredient](/vanilla/api/items/IIngredient)

## Утилиты

| Тип результата                       | Является неявным |
| ------------------------------------ | ---------------- |
| [IData](/vanilla/api/data/IData)     | true             |
| [MapData](/vanilla/api/data/MapData) | true             |

## Methods

### addShiftTooltip

Return Type: void

```zenscript
IngredientList.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Параметр    | Тип                                                                 | Description             | Optional | DefaultValue |
| ----------- | ------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| контент     | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |

### addTooltip

Return Type: void

```zenscript
IngredientList.addTooltip(content as MCTextComponent) as void
```

| Параметр | Тип                                                                 | Description             |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| контент  | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.anyDamage() as MCIngredientConditioned<IIngredient>
myIngredientList.anyDamage();
```

### clearTooltip

Return Type: void

```zenscript
IngredientList.clearTooltip() as void
myIngredientList.clearTooltip();
```

### contains

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
IngredientList.contains(ingredient as IIngredient) as boolean
myIngredientList.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Параметр   | Тип                                           | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IngredientList.getRemainingItem(stack as IItemStack) as IItemStack
myIngredientList.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description                               |
| -------- | ------------------------------------------- | ----------------------------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
IngredientList.matches(stack as IItemStack) as boolean
myIngredientList.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description        |
| -------- | ------------------------------------------- | ------------------ |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### modifyTooltip

Return Type: void

```zenscript
IngredientList.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                     | Description             |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


### only

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                              | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.onlyDamaged() as MCIngredientConditioned<IIngredient>
myIngredientList.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IngredientList.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                      | Description             | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid      | string                                                                   | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |

### removeTooltip

Return Type: void

```zenscript
IngredientList.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |



## Операторы

### CONTAINS

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myIngredientList
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myIngredientList
```



### OR

```zenscript
myIngredientList | other as IIngredient
```




## Свойства

| Название | Тип  | Имеет Getter | Имеет Setter |
| -------- | ---- | ------------ | ------------ |
| burnTime | void | false        | true         |

