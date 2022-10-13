# Expansion for IIngredient

## Caster

| Tipo Risultato                                                    | Implicito |
| ----------------------------------------------------------------- | --------- |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | sì        |

## Metodi

:::group{name=asIIngredientWithAmount}

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
// IIngredient.asIIngredientWithAmount() as IIngredientWithAmount

<tag:items:forge:ingots>.asIIngredientWithAmount();
```

:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IIngredient.mul(amount as int) as IIngredientWithAmount
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::

:::group{name=reuse}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
// IIngredient.reuse() as MCIngredientTransformed<IIngredient>

<tag:items:forge:ingots>.reuse();
```

:::

:::group{name=transform}

Use this if you already have the transformer from another ingredient

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transform(transformer as IIngredientTransformer<IIngredient>) as MCIngredientTransformed<IIngredient>
```

| Parametro     | Tipo                                                                                                                                 | Descrizione             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| trasformatore | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=transformCustom}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as MCIngredientTransformed<IIngredient>
```

| Parametro | Tipo                                                                                                                | Descrizione             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid       | string                                                                                                              | No Description Provided | no       |              |
| function  | Function&lt;[IItemStack](/vanilla/api/items/IItemStack),[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | sì       |              |


:::

:::group{name=transformDamage}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformDamage(amount as int) as MCIngredientTransformed<IIngredient>
```

| Parametro | Tipo | Descrizione             | Optional | DefaultValue |
| --------- | ---- | ----------------------- | -------- | ------------ |
| amount    | int  | No Description Provided | sì       | 1            |


:::

:::group{name=transformReplace}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformReplace(replaceWith as IItemStack) as MCIngredientTransformed<IIngredient>
```

| Parametro   | Tipo                                        | Descrizione             |
| ----------- | ------------------------------------------- | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


