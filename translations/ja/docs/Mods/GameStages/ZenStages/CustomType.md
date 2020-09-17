# カスタムタイプ

カスタムタイプは、あなた自身の *カスタム* ものをステージに作成する新しい強力な方法です。 本質的にこれによってできるのは たとえば、たとえば、Minecraft や Stage からのイベントのブロックのリストをステージに表示して、プレイヤーの相互作用や破壊を防ぐことができます。 [イベントの使用](/Vanilla/Events/IEventManager/) CraftTweakerが提供します。 これにより、より多くのものをロックダウンすることができます。 追加のMODを必要とせずに、ゲーム内で完全なカスタム体験を作成します。 ZenStagesとCraftTweakerはかなりクールですね。

これはまだかなり新しいシステムであり、 ** にはいくつかのバグがあるかもしれません。 何か気付いた場合は、 [私たちのリポジトリ](https://github.com/DarkPacks/ZenStages/issues) に報告してください。調査できるようにしてください！

注: これは完全なカスタムタイプです。これは内部的には何もチェックされません。 [イベント](/Vanilla/Events/IEventManager/) を作成してリッスンし、 [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) で指定されたメソッドを呼び出してチェックを実行する必要があります。 ですから、種類に使う *スラッグ/名前* の名前は、何をするかを知るために、どこかでメモする必要があります。

注意: また、 **すべての** カスタムタイプに固有の名前を使用することは、改良された標準です。

## パッケージのインポート

`import mods.zenstages.type.CustomStageType;`

## 作成方法

カスタム型は、以下の方法で [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) を介して作成されます。

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager.initCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

カスタムタイプを作成したら、そのタイプを [ステージ](/Mods/GameStages/ZenStages/Stage/) に割り当てることができます。 以下を呼び出すことによって。

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## カスタムタイプへのチェックを実行する方法

このメソッドでは、ステージを型に設定する必要があります。 上記の方法を使用します。 それ以外の場合は null を返します。

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

このメソッドは、ステージに *ステージ* をするカスタムタイプを必要としません。

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```