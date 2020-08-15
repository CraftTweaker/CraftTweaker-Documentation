# 洛姆

## 所属包名
```zenscript
导入 mods.terrafirmacraft。循环；
```

## 添加配方

```zenscript
Loom.addRecipe(String registryName, IIngreendent input, IItemStack output, int stances, String loomTexture);
```
- 步骤是完成配方所需步骤的数量。 它是玩家点击循环的次数，循环的每次移动都向前推进。 在过渡联邦委员会内，这与该配方所需物品的数量相同，但不必如此。
- loomTexture 是指通向纹理文件的路径(`ResourceLocation`)，用于在世界上的彩虹中显示。 例如，"minecraft:textures/blocks/wool_colored_whit.png"引用白色羊毛的原生纹理)。 如果您正在使用自定义纹理，您需要某种形式的数据/资源加载(阅读：资源包)才能正确参考您的纹理。

## 删除配方

```zenscript
Loom.removeRecipe(IItemStack 输出);
Loom.removeRecipe(String registryname);
```

## 例子
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```