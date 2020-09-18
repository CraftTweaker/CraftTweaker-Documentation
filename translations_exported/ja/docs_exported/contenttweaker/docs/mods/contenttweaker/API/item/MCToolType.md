# MCToolType

ツールタイプは、どのような種類のブロックを採掘できるかを識別するために使用されます。 または逆に、特定のブロックを採掘するにはどのような種類のツールが必要です。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.MCToolType
```

## 実装されたインターフェース
MCToolType は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
ToolType オブジェクトを作成します。 指定された名前を持つものが既に存在する場合は、内部的に同じtoolTypeを指すことになります。 そうでなければ、名前を持つ新しいものが作成されます (同じことがBracketsでも同じことが当てはまります)。
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| パラメータ | タイプ  | 説明     |
| ----- | ---- | ------ |
| 名前    | 文字列型 | 使用する名前 |



## メソッド
### getName

このtoolTypeの名前を取得します。 The name is what is used in the Bracket expression after the `<tooltype:`

戻り値の型: String

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

オブジェクトのハッシュコードを返します

戻り値の種類: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

この型の文字列表現を取得します。 コマンド文字列とは異なります！

戻り値の型: String

```zenscript
<tooltype:pickaxe>.toString();
```


## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |
| 名前            | 文字列型 | true   | false  |

## 演算子
### EQUALS

2つの指定された MCToolType オブジェクトが等しい場合に比較

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| パラメータ | タイプ    | 説明          |
| ----- | ------ | ----------- |
| o     | オブジェクト | もう一方のオブジェクト |

## キャスト

| 結果の種類 | 暗黙的   |
| ----- | ----- |
| 文字列型  | false |

