# Tinker 阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 Tinker 阶段允许将Tinkers Construct Mod的某些部分放入由modpack 作者设置的自定义进度系统。 欲了解更多信息，请在这里查看模组页面 [](https://minecraft.curseforge.com/projects/tinkerstages)

## 一般限制

限制工具制造到一个阶段。 如果使用此方法添加多个阶段，玩家将至少需要其中一个。

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("one");
```

限制部分替换到一个阶段。 如果使用此方法添加多个阶段，玩家将至少需要其中一个。

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

限制部件构建到一个阶段。 如果使用此方法添加多个阶段，玩家将至少需要其中一个。

```zenscript
// mods.TinkerStages.addGeneralPartnership BuildingStage(String stage);
mods.TinkerStages.addGeneralPartnership BuildingStage("one");
```

限制应用修饰符到一个阶段。 如果使用此方法添加多个阶段，玩家将至少需要其中一个。

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## 特定限制

阻止特定的工具类型在工具站被制作。 例如，你可以将锤子制作限制到一个特定阶段。

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

阻止玩家使用材料。 包括制作、构建和使用工具。

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

阻止特定修饰器应用于工具或使用。

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## 示例脚本

```zenscript
// 一般答复
/防止所有工具，除非分阶段解锁。
mods.TinkerStages.addGeneralCraftingStage("one");

//prevents all tools setaping unlcoked non-lcoked
mods.TinkerStages.addGeneralPartreplacingStage("one");

//Prvents all part build, 除非舞台已解锁。
mods.TinkerStages.addGeneralPartner BuildingStage("one");

//prevents applied any tools modifiers without the stage is unlocked
mods.TinkerStages.addGeneralModifierStage("one");


//SPECIFIC RESTRIC
//防止制作皮轴，除非舞台被解锁。
mods.TinkerStages.addToolTypeStage("2", "tconstruct:pickaxe");

//防止材料被使用。 
mods.TinkerStages.addMaterialStage("2", "stone");

//防止修改者被应用。
mods.TinkerStages.addModifierStage("2", "mending_moss");
```