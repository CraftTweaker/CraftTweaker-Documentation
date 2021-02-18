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

### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.anyDamage() as MCIngredientConditioned<IIngredient>
myMCIngredientConditioned.anyDamage();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCIngredientConditioned.getRemainingItem(stack as IItemStack) as IItemStack
myMCIngredientConditioned.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description                               |
| -------- | ------------------------------------------- | ----------------------------------------- |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
MCIngredientConditioned.matches(stack as IItemStack) as boolean
myMCIngredientConditioned.matches(<item:minecraft:iron_ingot>);
```

| Параметр | Тип                                         | Description        |
| -------- | ------------------------------------------- | ------------------ |
| stack    | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


Return Type: boolean

```zenscript
MCIngredientConditioned.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Параметр      | Тип                                         | Description             |
| ------------- | ------------------------------------------- | ----------------------- |
| stack         | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| Игнорирование | boolean                                     | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.onlyDamaged() as MCIngredientConditioned<IIngredient>
myMCIngredientConditioned.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientConditioned.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Параметр | Тип                                                                      | Description             | Optional | DefaultValue |
| -------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid      | string                                                                   | No Description Provided | false    |              |
| function | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


## Операторы

### OR

```zenscript
myMCIngredientConditioned | other as IIngredient
```




## Свойства

| Название       | Тип                                                                                  | Имеет Getter | Имеет Setter |
| -------------- | ------------------------------------------------------------------------------------ | ------------ | ------------ |
| baseIngredient | T                                                                                    | true         | false        |
| condition      | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;T&gt; | true         | false        |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                        | true         | false        |

