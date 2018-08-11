# 压印器（Inscriber）

### 导入

```
import mods.appliedenergistics2.Inscriber;
```

### 添加

当 `压印（inscribe）`的布尔值为true时，顶部和底部的输入不会被消耗。 

```
Inscriber.addRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);
//output 输出
//input 输入
//inscribe 压印
//topInbut 顶部输入（可选）
//bottomInput 底部输入（可选）

//将鸡蛋变成生成 凋零骷髅，不消耗凋零骷髅头颅
Inscriber.addRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//将面包、可可豆和糖制成曲奇。所有输入都会被消耗
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### 移除

```
Inscriber.removeRecipe(IItemStack output);
//output 输出

//移除硅板的配方
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```
