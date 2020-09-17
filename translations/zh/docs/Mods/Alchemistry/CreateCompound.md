# 创建组合
自定义炼金术复合生成

# 所属包名
```zenscript
mods.alchemistry.创建组合
```

## 加载器
需要加载 `#loader alchemistry`

## 使用方式
- **整数型变量** 元给新Compund </strong> 元数据
- **新Compund 的字符串名称** 名称
- **整数红色** 复数红色红色，RGB
- **整绿色** 复合绿色的绿色形状，RGB
- **整蓝色** 复合蓝色，RGB
- **对象[]** 每个约束面都有一个不同的元素，然后有一个逗号和你的复合中使用的数量

## 设定
```zenscript
mods.alchemistry.util.createCompound(int meta, 字符串名称, int 红色, int green, int blue, Object[] 组件);

mods.alchemistry.Util.createCompound(1000, "vivariium sufide", 20, 69, 185,
[["vivarianium", 1],
 ["sulfur", 3]]);
```

## 注
- 请使用小写名称
- 文件顶部必须填写"#loader alchemistry"。 此文件只能用于创建元素和化合物，其他配方必须放在其他文件中。
- 组件字段要求每个条目都像一个数组。[“蜂窝”，5]，表示元素/化合物及其数量。 这里使用的是字符串参数，而不是物品堆栈，以此确保只使用元素/化合物。
- 元字段是为了确保您的新化合物有一个不可改变的识别符，即使是在其他化合物被创建或移除的情况下。 每个化合物必须有一个独特的元值。 在此写入时，模组仅使用约0至35的元值。 但我将开始将您的元编号为1000(像上面看到的那样)或更高，以确保您的自定义化合物不会与炼金术的内部配方发生冲突
