# アイテムのアスペクト

ModtweakerのThaumcraftの統合は [IItemStacks](/Vanilla/Items/IItemStack/)を拡張します。  
つまり、以下のメソッドはどのIItemStackオブジェクトでも使用できます。

## アスペクトを設定

これを使用して、アイテムが通常どの側面を持つかを上書きできます。  
CTAspectStack [オブジェクト](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[]または多くの [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) オブジェクトが必要です。

```zenscript
<minecraft:stone>.setApects(<aspect:ignis>*5);
```

## アスペクトを削除

これを使用すると、特定の側面が項目に追加されないようにできます。  
CTAspectStack [オブジェクト](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[]または多くの [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) オブジェクトが必要です。

```zenscript
<minecraft:iron_ore>.removeアスペクト(<aspect:terra>);
```