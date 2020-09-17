# 创建元素
自定义炼金术元素创建

# 所属包名
`mods.alchemistry.Util.createElement`
## 加载器
需要加载 `#loader alchemistry`

## 使用方式
- **整数型变量编号** ID用于新元素
- **字符串名称** 新元素名称
- **字符串Abbrebiation** 新元素Abbrebiation
- **整数红色** 元素红形状，RGB
- **整绿色** 元素绿色形状，RGB
- **整蓝色** 元素蓝色，RGB

## 设定
```zenscript
mods.alchemistry.util.createElement(int atomicNumber, 字符串名称, 字符串缩略, int 红色, int green, int blues);

mods.alchemistry.util.createElement(150,"vivranium","Vrb", 70, 90,250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## 注

- 请使用小写名称
- 先前存在的原子数字不能覆盖
- 文件顶部必须填写"#loader alchemistry"。 此文件只能用于创建元素和化合物，其他配方必须放在其他文件中。
- 注意：截至v1.0.2，模组资源加载器必须用于包含自定义元素的图像和型号json。 如果你想要自动生成这些资源，我已经创建了一个命令行JAR 程序 [在这里](https://github.com/al132mc/alchemistry-resource-creator/releases) 来这样做。
