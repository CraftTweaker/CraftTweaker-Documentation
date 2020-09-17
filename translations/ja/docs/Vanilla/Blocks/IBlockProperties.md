# IBlockProperties

BlockPropertiesは、ブロックを他のブロックから独特にするものです。 これは主に [IBlockState](/Vanilla/Blocks/IBlockState/)のスーパーインターフェイスとして機能します。つまり、これらの関数はすべての [IBlockState](/Vanilla/Blocks/IBlockState/) オブジェクトでも使用できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.block.IBlockProperties;`

| ZenGetter                 | 戻り値                                     | 説明                                                      |
| ------------------------- | --------------------------------------- | ------------------------------------------------------- |
| canProvidePower           | bool                                    | 参照されたブロックがレッドストーンパワーを与えられるかどうかを返します                     |
| mobilityFlag              | 文字列                                     | [モビリティフラグ](/Vanilla/Blocks/IMobilityFlag/) を文字列として返します。 |
| 材料                        | [IMaterial](/Vanilla/Blocks/IMaterial/) | ブロックの [マテリアル](/Vanilla/Blocks/IMaterial/)を返します。         |
| 原因Suffocation             | bool                                    | ブロックがあなたを窒息させるかどうかを返します。                                |
| hasCustomBreakingProgress | bool                                    |                                                         |
| blockNormalCube           | bool                                    |                                                         |
| fullBlock                 | bool                                    |                                                         |
| fullCube                  | bool                                    |                                                         |
| normalCube                | bool                                    |                                                         |
| opaqueCube                | bool                                    |                                                         |
| 半透明の                      | bool                                    |                                                         |
| useNeighborBrightness     | bool                                    |                                                         |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
パラメータ:

- [IWorld](/Vanilla/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → ブロックの位置

ブロックを置き換えられるかどうかを sais のブール値を返します。

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
パラメータ:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) ワールド → チェックインするワールド
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → ブロックの位置

指定された位置の現在の光の値を表す int を返します。

### getWeakPower/GetStrongPower

`int getWeakPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
`int getStrongPower(IBlockAccess world, IBlockPos blockPos, Facing facing);`  
パラメータ:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) ワールド → チェックインするワールド
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → ブロックの位置
- [Facing](/Vanilla/World/IFacing/) facing → The side to be checked Returns an int representing the current redstone power on this side.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

パラメータ:

- [IWorld](/Vanilla/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → ブロックの位置

ブロックのレッドストーンコンパレータ入力オーバーライド型を表す int を返します。

### ブロックにエンティティがスポーンできるかどうかを確認します。

Use an [IEntity](/Vanilla/Entities/IEntity/).  
Returns a bool.

```zenscript
blockProperties.canEntitySpawn(Entity entity);
```

### 実際のBlockStateを入手

[IBlockAccess](/Vanilla/World/IBlockAccess/) と [IBlockPos](/Vanilla/World/IBlockPos/)を使用します。  
新しい IBlockProperties オブジェクトを返します。

```zenscript
blockProperties.getActualState(IBlockAccess world, IBlockPos pos);
```

### ブロックの硬さを得る

Use [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns a float.

```zenscript
blockProperties.getBlockHardness(IWorld world, IBlockPos pos);
```

### ブロックの明るいopacyを取得する

Use [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
returns an int.

```zenscript
blockProperties.getLightOpacy(IWorld world, IBlockPos pos);
```

### プレイヤーの相対ブロックハーネスを入手

Use an [IPlayer](/Vanilla/Players/IPlayer/), an [IWorld](/Vanilla/World/IWorld/) and an [IBlockPos](/Vanilla/World/IBlockPos/).  
Returns a float.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld world, IBlockPos pos);
```

### ブロックの辺がソリッドかどうかを確認する

[IBlockAccess](/Vanilla/World/IBlockAccess/)、 [IBlockPos](/Vanilla/World/IBlockPos/) 、および [IFacing](/Vanilla/World/IFacing/) オブジェクトを使用します。  
ブールを返します。

```zenscript
blockProperties.isSideSolid(IBlockAccess world, IBlockPos pos, IFacing facing);
```