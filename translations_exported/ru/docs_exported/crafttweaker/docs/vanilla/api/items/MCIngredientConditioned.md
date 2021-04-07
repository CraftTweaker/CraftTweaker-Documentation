# MCIngredientConditioned&LT;T : IIngredient&GT;

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientConditioned;
```


## Implemented Interfaces
MCIngredientConditioned implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientConditioned

- [IIngredient](/vanilla/api/items/IIngredient)

## Утилиты

| Тип результата                       | Является неявным |
| ------------------------------------ | ---------------- |
| [IData](/vanilla/api/data/IData)     | true             |
| [MapData](/vanilla/api/data/MapData) | true             |

## Methods

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
MCIngredientConditioned.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Параметр    | Тип                                                                 | Description             | Optional | DefaultValue |
| ----------- | ------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| контент     | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
MCIngredientConditioned.addTooltip(content as MCTextComponent) as void
```

| Параметр | Тип                                                                 | Description             |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| контент  | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.anyDamage() as MCIngredientConditioned<IIngredient>
myMCIngredientConditioned.anyDamage();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
MCIngredientConditioned.clearTooltip() as void
myMCIngredientConditioned.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
MCIngredientConditioned.contains(ingredient as IIngredient) as boolean
myMCIngredientConditioned.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Параметр   | Тип                                           | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCIngredientConditioned.getRemainingItem(stack as IItemStack) as IItemStack
myMCIngredientConditioned.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description                               |
| -------- | ------------------------------------------- | ----------------------------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
MCIngredientConditioned.matches(stack as IItemStack) as boolean
myMCIngredientConditioned.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description        |
| -------- | ------------------------------------------- | ------------------ |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
MCIngredientConditioned.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Параметр      | Тип                                         | Description             |
| ------------- | ------------------------------------------- | ----------------------- |
| stack         | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| Игнорирование | boolean                                     | No Description Provided |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
MCIngredientConditioned.modifyTooltip(function as ITooltipFunction) as void
```

| Параметр | Тип                                                     | Description             |
| -------- | ------------------------------------------------------- | ----------------------- |
| function | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Параметр  | Тип                                                                                                                              | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.onlyDamaged() as MCIngredientConditioned<IIngredient>
myMCIngredientConditioned.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                      | Description             | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid      | string                                                                   | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
MCIngredientConditioned.removeTooltip(regex as string) as void
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| regex    | string | No Description Provided |


:::


## Операторы

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCIngredientConditioned
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myMCIngredientConditioned
```

:::

:::group{name=OR}

```zenscript
myMCIngredientConditioned | other as IIngredient
```

:::


## Свойства

| Название       | Тип                                                                                  | Имеет Getter | Имеет Setter |
| -------------- | ------------------------------------------------------------------------------------ | ------------ | ------------ |
| baseIngredient | T                                                                                    | true         | false        |
| burnTime       | void                                                                                 | false        | true         |
| condition      | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;T&gt; | true         | false        |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                        | true         | false        |

