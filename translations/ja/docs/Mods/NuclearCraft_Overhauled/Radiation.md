# <unk>

## 放射線スクラバー

### パッケージのインポート
`mods.nuclearcraft.SupercoolerRadiationScrubber`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double processEfficiency);
```

### レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerRadiationScrubber.removeRecipeWithInput(IInput, ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();RadiationScrubber.removeAllRecipes();
```

## 変異をブロック

### パッケージのインポート
`mods.nuclearcraft.SupercoolerRadiationBlockMutation`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerRadiationBlockMutation.removeRecipeWithInput(IInput));
mods.nukraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclecraft.RadiationBlockMutation.removeAllRecipes();
```

## ブロックの精製を行う

### パッケージのインポート
`mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockPurification`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### レシピを削除
```zenscript
mods.nuclearcraft.RadiationScrubberRadiationBlockPurification.removeRecipeWithInput(IInput));
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockOutput);
mods.nukraft.RadiationBlockPurification.removeAllRecipes();
```

## エンティティの被<unk>

### <unk>
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` は関数が `IEntityLivingBase` であっても免疫があるかどうかを制御します。
```zenscript
IEntityLivingBase::addRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase:::setRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase:::getRadiation();
```

### Radaway Buffer
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` は、追加されたRadaway Bufferが遅いバッファであるかどうかを決定します。
```zenscript
IEntityLivingBase:::addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase:::setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase:::getRadawayBuffer(boolean slowBuffer);
```
**注意: `slowBuffer` が `true`である場合、 `getRadawayBuffer()` は通常のものではなく、スロー動作の放射除去バッファを返します。**

### ポイズン
`amount` は、 `IEntityLivingBase` に追加された毒バッファーの量です。
```zenscript
IEntityLivingBase:::addPoisonBuffer(double amount);
IEntityLivingBase::setPoisonBuffer(double amount);
IEntityLivingBase:::getPoisonBuffer();
```

### 放射線耐性
`amount` は、 `IEntityLivingBase` に加えられる放射線耐性の量である。
```zenscript
IEntityLivingBase::addRadiationResistance(double amount);
IEntityLivingBase::setRadiationResistance(double amount);
IEntityLivingBase:::getRadiationResistance();
```

### 放射能レベルゲッター

#### 未加工の放射線レベル
このメソッドは、ラード内の `IEntityLivingBase` の放射を返します。
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### 放射能レベル
このメソッドは、rads/tick の `IEntityLivingBase` の放射線レベルの変化を返します。
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## <unk>
このメソッドは、ラド/ティックの `IIngredient` の放射を取得します。
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Radiation.getRadiationLevel(IIngredient itemInput);
```

## 放射線イミュニティ
この方法は、ステージに応じてプレイヤーの免疫を制御する能力を与えます。 `defaultImunity` は、指定されたステージなしでプレイヤーの免疫を指定する真偽値です。 `stageNames` は、プレイヤーの免疫を切り替えることができるすべてのステージの名前の配列です。
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```