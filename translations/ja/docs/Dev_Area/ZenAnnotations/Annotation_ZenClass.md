# ZenClass

ZenClass は、ZenScript に公開されている Java クラスです。

## 例

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
public interface IItemStack extends IIngredient {
    //ページを短く保つために切り取り
}
```

実際の実装に注釈を付ける必要はありません。

## どのクラスに注釈を付けることができますか|| 追加情報

- すべてのJavaクラスに注釈を付けることができます。
- 注釈に文字列の値(例: `crafttweaker.item.IItemStack` )を与える必要があります。 これはクラスのZS内部名になります。
- クラスにZenClassを宣言した後でも登録する必要があります。 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) を使用することをお勧めします