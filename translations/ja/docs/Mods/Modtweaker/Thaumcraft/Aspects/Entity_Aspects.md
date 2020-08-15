# エンティティアスペクト

ModtweakerのThaumcraftの統合は [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)を拡張します。  
つまり、以下のメソッドを任意のIEntityDefinitionオブジェクトで使用することができます。

## アスペクトを設定

これを使用して、エンティティが通常どの側面を持つかを上書きできます。  
CTAspectStack [オブジェクト](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[]または多くの [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) オブジェクトが必要です。

```zenscript
<entity:sheep>.setApects(<aspect:terra>*5);
```

## アスペクトを削除

これを使用すると、特定の側面がエンティティに追加されないようにできます。  
CTAspectStack [オブジェクト](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/)[]または多くの [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) オブジェクトが必要です。

```zenscript
<entity:blaze>.removeアスペクト(<aspect:ignis>);
```