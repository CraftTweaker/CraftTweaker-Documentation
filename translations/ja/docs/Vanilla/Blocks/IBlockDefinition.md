# IBlockDefinition

IBlockDefinition オブジェクトは、ブロックに関する追加情報を提供します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## IBlockDefinition オブジェクトの呼び出し

* `定義` の ZenGetter を [IBlock](/Vanilla/Blocks/IBlock/) オブジェクトに使用する。

## IBlockDefinition Listの呼び出し

* `game.blocks` を使用して、ゲーム内のすべてのブロック定義のリストを取得します。

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | 何をするか                           | タイプ                                                 |
| --------------- | ------------------- | ------------------------------- | --------------------------------------------------- |
|                 | canSpawnInBlock     | このブロックにエンティティがスポーンできるかどうかを返します。 | bool                                                |
| creativeTab     | creativeTab         |                                 | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                 | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                 | float型                                              |
| id              |                     | ブロック ID を返します                   | 文字列                                                 |
| displayName     |                     | ブロックの DisplayName を返します。        | 文字列                                                 |
|                 | 硬さ                  |                                 | int                                                 |
| 収穫レベル           |                     | ブロックの収穫レベルを返します。                | int                                                 |
| harvestTool     |                     | ブロックの収穫ツールを返します                 | 文字列                                                 |
|                 | lightOpacity        |                                 | int                                                 |
|                 | lightLevel          |                                 | int                                                 |
|                 | 抵抗                  |                                 | int                                                 |
| unlocalizedName |                     | ブロックのローカライズされていない名前を返します        | 文字列                                                 |
| tickRandomly    | tickRandomly        |                                 | bool                                                |

## ZenMethods

### ブロックを壊れないように設定

  
何も返さない。  
`hardness = -1;` と同じ。

```zenscript
defObj.setUnbreakable();
```

### 特定のワールドでティックレートを取得する

[IWorld](/Vanilla/World/IWorld/) オブジェクトを使用します。  
intを返します。

```zenscript
defObj.getTickRate(IWorld world);
```

### ブロックを別のブロックに配置できるかどうかを確認します

Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.

```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```

### ブロックの滑りやすさを得る

Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.

```zenscript
defObj.getSlipperiness(IBlockState 状態, IBlockAccess アクセス, IBlockPos pos, @Optional IEntityエンティティ);
```

### ブロックの収穫量のレベルを設定する

文字列と int を使用します。  
void (nothing) を返します。

```zenscript
defObj.setHarvestLevel(string toolclass, int level);
```

### メタデータでブロック状態を取得する

Uses an int.  
戻り値 [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```