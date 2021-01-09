# Expansion for MCTag&lt;MCItemDefinition&gt;

This expansion specifically targets itemTags. It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.

 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

This expansion was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Casters

| Result type                                   | Is Implicit |
| --------------------------------------------- | ----------- |
| [IData](/vanilla/api/data/IData)              | true        |
| [IIngredient](/vanilla/api/items/IIngredient) | true        |

## Methoden

### add

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<IItemStack>) as void
```
| Parameter | Type                                                                       | Beschreibung            |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided |

### asIData

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCTag.asIData() as IData
myMCTag.asIData();
```
### asIIngredient

Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
MCTag.asIIngredient() as IIngredient
myMCTag.asIIngredient();
```

