# 房尊の名称

Minecraft では、ほとんどのオブジェクトは固有の名前で識別されます。 例えば、アイテムは一意に識別されるためにレジストリ名を使用します そして、同じレジストリ名を持つ複数のアイテムは存在できません。

Most names in Minecraft follow a rigid structure, identified by a string with a namespace and a path separated by a colon (e.g. `minecraft:iron_ingot`, where `minecraft` is the namespace and `iron_ingot` is the path). CraftTweakerでは、 これらの名前のほとんどは生の文字列として表現されていますが、Boson内ではこれは眉をひそめています。 実際には raw `文字列` の使用は、メソッド呼び出しが文字列を名前空間で期待するか、無しで期待するかに関係なく人を混乱させる可能性があります。 このため、 Bosonは非名前空間文字列と名前空間文字列の使用法を分離しました。

名前空間でない文字列は `文字列`のインスタンスとして表現されます。 For more information, refer to the ZenScript documentation.

名前空文字列は `NameSpacedString`のインスタンスとして、Boson API のすべてのインスタンスとして表現されます。 このような文字列の取得方法についての詳細は を参照してください。

## `NameSpacedString` ドキュメント
`NameSpacedString` クラスは、 `net.thesilkminer.mc.boson.zen.naming` パッケージに含まれます。

### 新しいインスタンスの作成
`NameSpacedString`を作成するには、ファクトリメソッドを使用する方法と、 `文字列` をキャストする方法があります。

工場出荷方法は推奨されるアプローチです。 静的メソッドであるため、クラス インスタンス上で直接呼び出すことができます。 以下は、メソッドの署名とその使用例です。

```zenscript
function from(nameSpace as string?, path as string) as NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // minecraft:iron_ingot に相当する
NameSpacedString.from(null, "iron_ingot"); // デフォルトの名前空間 'minecraft' を使用
```

キャスティング方法は、 `文字列` から `NameSpacedString` への明示的なキャストに代わり、 `を` 演算子として ZenScript:

```zenscript
"minecraft:iron_ingot" as NameSpaceString;
```

### プロパティー
`NameSpacedString` は、プロパティを介して名前空間とそのパスの両方への読み取り専用アクセスを提供します。

| プロパティ名      | タイプ   | 説明                                                  |
| ----------- | ----- | --------------------------------------------------- |
| `nameSpace` | `文字列` | `NameSpacedString` (例: `minecraft` ) の名前空間部分を取得します。 |
| `小道`        | `文字列` | `NameSpacedString` (例: `iron_ingot` ) のパス部分を取得します。  |

### メソッド

#### `asString`
`NameSpacedString` は `asString` メソッドを使用して、通常の `文字列` に変換できます。 以下は、 メソッドの署名とその使用例です。

```zenscript
function asString() as string;
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // 'minecraft:iron_ingot' をログに出力する
```
