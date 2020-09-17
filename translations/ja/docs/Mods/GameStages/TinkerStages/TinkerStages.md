# ティンカーステージ

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 ティンカーステージでは、Modパックの作成者が設定するカスタム進行システムにモジュールを組み立てることができます。 詳細はこちら [をご覧ください](https://minecraft.curseforge.com/projects/tinkerstages)

## 一般的な制限

ツール製作をステージに制限します。 この方法を使用して複数のステージが追加される場合、プレイヤーは少なくとも1つ必要になります。

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("one");
```

部品の置き換えをステージに制限します。 この方法を使用して複数のステージが追加される場合、プレイヤーは少なくとも1つ必要になります。

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

部品の建物をステージに制限します。 この方法を使用して複数のステージが追加される場合、プレイヤーは少なくとも1つ必要になります。

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

ステージへの修飾子の適用を制限します。 この方法を使用して複数のステージが追加される場合、プレイヤーは少なくとも1つ必要になります。

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## 特定の制限

特定のツールタイプがツールステーションで作成されないようにします。 たとえば、特定のステージまでハンマーの製作を制限できます。

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

マテリアルがプレイヤーによって使用されないようにします。 製作、部品の構築、およびツールの使用を含む。

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

特定の修飾子がツールや使用されるのを防ぎます。

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_mos");
```

## スクリプト例

```zenscript
//一般制限
//ステージのロックが解除されていない限り、すべてのツールを無効にします。
mods.TinkerStages.addGeneralCraftingStage("one");

//ステージがunlcokedでない限り、すべてのツール交換を防ぎます。
mods.TinkerStages.addGeneralPartReplacingStage("one");

//ステージがロックされていない限り、すべてのパーツの構築を表示します。
mods.TinkerStages.addGeneralPartBuildingStage("one");

//ステージがロックされていない限り、ツール修飾子の適用を防ぎます。
mods.TinkerStages.addGeneralModifierStage("one");


//SPECIFICIONS
//ステージがロック解除されていない限りピッケルをクラフトするのを防ぎます。
mods.TinkerStages.addToolTypeStage("two", "tconstruct:pickaxe");

//マテリアルが使用されないようにします。 
mods.TinkerStages.addMaterialStage("2", "stone");

//修飾子が適用されないようにします。
mods.TinkerStages.addModifierStage("two", "mending_mos");
```