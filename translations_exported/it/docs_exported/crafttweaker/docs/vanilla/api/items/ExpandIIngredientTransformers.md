# Expansion for IIngredient

This expansion was added by a mod with mod-id `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Methods

### reuse

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.reuse() as MCIngredientTransformed<IIngredient>
<tag:items:forge:ingots>.reuse();
```
### transform

Use this if you already have the transformer from another ingredient

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transform(transformer as IIngredientTransformer<IIngredient>) as MCIngredientTransformed<IIngredient>
```
| Parameter     | Type                                                                                                                                 | Description             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| trasformatore | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |

### transformCustom

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as MCIngredientTransformed<IIngredient>
```
| Parameter | Type                                                                                                                | Description             | Optional | DefaultValue |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- | ------------ |
| uid       | string                                                                                                              | No Description Provided | false    |              |
| function  | Function&lt;[IItemStack](/vanilla/api/items/IItemStack),[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true     |              |
### transformDamage

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformDamage(amount as int) as MCIngredientTransformed<IIngredient>
```
| Parameter | Type | Description             | Optional | DefaultValue |
| --------- | ---- | ----------------------- | -------- | ------------ |
| amount    | int  | No Description Provided | true     | 1            |
### transformReplace

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformReplace(replaceWith as IItemStack) as MCIngredientTransformed<IIngredient>
```
| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


