# Expansion for KnownTag&lt;ItemDefinition&gt;

This expansion specifically targets itemTags.
 It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.
 
 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

## Casters

|                              Result Type                               | Is Implicit |
|------------------------------------------------------------------------|-------------|
| [IData](/vanilla/api/data/IData)                                       | true        |
| [IIngredient](/vanilla/api/ingredient/IIngredient)                     | true        |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true        |

## Methods

:::group{name=add}

```zenscript
KnownTag.add(items as stdlib.List<IItemStack>)
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// KnownTag.asIData() as IData

myKnownTag.asIData();
```

:::

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// KnownTag.asIIngredient() as IIngredient

myKnownTag.asIIngredient();
```

:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// KnownTag.asIIngredientWithAmount() as IIngredientWithAmount

myKnownTag.asIIngredientWithAmount();
```

:::


