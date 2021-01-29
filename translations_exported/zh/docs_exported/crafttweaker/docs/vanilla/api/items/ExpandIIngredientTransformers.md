# Expansion for IIngredient

## Casters

| 结果类型                                                              | 是否隐藏 |
| ----------------------------------------------------------------- | ---- |
| [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | true |

## 方法

### asIIngredientWithAmount

Used implicitly when a machine can accept more than one item but you only provide one.

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IIngredient.asIIngredientWithAmount() as IIngredientWithAmount
<tag:items:forge:ingots>.asIIngredientWithAmount();
```
### mul

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)

```zenscript
IIngredient.mul(amount as int) as IIngredientWithAmount
```
| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |

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
| 参数  | 类型                                                                                                                                   | 描述                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| 变压器 | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt; | No Description Provided |

### transformCustom

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as MCIngredientTransformed<IIngredient>
```
| 参数       | 类型                                                                                                                  | 描述                      | 可选    | DefaultValue |
| -------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----- | ------------ |
| uid      | string                                                                                                              | No Description Provided | false |              |
| function | Function&lt;[IItemStack](/vanilla/api/items/IItemStack),[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided | true  |              |
### transformDamage

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformDamage(amount as int) as MCIngredientTransformed<IIngredient>
```
| 参数     | 类型  | 描述                      | 可选   | DefaultValue |
| ------ | --- | ----------------------- | ---- | ------------ |
| amount | int | No Description Provided | true | 1            |
### transformReplace

Return Type: [MCIngredientTransformed](/vanilla/api/items/MCIngredientTransformed)&lt;[IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
IIngredient.transformReplace(replaceWith as IItemStack) as MCIngredientTransformed<IIngredient>
```
| 参数          | 类型                                          | 描述                      |
| ----------- | ------------------------------------------- | ----------------------- |
| replaceWith | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


