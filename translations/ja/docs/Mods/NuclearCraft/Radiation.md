# <unk>
**注意: 括弧 `([...])` のダブルセットはここでは必要ありません！**

## <unk>
このメソッドは、ラド/ティックの `IIngredient` の放射を取得します。
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## 変異をブロック
このメソッドはブロックの変更を追加します。 放射線が `radiationThreshold` を下回っても、ブロックは変異しません。
```zenscript
mods.nutcraft.radiation.addBlockMutation(blockInput, blockOutput, double radiationThreshold);
```

## 放射線イミュニティ
この方法は、ステージに応じてプレイヤーの免疫を制御する能力を与えます。 `defaultImunity` は、指定されたステージなしでプレイヤーの免疫を指定する真偽値です。 `stageNames` は、プレイヤーの免疫を切り替えることができるすべてのステージの名前の配列です。
```zenscript
mods.naturcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Radiation Getter/Setters

### 放射線の追加
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` は関数が `IEntityLivingBase` であっても免疫があるかどうかを制御します。
```zenscript
IEntityLivingBase.addRadiation(double amount, @Optional boolean useImmunity);
```

### 放射線の設定
`amount` は、 `IEntityLivingBase` に適用される放射線のレベルです。 `useImmunity` は関数が `IEntityLivingBase` であっても免疫があるかどうかを制御します。
```zenscript
IEntityLivingBase.setRadiation(double amount, @Optional boolean useImmunity);
```

### 放射能を得ます
このメソッドは、 `IEntityLivingBase` の放射線レベルを返します。
```zenscript
IEntityLivingBase.getRadiation();
```

## レーダウェイバッファーゲッター/セッター

### レーダウェイバッファーの追加
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` は、追加されたRadaway Bufferが遅いバッファであるかどうかを決定します。
```zenscript
IEntityLivingBase.addRadiationResistance(double amount, @Optional boolean slowBuffer);
```
### レーダウェイバッファーの設定
`amount` は、 `IEntityLivingBase` に適用されるラダウェイバッファーの量です。 `slowBuffer` は、追加されたRadaway Bufferが遅いバッファであるかどうかを決定します。
```zenscript
IEntityLivingBase.setRadiationResistance(double amount, @Optional boolean slowBuffer);
```

### レーダウェイバッファーの入手
このメソッドは、 `IEntityLivingBase` の Radaway Buffer を返します。 `slowBuffer` は、返された値にスローバッファが含まれるかどうかを決定します。
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## 毒バッファーゲッター/セッター

### 毒バッファーを追加中
`amount` は、 `IEntityLivingBase` に追加された毒バッファーの量です。
```zenscript
IEntityLivingBase.addPoisonBuffer(double amount);
```
### 毒バッファーの設定
`amount` は、 `IEntityLivingBase` に適用される毒バッファーの量です。
```zenscript
IEntityLivingBase.setPoisonBuffer(double amount);
```

### 毒バッファーを取得中
このメソッドは、 `IEntityLivingBase` の毒バッファーを返します。
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## 放射線耐性ゲッター/セッター
### 放射線耐性の追加
`amount` は、 `IEntityLivingBase` に加えられる放射線耐性の量である。
```zenscript
IEntityLivingBase.addRadawayBuffer(倍額);
```
## 放射線耐性の設定
`amount` は、 `IEntityLivingBase` に適用される放射線耐性の量である。
```zenscript
IEntityLivingBase.setRadawayBuffer(倍額);
```

## 放射線耐性を得ます
この方法は、 `IEntityLivingBase` の放射線耐性を返します。
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## 放射能レベルゲッター

### 未加工の放射線レベル
このメソッドは、ラード内の `IEntityLivingBase` の放射を返します。
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### 放射能レベル
このメソッドは、rads/tick の `IEntityLivingBase` の放射線レベルの変化を返します。
```zenscript
IEntityLivingBase.getRadiationLevel();
```