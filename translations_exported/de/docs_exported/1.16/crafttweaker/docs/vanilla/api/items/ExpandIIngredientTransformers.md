# Expansion for IIngredient

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true        |

## Methoden

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

| Parameter | Type | Beschreibung            |
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

| Parameter     | Type                                                                                                                                 | Beschreibung            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| transformator | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |


:::

:::group{name=transformCustom}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as MCIngredientTransformed<IIngredient>
```

| Parameter | Type                                                                                                                | Beschreibung            | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid       | string                                                                                                              | No Description Provided | false    |              |
| function  | Function&lt;[IItemStack](/vanilla/api/items/IItemStack),[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |


:::

:::group{name=transformDamage}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformDamage(amount as int) as MCIngredientTransformed<IIngredient>
```

| Parameter | Type | Beschreibung            | Optional | DefaultValue |
| --------- | ---- | ----------------------- | -------- | ------------ |
| amount    | int  | No Description Provided | true     | 1            |


:::

:::group{name=transformReplace}

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformReplace(replaceWith as IItemStack) as MCIngredientTransformed<IIngredient>
```

| Parameter   | Type                                        | Beschreibung            |
| ----------- | ------------------------------------------- | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


