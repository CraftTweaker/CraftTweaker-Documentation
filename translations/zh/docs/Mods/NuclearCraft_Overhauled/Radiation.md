# 单独设立的信托基金

## 辐射剪裁器

### 导入软件包
`nuclearcraft。RadiationScrubber`

### 添加配方
```zenscript
nuclearcraft。RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double process效率)；
```

### 删除配方
```zenscript
nuclearcraft。RadiationScrubber.removeRecipeWidInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWOutput(IIngredient itemOutput, ILiquidStack fluidOut);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();
```

## 方块突变

### 导入软件包
`nuclearcraft。辐射区段`

### 添加配方
```zenscript
nuclearcraft。RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, 双辐射阈值)；
```

### 删除配方
```zenscript
nuclearcraft。RadiationBlockMutation.removeRecipeWidInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWOutput(IIngredient blockOut)；
mods.nuclearcraft。RadiationBlockMutation.removeAllRecipes();
```

## 区块净化

### 导入软件包
`nuclearcraft。辐射屏蔽净化`

### 添加配方
```zenscript
nuclearcraft。RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, 双辐射阈值)；
```

### 删除配方
```zenscript
nuclearcraft。RadiationBlockPurification.removeRecipeWidInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWOutput(IIngredient blockOut)；
mods.nuclearcraft。RadiationBlockPurification.removeAllRecipes();
```

## 实体辐射量

### 单独设立的信托基金
`金额` 是添加到 `IentityLivingBase` 的辐射量。 `使用 Immunity` 控制函数是否发生了 `IentityLivingBase` 是否是免责的。
```zenscript
IEntityLivingBase::addRadiation(双金额, @Optional bolie useImmunity);
IEntityLivingBase::setRadiation(双金额, @Optional booly useImmunity);
IEntityLivingBase::gettRadiation();
```

### 雷达缓冲器
`金额` 是添加到 `IentityLivingBase` 的Radaway Buffer 的金额。 `减缓缓存` 决定是否添加了慢缓缓冲。
```zenscript
IEntityLivingBase::addRadawayBuffer(双金额, @Opinion bloffer);
IEntityLivingBase::setRadawayBuffer(双金额, @opulie blow Buffer);
IEntityLivingBase::getRadawayBuffer(Boolie bloffer);
```
**注意：如果 `放慢缓缓冲器` 是 `true`, `getRadawayBuffer()` 将返回慢动作的辐射清除缓冲区而不是正常缓冲区。**

### 毒剂
`数量` 是添加到 `IentityLivingBase` 的 PoisonBuffer 数量。
```zenscript
IEntityLivingBase::addPoisonBuffer(双倍数量)；
IEntityLivingBase::setPoisonBuffer(双倍数量)；
IEntityLivingBase::getPoisonBuffer();
```

### 辐射抗性
`数量` 是添加到 `IentityLivingBase` 的辐射抗性金额。
```zenscript
IEntityLivingBase::addRadiationResistance(双倍数量)；
IEntityLivingBase::setRadiationResistance(双倍数量)；
IEntityLivingBase::getRadiationResistance();
```

### 辐射等级收集器

#### 原始辐射水平
这个方法返回雷达中 `IentityLivingBase` 的辐射。
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### 辐射水平
这个方法返回雷达/秒内 `IentityLivingBase` 辐射水平的变化。
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## 单独设立的信托基金
This method gets the radiation of an `IIngredient` in rads/tick.
```zenscript
nuclearcraft。getRadiation Level(Ingredient itemput)；
```

## 辐射豁免
这种方法使得能够根据阶段控制行为者的豁免权。 `默认豁免` 是一个指定玩家豁免权的布尔值。 `舞台名称` 是可以切换玩家豁免权的所有阶段的数组名称。
```zenscript
nuclearcraft。Radiation.setRadiationImmunityGameStages(布尔默认豁免，String[…]级地名)；
```