# 蒸馏器

ModTweaker 允许你添加或移除林业蒸馏器配方

## 导入
使用 `mods.forestry.Still` 以导入相关包

## 移除配方

```JAVA
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
//output 流体输出
//fluidInput 流体输入（可选）
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```


## 添加配方

```JAVA
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
//fluidOutput 流体输出
//fluidInput 流体输入
//timePerUnit 生产1单位流体需要的时间
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```

