# `タグ`

`タグ` は、実際のゲーム内タグ内に格納されているもののオブジェクト表現です。 You can only access this data from within the [`tags` loader](/Mods/Boson/Loaders/Tags/). For more information regarding tags and how to obtain them, refer to [this page](/Mods/Boson/Tags/Concept/).

## クラスの詳細
このクラスは、 `net.thesilkminer.mc.boson.zen.tag` パッケージ内にあり、 `net.thesilkminer.mc.boson.tag.Tag` インポートの完全修飾名です。

## 新しいインスタンスの作成
Refer to [the bracket handler documentation](/Mods/Boson/Tags/BracketHandler/).

## プロパティー
`タグ` は、次の表で説明されているように、特定のプロパティセットへの読み取り専用アクセスを提供します。

| プロパティ名 | タイプ                                    | 説明               |
| ------ | -------------------------------------- | ---------------- |
| `名前`   | [`名前SpacedString`](/Mods/Boson/Names/) | このタグを一意に識別する名前   |
| `タイプ`  | [`TagType`](/Mods/Boson/Tags/TagType/) | このタグの種類          |
| `要素`   | `[T]` ( `T` は一般的な型)                    | タグ内の要素の読み取り専用リスト |

## メソッド

### 加算
タグに要素を追加するには、次のような署名がスニペットに含まれるメソッドの 3 連続したメソッドを使用します。

```zenscript
function add(elements... as NameSpacedString) as void;
function addAll(elements as any[]) as void;
function addFrom(other as Tag) as void;
```

`add` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. これにより、 タグに追加したい要素のレジストリ名を指定することができ、タグ実装自体は指定された名前を実際のオブジェクトに変換しようとします。

`addAll`はその一方で、要素の配列を受け取り、与えられたタグにそれらをすべて追加しようとします。 このメソッドの入力に汎用サポートがないため、配列は に `any[]` とマークされています。 それにもかかわらず、互換性のない 要素をタグに追加しようとしています (例えば アイテムのみタグにブロックを追加すると、操作が実行されなくなります。

`addFrom` adds all the contents of a tag to the other via a Tag Reference, meaning that any modifications carried out to the second tag also happens to the first. この操作はタグタイプが一致する場合にのみ成功することに注意してください。それ以外の場合は、 no-op 操作が実行されます。

以下に例を示します。

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# add elements via registry name
tag.add("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# add elements via their actual instances
tag.addAll([<buildcraft:iron_ingot>] as IItemStack[]);

# add another tag via a tag reference
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### 交換
タグの要素は完全に置き換えることができます。つまり、すべての内容が最初に消去されます。 次に、与えられた要素がタグの内容に 追加されます。 これは、署名が 以下のスニペットに含まれるメソッドの 3 連続でも達成されます。

```zenscript
function replace(elements... as NameSpacedString) as void;
function replaceAll(elements as any[]) as void;
function replaceWith(other as Tag) as void;
```

`replace` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. これにより、タグの内容を 置き換えるために使用したい要素のレジストリ名を指定することができ、タグの実装自体は指定された名前を実際の オブジェクトに変換しようとします。

`replaceAll`, on the other hand, accepts an array of elements and attempts to replace the contents of the given tag with the array. このメソッドの入力には汎用サポートがないため、配列は `any[]` とマークされています。 Nevertheless attempting to pass non-compatible elements to a tag (say, blocks to an item-only tag) will result in a no-op operation being carried out.

`replaceWith` replaces the contents of the given tag with a Tag Reference to the other, meaning that any modifications carried out to the second tag also happens to the first. この操作はタグの種類が一致する場合にのみ成功することに注意してください。 そうでなければ、no-op 操作が実行されます。

以下に例を示します。

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# replace elements via registry name
tag.replace("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# replace elements via their actual instances
tag.replaceAll([<buildcraft:iron_ingot>] as IItemStack[]);

# replace another tag via a tag reference
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### 削除
タグから要素を削除するには、次のような署名がスニペットに含まれるメソッドの 3 連続したメソッドを使用します。

```zenscript
function remove(elements... as NameSpacedString) as void;
function removeAll(elements as any[]) as void;
function removeFrom(other as Tag) as void;
```

`remove` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. これにより、タグから を削除したい要素のレジストリ名を指定することができ、タグ実装自体は指定された名前を実際のオブジェクトに変換しようとします。

`removeAll`は、その一方で、要素の配列を受け取り、与えられたタグからそれらをすべて削除しようとします。 配列は `any[]` としてマークされています。これは、このメソッド入力に対する一般的なサポートがないためです。 Nevertheless attempting to remove non-compatible elements from a tag (say, removing blocks from an item-only tag) will result in a no-op operation being carried out.

`removeFrom` は最初のタグのタグ参照のリストから2番目のタグを削除します。 This will consequently remove the items that the second tag carries from the list of the first ones, though the second tag won't have its contents cleared. この操作はタグタイプが一致する場合にのみ成功することに注意してください。そうでなければ、no-op 操作が実行されます。

以下に例を示します。

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# remove elements via registry name
tag.remove("minecraft:iron_ingot" as NameSpacedString, "thermalfoundation:iron_ingot" as NameSpacedString);

# remove elements via their actual instances
tag.removeAll([<buildcraft:iron_ingot>] as IItemStack[]);

# remove a tag reference
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Clearing
単一の方法でタグの内容を消去することもできます。 This will remove all elements and all Tag References stored in the tag and is equivalent to replacing a tag with empty contents. これは、 以下の署名を持つメソッドを使用して行うことができます。

```zenscript
関数clear() を void;
```

以下は一例です:

```zenscript
<tag-items:forge:ingots>.clear();
```

## 追加サポート
タグは、特定の ZenScript 機能の追加サポートも提供します。

### クエリ中
`は` 構文を使用することで、タグに特定のオブジェクトが含まれているかどうかを問い合わせることができます。 タグは実際には 要素の集合として見ることができます。

```zenscript
val isContained = TAGにエレメントがあります。
```

`TAG` はクエリするタグインスタンスを表します。 `ELEMENT` は、 タグに含まれているかどうかを確認するために問い合わせることができる要素インスタンスを表します。

Note that while tags support querying of anything (it is effectively accepting `any`), using an element that is not of the type that is stored in the tag has no effect and will simply short-circuit the evaluation to `false`.

### イテレーション
タグは、通常の `for` ループを使用して、繰り返しのループをサポートします。 これにより、 要素を `要素` への呼び出しを介して format@@3 要素を照会する必要性が排除され、よりクリーンなコードになります。

タグは効果的にセットされているため、反復順序は保持されず、 イテレータの異なる実行間で異なる場合があります。 このため、単一要素のイテレータのみがサポートされます (イテレーション時にはイテレーションインデックス をリクエストすることもできません)。

使用する構文は次のとおりです。

```zenscript
for VARNAME in TAG {
}
```

`VARNAME` はループごとに更新される変数の名前を表す。 `TAG` はループするタグインスタンスです。

## オペレータのオーバーロード
タグは通常の ZenScript 演算子のオーバーロードも提供します。これにより、特定の操作を簡単かつ 文字以下で実行できます。 各セクションは、対応する の意味を持つ、利用可能な特定の演算子オーバーロードの表をホストします。 In all tables, `TAG` represents the target tag instance, whereas `ARGx` represents the *x*-th argument that should be supplied.

### 単項演算子
単項演算子は、タグ自体に適用され、引数を取らない演算子です。

|     | 構文     | メソッドに相当する | メモ  |
| --- | ------ | --------- | --- |
| `-` | `-Tag` | `クリア`     | \- |

### バイナリ演算子
バイナリ演算子は、タグと1つの引数の間に適用されるインフィックス演算子です。 演算子は、優先順位の順にここに記載されています (最初に適用されることを意味します)。

**IMPORTANT**: unless noted otherwise, all operators **mutate** the tag that is passed to the overload, meaning that they change their contents. 次の例を考えてみましょう:

```zenscript
val tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] as IItemStack[];
```

このスニペットの最後に、 `タグ` の内容が演算子のルールに従って変更されます。 これは **ではなく** 新しいタグを作成し、元のタグの値を返します。 以下のコードのスニペットは、実際には無効です。

```zenscript
val tag = <tag-items:forge:ingots>;
# NOT VALID: WILL CAUSE CompilATION ERROR
tag & [<minecraft:iron_ingot>] as IItemStack[];
```

|         | 引数のタイプ                                 | 構文               | 同等の方法        | メモ                                |
| ------- | -------------------------------------- | ---------------- | ------------ | --------------------------------- |
| `+`     | `タグ`                                   | `TAG + ARG1`     | `addFrom`    | \-                               |
| `+`     | `誰でも`                                  | `TAG + ARG1`     | `addAll`     | 配列の型はタグの内容と同じでなければなりません           |
| `+`     | [`名前SpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `追加`         | 過負荷は一つの引数のみ受け付けます                 |
| `+`     | `任意の`                                  | `TAG + ARG1`     | `addAll`     | 単一の要素のショートランド：配列のバージョンと同じルール      |
| `~`     | `タグ`                                   | `TAG ~ ARG1`     | `addFrom`    | \-                               |
| `~`     | `誰でも`                                  | `TAG ~ ARG1`     | `addAll`     | 配列の型はタグの内容と同じでなければなりません           |
| `~`     | [`名前SpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `追加`         | 過負荷は一つの引数のみ受け付けます                 |
| `~`     | `任意の`                                  | `TAG ~ ARG1`     | `addAll`     | 単一の要素のショートランド：配列のバージョンと同じルール      |
| `&` | `タグ`                                   | `TAG & ARG1` | `addFrom`    | \-                               |
| `&` | `誰でも`                                  | `TAG & ARG1` | `addAll`     | 配列の型はタグの内容と同じでなければなりません           |
| `&` | [`名前SpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `追加`         | 過負荷は一つの引数のみ受け付けます                 |
| `&` | `任意の`                                  | `TAG & ARG1` | `addAll`     | 単一の要素のショートランド：配列のバージョンと同じルール      |
| `-`     | `タグ`                                   | `TAG - ARG1`     | `removeFrom` | \-                               |
| `-`     | `誰でも`                                  | `TAG - ARG1`     | `すべて削除`      | 配列の型はタグの内容と同じでなければなりません           |
| `-`     | [`名前SpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `削除`         | 過負荷は一つの引数のみ受け付けます                 |
| `-`     | `任意の`                                  | `TAG - ARG1`     | `すべて削除`      | 単一の要素のショートランド：配列のバージョンと同じルール      |
| `==`    | `タグ`                                   | `TAG == ARG1`    | \-          | 等価性をチェックし、内容を一致させる行為。 `TAGを変更しない` |
| `()`    | \-                                    | `TAG()`          | `要素`         | \-                               |
