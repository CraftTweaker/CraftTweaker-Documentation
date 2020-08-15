# `系列`を取得中

## 概要
Obtaining a `Sequence` is a two step process: it is first necessary to obtain a reference to a sequence constructor of the correct type, then invoking the constructor by passing either a list of elements of the given type or a ready-made array of the given type will complete the construction process.

CraftTweakerの統合によっては、直接またはメソッド経由で `シーケンス` を取得する方法も提供されています。 この の場合、コンストラクタを呼び出す必要はありません。 一方、ジェネリック型は明示的に を指定せず、ユーザーは戻り値型のメンタルノートを作成する必要があります。

## ステップ 1: コンストラクター
`Sequence` コンストラクタを参照するには、以下の構文を持つ特殊なブラケットハンドラを使用します。

```zenscript
<sequence:CLASSNAME>
```

上記のスニペットで `CLASSNAME` は、この シーケンスが一般的になるクラスのショートまたは完全修飾名のいずれかを表します。 簡単な言葉では、コンストラクタが呼び出されたときにシーケンスが 保存できる要素の種類を定義します。

以下の2つの例を考えてみましょう。

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

`# 1` でマークされたシーケンス式は、 `IItemStack` のインスタンスを保持することができるシーケンスのコンストラクタへの参照を返します。 これは、現在のスクリプトで動作するようにクラスをインポートする必要があることに注意してください。

The sequence expression marked with `# 2` will return a reference to a constructor for a sequence that will be able to hold any type of `IIngredient`, meaning that it will accept `IItemStack`s, but also `IOreDictEntr`ies or any other custom `IIngredient` implementation.

**重要:** この初期型は現在のシーケンス型にのみ影響します。 It is always possible to change the type stored in this sequence later on via any `Sequence`-type-converting calls, such as `map`. 詳細は クラスドキュメント [](/Mods/Boson/Sequences/Docs/) で入手できます。

## ステップ 2: コンストラクタの起動
ブラケットハンドラはコンストラクタを呼び出すのではなく、単にそれを参照するだけなので、 コンストラクタを直接呼び出す必要があります。 これは通常のメソッドの呼び出し構文を介して行うことができますが、メソッド名ではなく、カッコ内のハンドラ を介して行われます。

シーケンスのコンストラクタはvarargです。つまり、任意の量の引数を受け付けることができます。 コンストラクタ参照で与えられた 汎用型である限り。 E.g., the bracket handler `<sequence:IItemStack>` will not be able to accept a `<ore:ingotCopper>` in its constructor, since an `IOreDictEntry` is not an `IItemStack`.

コンストラクタに引数を与えることはできません。この場合、シーケンスは空になります。

また、メソッドまたは変数の形式で配列自体または配列への参照を提供することもできます。 In this case, the array will be accepted only if the type matches `CLASSNAME[]`, where `CLASSNAME` is the name of the type of objects in the sequence. この動作 **は、** 実験フラグを有効にする必要があるかもしれないことに注意してください。 詳細については、 [実験的フラグプリプロセッサ](/Mods/Boson/Preprocessor/Exp/) を参照してください。

以下は、上記がどのようにインコードで適用されるかを示すコードの一部です。

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val sequenceOfRecipes = <sequence:ICraftingRecipe>(recipes.all); # requires -Esao to be specified
```

## 次は何ですか？
`シーケンス` が作成されたので、 [サポートされているメソッドのリストについては](/Mods/Boson/Sequences/Docs/) クラスドキュメント を参照してください。
