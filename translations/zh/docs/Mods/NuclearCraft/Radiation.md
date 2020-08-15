# 单独设立的信托基金
**注意：此处不需要双方括号 `([...])`！**

## 单独设立的信托基金
This method gets the radiation of an `IIngredient` in rads/tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## 阻止突变
这个方法添加了一个方块突变。 当辐射低于 `辐射阈值` 时，方块将不会发生变化。
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(nockInput, blockOutput, 双辐射阈值)；
```

## 辐射豁免
这种方法使得能够根据阶段控制行为者的豁免权。 `默认豁免` 是一个指定玩家豁免权的布尔值。 `舞台名称` 是可以切换玩家豁免权的所有阶段的数组名称。
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolian defaultImmunity, string[…]stageNames)；
```

## 辐射采集器/设置器

### 添加辐射量
`金额` 是添加到 `IentityLivingBase` 的辐射量。 `使用 Immunity` 控制函数是否发生了 `IentityLivingBase` 是否是免责的。
```zenscript
IEntityLivingBase.addRadiation(双金额，@Optional bolie useImmunity)；
```

### 设置辐射量
`数量` 是适用于 `IentityLivingBase` 的辐射水平。 `使用 Immunity` 控制函数是否发生了 `IentityLivingBase` 是否是免责的。
```zenscript
IEntityLivingBase.setRadiation(双金额，@opulian useImmunity)；
```

### 正在获取辐射量
这个方法返回 `IentityLivingBase` 的辐射水平。
```zenscript
IEntityLivingBase.getRadiation();
```

## Radaway 缓冲区/设置

### 添加雷达缓冲器
`金额` 是添加到 `IentityLivingBase` 的Radaway Buffer 的金额。 `减缓缓存` 决定是否添加了慢缓缓冲。
```zenscript
IEntityLivingBase.addRadiationResistance(双倍，@可选布尔型减速缓冲)；
```
### 设置雷达缓冲器
`金额` 是适用于 `IentityLivingBase` 的Radaway Buffer的金额。 `减缓缓存` 决定是否添加了慢缓缓冲。
```zenscript
IEntityLivingBase.setRadiationResistance(双金额，@opulian lower Buffer)；
```

### 正在获取雷达缓存器
这个方法返回 `IentityLivingBase` 的Radaway 缓存。 `减缓缓缓存` 决定是否包含在返回的值中。
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional bolian lower Buffer);
```

## 毒素缓冲器/设置器

### 添加毒素缓存
`数量` 是添加到 `IentityLivingBase` 的 PoisonBuffer 数量。
```zenscript
IEntityLivingBase.addPoisonBuffer(双倍金额)；
```
### 设置毒药缓存
`金额` 是用于 `IentityLivingBase` 的 Poison 缓存的数量。
```zenscript
IEntityLivingBase.setPoisonBuffer(双倍数量)；
```

### 正在获取毒素缓存
这个方法返回 `IentityLivingBase` 的毒物缓存。
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## 辐射抗性采集器/设置器
### 添加辐射抗性
`数量` 是添加到 `IentityLivingBase` 的辐射抗性金额。
```zenscript
IEntityLivingBase.addRadawayBuffer(双倍金额)；
```
## 设置辐射抗性
`金额` 是适用于 `IentityLivingBase` 的辐射抗性金额。
```zenscript
IEntityLivingBase.setRadawayBuffer(双倍数量)；
```

## 获取辐射抗性
这个方法返回 `IentityLivingBase` 的辐射抗性。
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## 辐射等级收集器

### 原始辐射水平
这个方法返回雷达中 `IentityLivingBase` 的辐射。
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### 辐射水平
这个方法返回雷达/秒内 `IentityLivingBase` 辐射水平的变化。
```zenscript
IEntityLivingBase.getRadiationLevel();
```