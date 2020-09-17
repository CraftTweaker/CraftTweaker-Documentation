# CTAspectStack

CTAspectStack は [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) であり、スタックが作られるアスペクト数を示す量と組み合わせています。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import thaumcraft.aspect.CTAspectStack;`

## そのようなオブジェクトを取得しています

CTAspectStack オブジェクトは [CTAspectStack Bracket Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/) オブジェクトから取得できます。

```zenscript
val アスペクト = <aspect:ignis>;
```

## ZenGetters

| 名称 | タイプ                                                       |
| -- | --------------------------------------------------------- |
| 金額 | int                                                       |
| 内部 | [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## 金額の設定

```zenscript
//これらは同じことを行います。両方とも新しい CTAspectStack
val アスペクト = <aspect:ignis> * 10;

val アスペクト1 = <aspect:ignis>.setAmount(10);
```