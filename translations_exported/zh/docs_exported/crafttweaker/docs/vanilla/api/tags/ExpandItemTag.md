# Expansion for MCTag&lt;MCItemDefinition&gt;

This expansion specifically targets itemTags. It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.

 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

This expansion was added by a mod with mod-id `crafttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## Casters

| 结果类型                                              | 是否隐藏 |
| ------------------------------------------------- | ---- |
| [IData](/vanilla/api/data/IData)                  | true |
| [材料（IIngredient）](/vanilla/api/items/IIngredient) | true |

## 方法

### add

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<IItemStack>) as void
```
| 参数    | 类型                                                                         | 描述                      |
| ----- | -------------------------------------------------------------------------- | ----------------------- |
| items | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | No Description Provided |

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

