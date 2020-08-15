# `NativeClass`

`NativeClass` は、 ZenScript の背後にあるバックエンド環境のクラスのインスタンスを識別します。 したがって、 CraftTweaker の場合、 `NativeClass` は Java クラスを表します。

## クラスの詳細
このクラスは `zenscriptx.reflect` パッケージ内にあり、 `zenscriptx.reflect.NativeClass` をインポートするための完全修飾の 名にします。

## 新しいインスタンスの作成
The only possible way to create a new `NativeClass` instance is through one of the two static methods, which take either the name of the class or an object to inspect. 次のスニップは、 が使用できる2つのメソッドの署名を示しています。

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Both methods are allowed to return `null` (as shown by the `?` at the end of the type) because there is the possibility for some classes not to exist or not to have a backend counterpart. 実際、特定の連想配列はバックエンドで 表現できず、正しく使用するにはいくつかのマングリングを必要とする場合があります。

以下に、2つの工場メソッドの使用例を示します。

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # returns the NativeClass with the given name
NativeClass.fromZen(<blockstate:minecraft:pumpkin>); # returns the NativeClass that matches the ZenScript IBlockState Class
NativeClass.byName("123"); # returns null because no native class with that name can exist
```

## プロパティー
`NativeClass` は、以下の表で説明されているように、特定のプロパティセットへの読み取り専用アクセスを提供します。

| プロパティ名          | タイプ   | 説明                                                                                                                                                 |
| --------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`    | `文字列` | "Shortest" name that can be used to refer to the class (i.e. `IItemStack` for `crafttweaker.api.item.IItemStack`, `String` for `java.lang.String`) |
| `qualifiedName` | `文字列` | バックエンド環境でこのクラスを一意に識別するフルネーム (例: `crafttweaker.api.item.IItemStack` または `java.lang.String`)                                                         |

## メソッド
`NativeClass` は、ZenScriptと同等の方法への変換を可能にする単一のメソッドへのアクセスも提供します(詳細については、 [`クラス`](/Mods/Boson/Reflection/Class/) を参照してください)。 メソッドの署名は次のとおりです。

```zenscript
function toClass() as Class?;
```

このメソッドは `null` を返す可能性があります。なぜなら、すべてのネイティブクラスが ZenScript で表現されているわけではないからです。 In fact, there are some parts of the backend that are not exposed to ZenScript users, such as `org.apache.commons.lang3.BitField`, which therefore cannot be represented via a ZenScript `Class` object.
