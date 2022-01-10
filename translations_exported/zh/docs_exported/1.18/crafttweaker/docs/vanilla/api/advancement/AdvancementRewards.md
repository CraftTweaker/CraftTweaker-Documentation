# AdvancementRewards

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.advancement.AdvancementRewards;
```


## 使用方式

:::group{name=getRecipes}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)[]

```zenscript
// AdvancementRewards.getRecipes() as ResourceLocation[]

myAdvancementRewards.getRecipes();
```

:::

:::group{name=grant}

Return Type: void

```zenscript
AdvancementRewards.grant(player as invalid) as void
```

| 参数     | 类型          | 描述                      |
| ------ | ----------- | ----------------------- |
| player | **invalid** | No Description Provided |


:::


## 参数

| 名称      | 类型                                                           | 可获得  | 可设置   | 描述                      |
| ------- | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| recipes | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | true | false | No Description Provided |

