# MCIngredientTransformed&LT;T : IIngredient&GT;

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Implemented Interfaces
MCIngredientTransformed implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)

## Casters

| Result type                          | Is Implicit |
| ------------------------------------ | ----------- |
| [IData](/vanilla/api/data/IData)     | true        |
| [MapData](/vanilla/api/data/MapData) | true        |

## Methoden

### anyDamage

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.anyDamage() as MCIngredientConditioned<IIngredient>
myMCIngredientTransformed.anyDamage();
```

### matches

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack) as boolean
myMCIngredientTransformed.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Beschreibung       |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Parameter     | Type                                        | Beschreibung            |
| ------------- | ------------------------------------------- | ----------------------- |
| stack         | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| ignoreSchaden | boolean                                     | No Description Provided |


### onlyDamaged

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyDamaged() as MCIngredientConditioned<IIngredient>
myMCIngredientTransformed.onlyDamaged();
```

### onlyIf

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Beschreibung            | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


## Operatoren

### OR (ODER)

```zenscript
myMCIngredientTransformed | other as IIngredient
```




## Properties

| Name           | Type                                                                                     | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------------------------------------- | ---------- | ---------- |
| baseIngredient | T                                                                                        | true       | false      |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true       | false      |
| transformator  | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true       | false      |

