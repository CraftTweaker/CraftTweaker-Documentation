# MCIngredientTransformed&LT;T : IIngredient&GT;

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Implemented Interfaces
MCIngredientTransformed は以下のインターフェースを実装しています。 That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)
## Casters

| Result type                          | Is Implicit |
| ------------------------------------ | ----------- |
| [IData](/vanilla/api/data/IData)     | true        |
| [MapData](/vanilla/api/data/MapData) | true        |

## Methods

### matches

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```
| Parameter    | Type                                        | Description             |
| ------------ | ------------------------------------------- | ----------------------- |
| stack        | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| ignoreDamage | boolean型                                    | No Description Provided |


## Properties

| 名称             | Type                                                                                     | Has Getter | Has Setter |
| -------------- | ---------------------------------------------------------------------------------------- | ---------- | ---------- |
| baseIngredient | T                                                                                        | true       | false      |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true       | false      |
| トランス           | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true       | false      |

