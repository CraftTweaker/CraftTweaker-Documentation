# BlockBuilder

blockbuilderはブロックを構築するために使用されます(あなたは完全にそれが来るのを見ませんでした、右?)。<br> 一度作成すると、別々のメソッドで概説される様々なプロパティを設定できます。 <p> ブロックの種類を変更して、より特殊なブロックを作成することもできます (e. を選択します。 Cotに、ブロックをインガムに表示させるには、 [mods.contentweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) を呼び出し、有効なリソースの場所パスを指定する必要があります。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## 実装されたインターフェース
BlockBuilder は、以下のインターフェースを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
新しいBlockBuilderを作成します。 これは _ではなく_ ゲーム内で新しいブロックを作成することに注意してください。そのためには、 [mods.contentweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) を呼び出す必要があります。
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material);
new mods.contentweaker.block.BlockBuilder();
new mods.contentweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| パラメータ | タイプ                                                                                  | 説明        | IsOptional | デフォルト値                       |
| ----- | ------------------------------------------------------------------------------------ | --------- | ---------- | ---------------------------- |
| 材料    | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | このブロックの材料 | true       | `<blockmaterial:iron>` |



## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |


### notSolid

このブロックがソリッドではないことをCoTに指示します。

 モデルがフルブロック(16x16x16)でない場合に必要です。 モデルが透過している場合(ガラスのような)にも必要です。 ブロックがエフェクトを設置したときにいくつかのエフェクトを作成する場合は、これを設定します。

 戻り値: `このビルダーは、チェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.notSolid();
```

### withHardnessAndResistance

ブロックの硬度と抵抗レベルを設定します。 他のメソッドとは異なり、このパラメータは 1 つしか受け付けず、両方のプロパティにその値を使用します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance(floatとして));
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| パラメータ                 | タイプ    | 説明           |
| --------------------- | ------ | ------------ |
| hardnessAndResistance | float型 | 硬度と抵抗に設定する値。 |



ブロックの硬度と抵抗レベルを設定します。 他のメソッドとは異なり、このメソッドでは各プロパティを別の値に設定できます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| パラメータ        | タイプ    | 説明        |
| ------------ | ------ | --------- |
| hardnessIn   | float型 | 硬度に設定する値  |
| resistanceIn | float型 | 抵抗に設定する値。 |


### withHarvestLevel

このブロックの採掘に必要な採掘レベルを設定します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(intとしてharvestLevel);
myBlockBuilder.withHarvestLevel(3);
```

| パラメータ | タイプ | 説明    |
| ----- | --- | ----- |
| 収穫レベル | int | 収穫レベル |


### withHarvestTool

このブロックを収穫するのに必要な道具を設定します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| パラメータ       | タイプ                                                                             | 説明     |
| ----------- | ------------------------------------------------------------------------------- | ------ |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | ツールの種類 |


### withItemGroup

このブロックを表示するアイテムグループを設定します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| パラメータ | タイプ                                                                               | 説明       |
| ----- | --------------------------------------------------------------------------------- | -------- |
| グループ  | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | 設定するグループ |


### withLightValue

ブロックのライト値を設定します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| パラメータ        | タイプ | 説明         |
| ------------ | --- | ---------- |
| lightValueIn | int | 設定するライトレベル |


### withLootFrom

format@@0ブロックのいずれかを持つ戦利品テーブルをformat@@1上書きするようCoTに指示します。 現在、これはまだ戦利品テーブルのエントリを作成しますが、それはゲームによって無視されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| パラメータ   | タイプ                                                           | 説明              |
| ------- | ------------------------------------------------------------- | --------------- |
| blockIn | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | 略奪テーブルを適用するブロック |


### withMaxStackSize

インベントリ内のスタックサイズの最大値を設定します。 変更しない場合は64になります。

 戻り値: `このビルダーは、チェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| パラメータ | タイプ | 説明       |
| ----- | --- | -------- |
| サイズ   | int | 設定するサイズ。 |


### withRarity

このブロックのレア度を設定できます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| パラメータ | タイプ  | 説明  |
| ----- | ---- | --- |
| レア度   | 文字列型 | レア度 |


### withslipperiness

滑りやすさを設定します。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| パラメータ       | タイプ    | 説明    |
| ----------- | ------ | ----- |
| slupinessIn | float型 | 設定する値 |


### withType

このブロックの種類を設定します。 このメソッドが呼び出されると、ビルダーのコンテキストはより提供された型ビルダーに切り替わります。 つまり、このビルダーのメソッドは利用できなくなります。 このメソッドを呼び出す前に、設定したいプロパティを設定する必要があります。

 戻り値: `指定されたブロックを持つビルダー。`

戻り値の種類: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| パラメータ名 | バウンド数                                                                                         |
| ------ | --------------------------------------------------------------------------------------------- |
| T      | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### without Drops

このブロックには戦利品のエントリがないように指示します。 現在、これはまだ戦利品テーブルのエントリを作成しますが、それはゲームによって無視されます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### withoutMovementBlocking

このブロックが動きをブロックしないよう命令します。 [mods.contenttweaker.block.BlockBuilder#notSolid()](/mods/contenttweaker/API/block/BlockBuilder/#notsolid)

 戻り値: `このビルダーは、チェーンに使用されます`

戻り値の型: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


