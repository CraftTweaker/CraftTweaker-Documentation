# 寸法ステージ

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 Dimension Stagesは、Modpack作成者によって設定されたカスタム進行システムの後ろに寸法へのアクセスを可能にします。 ステージにアクセスできないプレイヤーは、そのディメンションを入力することはできません。 彼らのペット、投射物、マウント、ドロップされたアイテムも、制限された寸法に入ることができません。 寸法ステージについての詳細はこちら [をご覧ください](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("nether", -1);
```