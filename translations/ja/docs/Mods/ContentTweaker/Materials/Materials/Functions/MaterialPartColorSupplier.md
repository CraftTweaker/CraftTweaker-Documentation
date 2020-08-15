# MaterialPartColorSupplier

MaterialPartColorSupplier フォームに [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) オブジェクトを作成し、要求されるたびに使用されます。

## クラスのインポート

彼のクラスをインポートする必要がある場合は、次のようにします。

```zenscript
import mods.contenttweaker.MaterialPartColorSupplier;
```

## 静的メソッド

静的メソッドは、クラスのインスタンスではなく、パッケージに対して呼び出すことができます。

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart materialPart));
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```