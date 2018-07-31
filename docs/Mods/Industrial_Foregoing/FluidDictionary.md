# 流体词典（Fluid Dictionary）

### 导入

```
import mods.industrialforegoing.FluidDictionary;
```

### 添加

需要输入（input）的流体名称、输出（output）的流体名称和转换比例。比例指的是多少 mB 原来的流体会转化成 1mB 新的流体。(输入流体 mB * 比例 = 输出流体 mB)

```
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### 移除

需要输入（input）的流体名称和输出（output）的流体名称。

```
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```
