# Tree Tweaker

树木更弱是一种CraftTin弱化插件，它允许您将自定义树添加到世界代。 形状，高度，叶片，日志，频率，生物群落，都可以通过zenscript自定义更多。 树可以使用moded的方块，然后设置为在moddated biomes中生成。

## CraftTinfirst集成

应该在 [树木树较弱的问题跟踪器](https://github.com/superfluke/treetweaker/issues) 中讨论树木较弱的问题。

## 所属包名

`导入 mods.treetweeper.TreeFactory;`

## 脚本要求

#### var **newtree = TreeFatory.createTree("newtree");**

创建一个叫做 `newtree`的新树，使用变量`newtree`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE")；

设置要生成的树形状的类型。 接受OAK, SPRUCE, JUNGLE, BIRCH, ACACIA和DARK_OAK。 `newtree.setTreeType("SPRUCE");`

#### a. 登记器();

注册树以添加到世界格子。 请确保此方法被调用。 `newtree.register();`

## 可选的语法

#### newtree.setLog("moded:itemid");

设置要使用的日志  
`newtree.setLog("minecraft:wool:3")；`

#### newtree.setLeaf("moded:itemid");

设置皮革使用  
`newtree.setLeaf(“minecraft:melon_block”)；`

#### newtree.setMinHight(INT)；

设置树的最小高度 `newtree.setMinHeight(5);`

#### 设置域外(INT)；

当树生出 `treename.setExtraight(5);`

#### newtre.setGenFrequency(INT)；

用于控制树的生成频率，成功生成率为 1 的 N 尝试 `newtree.setGenFrequency(5)`

#### nettre.setGenatts(INT)；

在成功的一代尝试中应尝试生成多少棵树。 可以用来制作树群 `newtree.setGenatts(1)`

#### newtree.extraThick=boolean;

将树干生成为 2x2 厚。 仅在 LARGE_OAK、PINE、CANOPY和SPRUCE 树上有效 `newtree.extraxThick=true;`

#### newtree.setGenome("string:string");

设置生成生物群落，忽略典型的生物群落规则。  
如果未设置，树将在所有通常包含树的生物群落中生成。  
`newtree.setGenbiome("minecraft:plins")`

#### newtree.setGenomeByTag("STRING");

生物群落标签树可以在 (HOT, SWAMP, SNOWY...) 中生成，忽略典型的生物群落树规则。 除非出生生物群落为空，否则不会起作用。 `newtree.setGenomeByTag("HOT");`

#### 设置BaseBlock("修改:itemid")

这棵树应该生成什么块。 如果未设置，默认情况下会阻止原生树(草、土、农田) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT)；

要么是单一整数组，要么是该树可能生成的块列有尺寸ID。 如果为 null，可以生成任何尺寸 `newtree.setDimWhitelist(0)；`