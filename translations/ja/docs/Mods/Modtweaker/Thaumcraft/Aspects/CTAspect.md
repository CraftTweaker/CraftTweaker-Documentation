# CTAspect

CTAspect は、 [アスペクトスタック](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/)の裏にある [IItemDefinition](/Vanilla/Items/IItemDefinition/) のように、 [IItemStack](/Vanilla/Items/IItemStack/) の下にある側面です。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import thaumcraft.aspect.CTAspect;`

## そのようなオブジェクトを取得しています

[CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/) オブジェクトからCTAspectオブジェクトを取得できます。

```zenscript
val アスペクト = <aspect:ignis>.internal;
```

## ZenGettersとZenSetters

| 名称             | isGetter | isSetter | タイプ |
| -------------- | -------- | -------- | --- |
| chatColo**u**r | ✔        | ✔        | 文字列 |
| 名前             | ✔        |          | 文字列 |