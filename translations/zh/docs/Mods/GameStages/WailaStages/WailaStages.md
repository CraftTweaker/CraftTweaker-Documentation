# Waila 阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 Waila 阶段允许Waila/Hwyla Houd的方面受到自定义进度系统的限制。 欲了解更多信息，请在这里查看模组页面 [](https://minecraft.curseforge.com/projects/waila-stages)

## 方法

隐藏整个帽子，除非玩家有舞台。

```zenscript
// mods.WailaStages.addWailaStage(String stage);
mods.WailaStages.addWailaStage("one");
```

在waila大厅隐藏特定的线，除非玩家有舞台。

```zenscript
// mods.WailaProgression.addRequirement(String stage, String prefix); 
mods.WailaProgression.addRequirement("one", "Power:"); 
```