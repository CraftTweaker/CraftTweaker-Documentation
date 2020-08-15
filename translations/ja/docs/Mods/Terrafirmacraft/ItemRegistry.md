# アイテムレジストリ

## パッケージ
```zenscript
// Imports ItemRegistry methods into your script
import mods.terrafirmacraft.ItemRegistry;アイテムレジストリ;
```

## アイテムサイズを登録
- アイテムのサイズと重量を登録する これはスタックの保持量を変更します。
- サイズ [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- ウエイト[VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient input, String size, String weight);
```

## アイテム熱を登録
- アイテムの熱能力を登録し、このアイテムが鍛造可能な場合（例：anvilで使用可能）。
- 熱容量は、アイテムがどの程度の速さで冷却/加熱するかを決定します。 鍛錬鉄は0.35です。
- 溶けた温度は、アイテムが溶けている温度です。 鍛錬鉄は1535ブリリアントホワイト、ブロンズは950オレンジです。 完全な参照については、 [加熱温度](/Mods/Terrafirmacraft/HeatingTemperatures) を参照してください。
```zenscript
ItemRegistry.registerItemHeat(IIngredient入力, float heat Capacity, float meltTemp, bool forgeable);
```

## アイテムメタルを登録する
- アイテムをメタルアイテムとして登録します。 これは自動的に加熱と鍛造機能を追加することに注意してください。 canMeltがfalseの場合、このアイテムは直接出力を負いません（鉄鉱石にはブルーメリー/溶鉱炉が必要です）
- 登録済みの金属インゴットアイテムは、ツールの有効な入力として自動的に登録されていません（例：registeredによって登録された他のMODからのスチールインゴット）MetalItemメソッドはTFC鋼ツルハシ頭に自動的には実行できません）
```zenscript
ItemRegistry.registerItemMetal(IIngredient input, String metal, int unit, bool canMelt);
```

## 食料を登録する
- 食品統計の登録 (TFC食品では動作しません) これは、既存の値よりも優先されます。 ディケイを0に設定すると、崩壊が止まります。
```zenscript
ItemRegistry.registerFood(IIngredient input, int hunger, float water, float saturation, float decay, float grain, float vegeline, float fruit, float meit, float dairy);
```

## アーマーを登録する
- アーマー統計を登録する
```zenscript
ItemRegistry.registerArmor(IIngredient入力, float crushingModifier, float parisingModifier, float slashingModifier);
```

## 燃料を登録する
- アイテムを火ピット、鍛造、咲くための燃料として登録する
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, float 温度, bool forgeFuel, bool bloomeryFuel);
```
