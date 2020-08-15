# IRegisterMaterialPart

IRegisterMaterialPart関数は、カスタム [パーツ](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) を使用して追加した [パーツタイプ](/Mods/ContentTweaker/Materials/Parts/PartType/)を登録するために使用されるファクションです。

## パッケージのインポート

この関数のクラスをインポートする必要がある場合は、次のようにします。

```zenscript
import mods.contenttweaker.RegisterMaterialPart;
```

## 構文

We have a void function, that takes a [Material Part](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) as input.  
This is the materialPart that should be registered.  
You could for example call the [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) at this point, but how proceed form this point is really up to you.

```zenscript
function(materialPart) {
    //DoStuff
    return;
}
```