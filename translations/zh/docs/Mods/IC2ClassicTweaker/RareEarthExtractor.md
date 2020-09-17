# 稀有地球提取器

## 所属包名

```zenscript
导入 mods.ic2.RareEarthExtrator;
```

## 方法

- **浮点数**
- **[IItemStack](/Vanilla/Items/IItemStack/)... 输入** 可以为输入指定多于一个。 如果是，所有指定项目都给出相同的指定值。

### 添加稀土条目

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(float值, IItemStack... 输入);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```