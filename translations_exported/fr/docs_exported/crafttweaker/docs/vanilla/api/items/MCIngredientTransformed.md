# MCIngredientTransformed&LT;T : IIngredient&GT;

## Importing the class

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

## Methods

:::group{name=addShiftTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.addShiftTooltip(content as MCTextComponent, showMessage as MCTextComponent) as void
```

| Parameter   | Type                                                      | Description             | Optional | DefaultValue |
| ----------- | --------------------------------------------------------- | ----------------------- | -------- | ------------ |
| contenu     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | false    |              |
| showMessage | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided | true     |              |

:::

:::group{name=addTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.addTooltip(content as MCTextComponent) as void
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| contenu   | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=anyDamage}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCIngredientTransformed.anyDamage() as MCIngredientConditioned<IIngredient>

myMCIngredientTransformed.anyDamage();
```

:::

:::group{name=clearTooltip}

Return Type: void

```zenscript
// MCIngredientTransformed.clearTooltip() as void

myMCIngredientTransformed.clearTooltip();
```

:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCIngredientTransformed.contains(ingredient as IIngredient) as boolean

myMCIngredientTransformed.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  | Type                                          | Description             |
| ---------- | --------------------------------------------- | ----------------------- |
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | The ingredient to check |


:::

:::group{name=matches}

Does the given stack match the ingredient?

Return Type: boolean

```zenscript
// MCIngredientTransformed.matches(stack as IItemStack) as boolean

myMCIngredientTransformed.matches(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                        | Description        |
| --------- | ------------------------------------------- | ------------------ |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Parameter          | Type                                        | Description             |
| ------------------ | ------------------------------------------- | ----------------------- |
| stack              | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| Ignorer les dégâts | boolean                                     | No Description Provided |


:::

:::group{name=modifyTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.modifyTooltip(function as ITooltipFunction) as void
```

| Parameter | Type                                                    | Description             |
| --------- | ------------------------------------------------------- | ----------------------- |
| function  | [ITooltipFunction](/vanilla/api/items/ITooltipFunction) | No Description Provided |


:::

:::group{name=only}

Use this if you already have the condition from another ingredient

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.only(condition as IIngredientCondition<IIngredient>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| condition | [IIngredientCondition](/vanilla/api/items/IIngredientCondition)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=onlyDamaged}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// MCIngredientTransformed.onlyDamaged() as MCIngredientConditioned<IIngredient>

myMCIngredientTransformed.onlyDamaged();
```

:::

:::group{name=onlyIf}

Return Type: [MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
MCIngredientTransformed.onlyIf(uid as string, function as Predicate<IItemStack>) as MCIngredientConditioned<IIngredient>
```

| Parameter | Type                                                                     | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------ | ----------------------- | -------- | ------------ |
| uid       | string                                                                   | No Description Provided | false    |              |
| function  | Predicate&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |

:::

:::group{name=removeTooltip}

Return Type: void

```zenscript
MCIngredientTransformed.removeTooltip(regex as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCIngredientTransformed
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myMCIngredientTransformed
```

:::

:::group{name=OR}

```zenscript
myMCIngredientTransformed | other as IIngredient
```

:::


## Properties

| Name               | Type                                                                                     | Has Getter | Has Setter | Description                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------- | ---------- | ---------- | -------------------------------------------------------------------------------- |
| Ingrédient de base | T                                                                                        | true       | false      | No Description Provided                                                          |
| burnTime           | void                                                                                     | false      | true       | Sets the burn time of this ingredient, for use in the furnace and other machines |
| items              | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true       | false      | No Description Provided                                                          |
| transformateur     | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true       | false      | No Description Provided                                                          |

