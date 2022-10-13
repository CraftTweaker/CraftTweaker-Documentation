# 创建化合物（Create Compound）
自定义 Alchemistry 化合物生成

# 所属包
```zenscript
mods.alchemistry.Util.createCompound
```

## 加载器
需要与 `#loader alchemistry` 同时加载

## 使用方式
- **int meta** 新化合物 meta
- **String Name** 新化合物名称
- **int red** 化合物 RGB 颜色红色值
- **int green** 化合物 RGB 颜色绿色值
- **int blue** 化合物 RGB 颜色蓝色值
- **Object[][]** 每个中括号包含一个不同的元素，后接逗号与化合物中的数量

## 创建
```zenscript
mods.alchemistry.Util.createCompound(int meta, String name, int red, int green, int blue, Object[][] components);

mods.alchemistry.Util.createCompound(1000, "vibranium sufide", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);
```

## 注意
- 请使用小写名称
- 文件头必须添加“#loader alchemistry”。 此文件只能用于创建元素与化合物，其他配方必须放在其他文件中。
- 复合字段需求每个条目都是数组，如 ["cellulose", 5]，声明元素、化合物及其数量。 此处使用字符串参数，而非 itemstack，以确保其仅为元素、化合物。
- meta 字段用于确保你的新化合物拥有一个特殊标识符，即使其他化合物创建或移除也不可更改之。 每个化合物都需要一个独一无二的 meta 值。 直至写这篇教程时，该 mod 仅仅使用了 0 至 35 的 meta 值，但建议你使用至少 1000 的 meta（就像上面的例子那样）以确保 Alchemistry 的内置配方永远不会与你的冲突。
