# ICTBlockState

ICTBlockState オブジェクトはブロックの現在の状態を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.BlockState;`

## ICTBlockState を呼び出す

ICTBlockState は、 [IBlockAction 関数](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) 内のパラメータとして、または [Block Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/) から取得できます。

`<block:minecraft:dirt>`

## ZenMethodsとZenGetters

| ZenMethod         | ZenGetter | 戻り値                                                              | 説明                                  |
| ----------------- | --------- | ---------------------------------------------------------------- | ----------------------------------- |
| getBlock()        | ブロック      | [IBlock](/Vanilla/Blocks/IBlock/)                                | 参照されたブロックを返します                      |
| getMeta()         | meta      | int                                                              | 参照されたブロックのメタデータを返します                |
| canProvidePower() |           | boolean型                                                         | 参照されたブロックがレッドストーンパワーを与えられるかどうかを返します |
| getMobilityFlag() |           | [プッシュ反応](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | プッシュリアクションフラグを返します。                 |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
パラメータ:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → ブロックの位置

ブロックを置き換えられるかどうかを sais のブール値を返します。

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
パラメータ:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → ブロックの位置

指定された位置の現在の光の値を表す int を返します。

### getWeakPower

`int getWeakPower(IWorld world, IBlockPos blockPos, Facing facing);`  
パラメータ:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → ブロックの位置
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) → チェックする側

こちら側の現在のレッドストーン電力を表す int を返します。

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

パラメータ:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → ブロックの位置

ブロックのレッドストーンコンパレータ入力オーバーライド型を表す int を返します。

### 2つの ICTBlockState オブジェクトの比較

You can either use `int compare(ICTBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` は、等しい場合は 0 の整数を返します
- `state == other` は同じ値を持つ bool を返す