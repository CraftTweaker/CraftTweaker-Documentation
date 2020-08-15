# 自定义类型

自定义类型是一种新的强有力的方式，可以让您创建自己的 *个自定义* 个项目。 基本上，这允许您做的事情是 比如说，从Minecraft或阶段进入事件阶段时，会有一个方块列表来阻止玩家交互或分裂。 使用 [事件](/Vanilla/Events/IEventManager/) CraftTlevel 提供服务。 这使你能够锁定更多的东西。 在游戏中创建完整的自定义体验，而不需要额外的模组。 因为你需要的只是ZenStages和CraftTin弱的声音，温和？

This is a still a fairly new system and *may* have some bugs. 如果您注意到任何消息，请将他们报告给 [我们的仓库](https://github.com/DarkPacks/ZenStages/issues) 以便我们可以查看！

注意：这是一个完整的自定义类型，内部不会检查此类型。 您需要创建并聆听 [事件](/Vanilla/Events/IEventManager/) 然后在 [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) 中调用所提供的方法进行检查。 所以你需要在某处注明你需要使用的 *slug/name* 名字，这样你就知道什么是干的。

注意：这也是一个经修正的标准，您可以对所有的 **个自定义类型的** 个名字使用唯一名称。

## 导入相关包

`导入 mods.zenstages.type.customStageType;`

## 如何创建

通过 [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) 创建自定义类型，使用以下方法。

```zenscript
// initCustomType(字符串名称, 字符串值);
// initCustomType(字符串名称, 字符串] 值);
// initCustomType(字符串名称, int value);
// initCustomType(字符串名称, int[……]值);
// initCustomType(字符串名称, IIngredient 值);
// initCustomType(字符串名称, IIngredient[…]值);
var MyCustomType as CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disalledDimension", 14);
```

一旦您创建了自定义类型，您现在可以将该类型分配到 [阶段](/Mods/GameStages/ZenStages/Stage/)。 呼叫如下。

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## 如何对自定义类型进行检查

此方法需要您设置一个阶段到类型。 使用上述方法。 否则它返回 null。

```zenscript
// getCustomStage(字符串名称, 字符串值);
// getCustomStage(字符串名称, int value);
// getCustomStage(字符串名称, IIngredient 值);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

此方法不需要自定义类型为 *Staged* 到一个阶段。

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```