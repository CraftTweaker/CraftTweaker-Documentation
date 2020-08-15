# 项目阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 项目阶段允许将项目和方块放入由modpack创建者设置的自定义进度系统。 如果玩家没有必要的阶段，则玩家在使用项目时会遇到麻烦。 要了解更多关于如何操作的信息，请在这里查看模组页面 [](https://minecraft.curseforge.com/projects/item-stages)

## 待发布物品

要使用此模型限制某个项目，它需要与某个阶段相关联。 这样做可以采取几种不同的方式。

```zenscript
// 分阶段单个块或项目。 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// 一个带部分NBT的项目。 例如，本阶段所有LV 5附魔书。
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchants: [{lvl: 5 as short}]}));

// 带有矿石字典标签的所有项目阶段。
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// 阶段所有由特定模组添加的项目。
mods.ItemStages.stageModits("stage_name", "moded");

// 删除某个特定项目的一个阶段, 当与stageMod项目配对时, 以减少脚本大小.
mods.ItemStages.removeItemStage(<minecraft:stone>)；
```

## 暂存液体：

您可能想要舞下液体，这主要是为了将它们隐藏在JEI中。

```zenscript
// 相位为单一液体，如水。
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## 暂存附魔方

你可以舞台附魔，防止玩家使用有附魔的物品。

```zenscript
// 阶段特定附魔。 在这种情况下提供保护。
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// 一个特定的附魔阶段，在特定级别上。 在本案中，第二项保护。
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## 更改不熟悉的项目名称。

您可能想要在隐藏受限制的项目时给它们一个新的名称。 这可以用来为你的包添加笑话和微妙的洞穴。

```zenscript
// 设置所有羊毛，为没有适当舞台的玩家命名为“熔炉”。
mods.ItemStages.setUnfirmName("Clump of Fur", <minecraft:wool:*>);
```

## 发布工具提示

您可以分阶段隐藏信息的工具提示。 这在试图对大多数项目添加一个“EMC:”工具提示的 E项目等模组时特别有用。

```zenscript
// 移除以“EMC”开头的工具提示中的任何行：
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## 预订配方类别

您可以使用 JEI 阶段访问整个配方类别。 例如，如果你舞台上的熔炉类别和玩家没有舞台，他们将无法看到熔炉配方。

```zenscript
// 阶段特定的配方类别。 在这个例子中，我们正在进行邪恶的类别。
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```