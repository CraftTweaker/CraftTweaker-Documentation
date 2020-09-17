# 尺寸阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 尺寸阶段允许访问由modpack 创建者设置的自定义进度系统后面的尺寸。 如果玩家不能进入一个阶段，他们将无法进入那个维度。 他们的宠物和抛射物、挂载物和抛射物件也将被阻止进入限制范围。 您可以在这里找到更多关于维度阶段的信息 [](https://minecraft.curseforge.com/projects/dimension-stages)

```zenscript
//mods.DimensionStages.addDimensionStage(String stage, int dimensionId);
mods.DimensionStages.addDimensionStage("下一步", -1);
```