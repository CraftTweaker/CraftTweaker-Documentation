# Expansion for MCTag&lt;MCItemDefinition&gt;

This expansion specifically targets itemTags. It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient. <p> Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

## Caster

| Tipo Risultato                                                    | Implicito |
| ----------------------------------------------------------------- | --------- |
| [IData](/vanilla/api/data/IData)                                  | true      |
| [IIngredient](/vanilla/api/items/IIngredient)                     | true      |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true      |

## Methods

### add

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<IItemStack>) as void
```

| Parameter | Type                                                                       | Description             |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided |


### asIData

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCTag.asIData() as IData
<tag:items:forge:gems>.asIData();
```

### asIIngredient

Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
MCTag.asIIngredient() as IIngredient
<tag:items:forge:gems>.asIIngredient();
```

### asIIngredientWithAmount

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
MCTag.asIIngredientWithAmount() as IIngredientWithAmount
<tag:items:forge:gems>.asIIngredientWithAmount();
```


