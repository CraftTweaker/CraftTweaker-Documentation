# Expansion for MCTag&lt;ItemDefinition&gt;

This expansion specifically targets itemTags.
 It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.
 
 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |
| [IIngredient](/vanilla/api/ingredient/IIngredient) | true |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true |

## Methods

:::group{name=add}

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<IItemStack>) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| items | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | No Description Provided |


:::

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MCTag.asIData() as IData

<tag:items:forge:gems>.asIData();
```

:::

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// MCTag.asIIngredient() as IIngredient

<tag:items:forge:gems>.asIIngredient();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// MCTag.asIIngredientWithAmount() as IIngredientWithAmount

<tag:items:forge:gems>.asIIngredientWithAmount();
```

:::


