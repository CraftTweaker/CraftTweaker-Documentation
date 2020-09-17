# Tree Tweaker

Tree TweakerはCraftTweakerアドオンで、世界中のカスタムツリーを追加することができます。 形状、高さ、葉、ログ、周波数、バイオームなどはすべてzenscriptを通じてカスタマイズできます。 木々は、モッドブロックを使用して、モッドバイオームで生成するように設定できます。

## CraftTweaker Integration

ツリー調整の問題は、 [ツリー調整の課題トラッカー](https://github.com/superfluke/treetweaker/issues) で検討してください。

## パッケージ

`import mods.treetweaker.TreeFactory;`

## スクリプトの要件

#### var **newtree = TreeFatory.createTree("newtree");**

変数 `newtree`を使用して、`newtree` と呼ばれる新しいツリーを作成する

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

どの種類のツリー形状を生成するかを設定します。 OAK, SPRUCE, JUNGLE, BIRCH, ACACIA, DARK_OAKを受け入れる。 `newtree.setTreeType("SPRUCE");`

#### newtree.register();

worldgenに追加するには木を登録してください このメソッドを最後に呼び出すようにしてください。 `newtree.register();`

## オプションの構文

#### newtree.setLog("modid:itemid");

  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

木の高さを最小に設定します。 `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Extra height randomly added when tree generates `treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT);

Used to control how often a tree generates, successfully spawning at a rate of 1 in N attempts `newtree.setGenFrequency(5)`

#### newtree.setGenAttempts(INT);

生成時に生成しようとする木の数。 Can be used to make clusters of trees `newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;

木の幹を2x2の厚さで生成します。 Only valid on LARGE_OAK, PINE, CANOPY, and SPRUCE trees `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Set the biome of spawning, ignoring typical biome rules.  
If not set, the tree will generate in all biomes that normally contain trees.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

バイオームタグツリーは、典型的なバイオームツリールールを無視して(HOT、SWAMP、SNOWY...)、で生成することができます。 spawnBiomeがnullでないと機能しません。 `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

ツリーの上に生成するブロックを指定します。 If not set, will default to blocks valid for vanilla trees (grass, dirt, farmland) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

ツリーが生成する寸法IDを一覧表示する単一のintまたは配列のいずれか。 If null, may generate in any dimension `newtree.setDimWhitelist(0);`