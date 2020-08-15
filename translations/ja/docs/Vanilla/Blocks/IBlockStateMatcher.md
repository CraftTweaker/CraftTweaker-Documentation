# IBlockStateMatcher

IBlockStateMatcherオブジェクトは、 [IBlockState](/Vanilla/Blocks/IBlockState/) オブジェクトを要件のセットや一致するブロック状態のセットに対してマッチさせるために使用できます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/) or using the static `.create()` method), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockStateMatcher;`

## 特定の IBlockState に一致する

すべての [IBlockState](/Vanilla/Blocks/IBlockState/) は、自分自身にのみマッチする IBlockStateMatcher でもあります。

## 特定のブロックと一致するすべてのブロックの状態

[IBlockState](/Vanilla/Blocks/IBlockState/)の `matchBlock()` メソッドを使用して、そのブロックの可能なブロック状態に一致する IBlockStateMatcher を作成できます。

## Calling an IBlockStateMatcher

IBlockStateMatcherを返すいくつかのメソッドがあります

- Using `IBlockStateMatcher.create()`.
- 別の IBlockStateMatcher の `withMatchedValuesForProperty()` メソッドを使用します。
- または2つのIBlockStateMatcherを一緒にして複合マッチャを取得します。
- すべての IBlockState オブジェクトは IBlockStateMatchers なので、 [IBlockState](/Vanilla/Blocks/IBlockState/)を作成する。

## 複合マッチング

When using OR (`|`) to combine IBlockStateMatchers, the resulting IBlockStateMatcher is no longer tied to one specific underlying block, as it would be with an [IBlockState](/Vanilla/Blocks/IBlockState/) or an IBlockStateMatcher created using the `IBlockStateMatcher.create()` method. 代わりに、マッチャーは結合されたマッチャーのいずれかによってマッチさせられたすべてのblockstateにマッチします。

このブロック状態は特定のブロックに関連付けられていないため、 `withMatchedValuesForProperty()` メソッドを使用して別の IBlockStateMatcher を取得することはできません。

### スタティック作成

`static IBlockStateMatcher create(IBlockState... blockStates);` Parameters:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockState → ゼロ以上のブロック状態をこのマッチャーと一致させます。 

指定されたブロック状態に一致する IBlockStateMatcher を返します。

- `blockStates` をゼロにした場合、このマッチャはブロック状態と一致しません。 
- If only one blockstate is supplied in `blockStates`, the resulting IBlockStateMatcher will match *any* blockstate of the provided IBlockState's underlying block with any property values accepted as matching. `withMatchedValuesForProperty` メソッドを使用して、プロパティに対するより具体的な要件を追加できます。 
- If multiple `blockStates` are supplied, the resulting IBlockStateMatcher is the same as using the OR (`|`) operator with each of the IBlockStates provided.

## ZenMethods

### 一致

`boolean matches(IBlockState blockState);`  
パラメータ:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → 一致する blockstate オブジェクト

blockstateがこのマッチャの要件に一致するかどうかを表すブール値を返します。  
`A は` `A.matches(B)` を表すB を持つこともできます。

### 許可されたプロパティを取得または追加

*(これらのメソッドは非コンパウンドIBlockStateMatcherインスタンスでのみ使用できます)*

    IBlockStateMatcher withMatchedValuesForProperty(Stringname, String... values);
    List<String> getMatchedValuesForProperty(String name);
    Map<String, List<String>> getMatchedProperties();
    

パラメータ:

- 文字列名 → プロパティ名
- 文字列... 値 → 一致する IBlockState のプロパティに 1 つ以上の値がある可能性があります。

Returns a new IBlockStateMatcher with the same property requirements as this IBlockStateMatcher with the exception of the specified property `name`, which will now allow any of the specified `values` as a matching input.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Returns a collection of every [IBlockState](/Vanilla/Blocks/IBlockState/) with any combination of properties that match this IBlockStateMatcher. このリストには、通常のゲームプレイ手段では得られないブロック状態が含まれている可能性があります。 （例： `IBlockStateMatcher） reate( <code> )<blockstate:minecraft:log>` は、プロパティ `axis=none`を持つログに一致する IBlockStateMatcher を返します。 6面全てに樹皮質感覚を持っています

### BlockStateが複合状態であるかどうかを確認します

`boolean isCompound()`

あなたが期待するものを行います。

### コマンド文字列表現を取得する

`ZenGetter のコマンド文字列`

Returns a Bracket Handler expression string, if needed paired with `withMatchedValueForProperty()` calls.  
Keep in mind though, that the returned method calls do not have `""` around the parameters.  
So if you wanted to copy that result, you'd need to manually add them to the arguments!