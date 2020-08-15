# IBlockState

IBlockState オブジェクトはブロックの現在の状態を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.block.IBlockState;`

## IBlockStateに発信

IBlockState を返すいくつかのメソッドがあります。

- [ブラケットハンドラ](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>` を使用する
- `IBlockState.getBlockState()` 静的メソッドを使用します。 （詳細は以下を参照）
- Using the `getMatchingBlockStates()` method on an [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) object to retrieve an array of IBlockStates.
- 別の IBlockState オブジェクトに `withProperty()` メソッドを使用します。

## 実行時に IBlockState を解決する

スクリプトがまだ読み込まれていないModのブロックとの相互作用に依存することがあります。 例えば、ContentTweaker や pre-init スクリプトローダーの内部ブロックイベントなどです。 まだ登録されていないブロックに [ブラケットHandler](/Vanilla/Brackets/Bracket_BlockState/) を使用しようとすると、 ハンドラは解決に失敗し、スクリプトは動作しません。

これを避けるために、静的な `IBlockState.getBlockState()` メソッドを使用して、実行時に IBlockState を解決できます。

### static getBlockState

`static IBlockState getBlockState(String blockname, String... properties)` Parameters:

- String blockname → [BlockState Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) に表示される "modid:blockname" 形式の文字列
- 文字列... プロパティ → このブロック状態に適用する `"name=value"` のペアの文字列をゼロ以上に設定します。 指定されていないプロパティは、指定されたブロック名のデフォルトのblockstateと同じ値を使用します。

指定された `プロパティ` を持つ `ブロック名`の IBlockState を返すか、プロパティが指定されていない場合はデフォルトの blockstate を返します。

## IBlockPropertiesを拡張

IBlockState extends [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). つまり、 [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) オブジェクトで使用可能なすべてのメソッドは、IBlockState オブジェクトでも使用できます。

## 拡張する IBlockStateMatcher

IBlockState extends [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). つまり、 [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) オブジェクトで利用可能なすべてのメソッドは、IBlockState オブジェクトでも利用できます。

## ZenMethodsとZenGetters

| ZenGetter     | 戻り値                               | 説明                                                                    |
| ------------- | --------------------------------- | --------------------------------------------------------------------- |
| ブロック          | [IBlock](/Vanilla/Blocks/IBlock/) | 参照されたブロックを返します                                                        |
| meta          | int                               | 参照されたブロックのメタデータを返します                                                  |
| commandString | 文字列                               | この状態に対して可能な [ブラケットハンドラー](/Vanilla/Brackets/Bracket_BlockState/) を返します |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
パラメータ:

- [IWorld](/Vanilla/World/IWorld/) ワールド → チェックインするワールド
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → ブロックの位置

ブロックを置き換えられるかどうかを sais のブール値を返します。

### プロパティの取得または変更

登録されたすべてのプロパティのリストを取得できます。 すべてのプロパティ名のリストとして、またはプロパティを値にマップするマップとして。  
特定のプロパティ名でどの値が可能かを確認することもできます。   
  
プロパティが変更された新しい IBlockState オブジェクトを作成するには、 `withProperty` を使用することもできます。

```zenscript
List<String> getPropertyNames();
String getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String value);
```

### 2つの IBlockState オブジェクトの比較

You can either use `int compare(IBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` は、等しい場合は 0 の整数を返します
- `state == other` は同じ値を持つ bool を返す

### 明示的なBlockstateマッチャーを取得しています

指定されたブロックに一致する [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) を返します。

```zenscript
IBlockStateMatcher matchBlock();
```