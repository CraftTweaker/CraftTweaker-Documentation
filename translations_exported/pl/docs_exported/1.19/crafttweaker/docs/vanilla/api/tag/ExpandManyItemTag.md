# Expansion for Many&lt;KnownTag<ItemDefinition>&gt;

This expansion specifically targets itemTags. It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.

 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

## Casters

| Result Type                                                            | Is Implicit |
| ---------------------------------------------------------------------- | ----------- |
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true        |

## Methods

:::group{name=asIngredient}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// Many.asIngredient() as IIngredientWithAmount

myMany.asIngredient();
```

:::


