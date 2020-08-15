# 液体字典

### 导入

```zenscript
进口模式.工业前沿.氟乙烯；
```

### 添加配方

它需要流体名称作为输入，流体名称作为输出和转换率。 比率是原产地的多少毫布将转化为输出。 (输入MB * 比率 = 输出MB)

```zenscript
FluidDictionary.add(输入, 字符串输出, 双倍率);

FluidDictionary.add("基本", "xpjuice", 1);
```

### 移除配方

它需要流体名称作为输入，流体名称作为输出。

```zenscript
FluidDictionary.remove(正在输入, 字符串输出);

FluidDictionary.remove("基本", "xpjuice");
```