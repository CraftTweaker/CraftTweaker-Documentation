# MaterialPartLocalizedNameSupplier

MaterialPartLocalizedNameSupplier フォームに [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) オブジェクトを作成し、要求されるたびに使用されます。

## クラスのインポート

彼のクラスをインポートする必要がある場合は、次のようにします。

```zenscript
import mods.contenttweaker.MaterialPartLocalizedNameSupplier;
```

## 静的メソッド

静的メソッドは、クラスのインスタンスではなく、パッケージに対して呼び出すことができます。

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```