# MCGame

Holds general game information. Can be accessed using the `game` global keyword

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.game.MCGame
```

## 方法
### localize

Returns: `a localized String`

Return type: String

```zenscript
game.localize(translationKey as String);
```

| 参数             | 类型     | 描述                      |
| -------------- | ------ | ----------------------- |
| translationKey | String | No description provided |



## 参数

| 名称                    | 类型                                                                                                                           | 可获得  | 可设置   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---- | ----- |
| blockTags             | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt;                                          | true | false |
| directionAxises       | Collection&lt;[crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)&gt;                         | true | false |
| effects               | Collection&lt;[crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)&gt;                  | true | false |
| entityClassifications | Collection&lt;[crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)&gt; | true | false |
| entityTags            | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt;                                          | true | false |
| entityTypes           | Collection&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt;                     | true | false |
| fluids                | Collection&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;                                   | true | false |
| formattings           | Collection&lt;[crafttweaker.api.text.TextFormatting](/vanilla/api/util/text/TextFormatting)&gt;                  | true | false |
| itemTags              | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt;                                          | true | false |
| items                 | Collection&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;                              | true | false |
| potions               | Collection&lt;[crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)&gt;                              | true | false |
| recipeTypes           | Collection&lt;[crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt;             | true | false |

