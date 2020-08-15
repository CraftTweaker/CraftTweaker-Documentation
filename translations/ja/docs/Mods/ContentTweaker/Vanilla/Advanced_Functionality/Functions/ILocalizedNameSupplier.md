# ILocalizedNameサプライヤー

ILocalizedNameSupplier 関数はプログラム的に [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) の表示名を決定するために使用されます。

## クラスをインポートする

関数のクラスをインポートしたい場合は、次のようにします。

```zenscript
import mods.contenttweaker.LocalizedNameSupplier;
```

## 関数のセットアップ

関数は文字列を返し、 [IItemStack](/Vanilla/Items/IItemStack/) を単一の入力パラメータとして取ります。

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```