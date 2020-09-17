# `クラス`

`クラス` は、ZenScriptに公開されている型の単一のインスタンスを識別します。 Almost everything in ZenScript is, in fact, an instance of a class, be it an `IItemStack` (which is an instance of that class) or an array of strings (which is an instance of `string[]`).

## クラスの詳細
このクラスは `zenscriptx.reflect` パッケージ内にあり、 `zenscriptx.reflect.Class` をインポートするための完全修飾名 にします。

## 新しいインスタンスの作成
The only possible way to create a new `Class` instance is through one of the two static methods, which take either the name of the class or an object to inspect. 次のスニップは、 使用できる2つのメソッドの署名を示しています:

```zenscript
function byName(name as string) as Class?;
function from(instance as any) as Class?;
```

Both methods are allowed to return `null` (as shown by the `?` at the end of the type) because there is the possibility for some classes not to have a ZenScript equivalent or are literally unable to be represented as instances of `Class`.

以下に、2つの工場メソッドの使用例を示します。

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # returns a Class that represents IItemStack
Class.from(<blockstate:minecraft:pumpkin>); # returns a Class that represents IBlockState
Class.byName("123"); # returns null because no class with that name exists (or can exist, for that matter)
```

## プロパティー
`クラス` は、次の表で説明されているように、特定のプロパティセットへの読み取り専用アクセスを提供します。

| プロパティ名          | タイプ   | 説明                                                                                                                                   |
| --------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `simpleName`    | `文字列` | "Shortest" name that can be used to refer to the class (i.e. `IItemStack` for `crafttweaker.item.IItemStack`, `string` for `string`) |
| `qualifiedName` | `文字列` | ZenScript環境でこのクラスを一意に識別するフルネーム (例: `crafttweaker.item.IItemStack` または `文字列`)                                                         |

## メソッド
`クラス` はまた、「ネイティブ」等価に変換できる単一のメソッドへのアクセスを提供します(詳しい情報については、 [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) を参照してください)。 メソッドの署名は次のとおりです。

```zenscript
function toNativeClass() as NativeClass?;
```

The method may return `null` because not all ZenScript types may have a native equivalent, e.g. certain associative arrays may not be perfectly represented in a native environment, requiring some mangling.
