# 石英磨具（Grindstone）

### 导入

```
import mods.appliedenergistics2.Grinder;
```

### 添加

```
Grinder.addRecipe(IItemStack output, IItemStack input, int turns, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondary2Output, @Optional float secondary2Chance);
//output 输出
//input 输入
//turns 曲柄旋转次数
//secondary1Output 副产物1(可选)
//secondary1Chance 副产物1概率(可选)
//secondary2Output 副产物2(可选)
//secondary2Chance 副产物2(可选)

Grinder.addRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
```

### 移除

```
Grinder.removeRecipe(IItemStack input);
//input 输入

Grinder.removeRecipe(<minecraft:quartz_ore>);
```
