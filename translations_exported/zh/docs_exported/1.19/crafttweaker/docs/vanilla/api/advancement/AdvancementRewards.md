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

```zenscript
AdvancementRewards.grant(player as ServerPlayer)
```

| 参数     | 类型                                                           |
| ------ | ------------------------------------------------------------ |
| player | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::


## 参数

| 名称      | 类型                                                           | 可获得  | 可设置   |
| ------- | ------------------------------------------------------------ | ---- | ----- |
| recipes | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | true | false |

