# ZenAnnotation

ZenAnnotation は、クラスまたはメソッドに ZenScript に公開することができます。

## クラスのアノテーション（注釈）

これらの注釈は ZenClasses に渡すことができます。

| 注釈                                                                       | 値                                                                          | Target | 情報                                                                           |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenClass 名（例： `crafttweaker.item.IItemStack`）は、クラスの正式名称と異なる場合があります。        | クラス    | 名前は一意である必要があります                                                              |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | 拡張されたZenType名 (例: `crafttweaker.item.IItemStack`)                          | クラス    | 名前が既に存在している必要があります（存在しないものを拡張することはできません）                                     |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                            | クラス    | クラスの自動登録や拡張に使用されます                                                           |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | Iterable タイプの ZenClass 名 (例: `crafttweaker.mods.IMod`)                     | クラス    | クラスを `反復可能な<Type>`に割り当てる必要があります                                        |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Iterable キーと Type 値の ZenClass 名 (例: `文字列`, `crafttweaker.item.IItemStack`) | クラス    | `リスト<Type>` にクラスを割り当てる必要があります                                          |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Iterable タイプの ZenClass 名 (例: `crafttweaker.mods.IMod`)                     | クラス    | `マップ<KeyType, ValueType>`にクラスを割り当てる必要があります                             |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | ブラケットハンドラの優先度 (例: `priority = 19`)                                         | クラス    | `IBracketHandler` にクラスを割り当てる必要があります                                          |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | 必要なmodの名前 (`isModLoaded(annotation.getValue())` は eval to true)            | クラス    | [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) と組み合わせて使用 |

## パラメータアノテーション：

これらのアノテーションはメソッドパラメータに与えることができます。

| 注釈                                                           | Target | 情報                                             |
| ------------------------------------------------------------ | ------ | ---------------------------------------------- |
| `@NotNull`                                                   | パラメータ  | 何もしない (NYI)                                    |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | パラメータ  | パラメータをオプションとして示します。 関数を呼び出すときは、任意のパラメータを省略できます |

## メソッド注釈

これらのアノテーションは、メソッド (静的および非静的) に与えることができます。

| 注釈                                                                         | 値                                                       | Target |
| -------------------------------------------------------------------------- | ------------------------------------------------------- | ------ |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                         | 方法     |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [演算子タイプ](/Dev_Area/ZenOperators/)                       | 方法     |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | 省略した場合はgetter name (例: "name") メソッド名を () なしで使用します。      | 方法     |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | 省略した場合はsetter name (例: "name") メソッド名 without () が使用されます | 方法     |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                         | 方法     |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                         | 方法     |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                         | 方法     |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                         | 方法     |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | `dumpZS`の追加メソッド情報                                       | 方法     |

## フィールド注釈

これらのアノテーションは、パブリックフィールド(静的フィールドと非静的フィールドの両方)に与えることができます。

| 注釈                                                     | Target | 情報                                   |
| ------------------------------------------------------ | ------ | ------------------------------------ |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | フィールド  | `@ZenSetter` と `@ZenGetter` を組み合わせる。 |