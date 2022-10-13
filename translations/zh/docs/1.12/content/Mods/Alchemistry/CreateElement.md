# 创建元素（Create Element）
自定义 Alchemistry 元素创建

# 所属包
`mods.alchemistry.Util.createElement`
## 加载器
需要与 `#loader alchemistry` 同时加载

## 使用方式
- **int atomicNumber** 新元素 ID
- **String Name** 新元素名称
- **String Abbrebiation** 新元素缩写名称
- **int red** 元素 RGB 颜色红色值
- **int green** 元素 RGB 颜色绿色值
- **int blue** 元素 RGB 颜色蓝色值

## 创建
```zenscript
mods.alchemistry.Util.createElement(int atomicNumber, String name, String abbreviation, int red, int green, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## 注意

- 请使用小写名称
- 已存在的元素数字不可覆盖
- 文件头必须添加“#loader alchemistry”。 此文件只能用于创建元素与化合物，其他配方必须放在其他文件中。
- 注意：截至 1.0.2 版本，Mod 的资源加载器必须包含自定义元素的图像与模型 JSON 文件 我已经写好了[一个 JAR 命令行程序](https://github.com/al132mc/alchemistry-resource-creator/releases)，帮助你自动生成这些资源，
