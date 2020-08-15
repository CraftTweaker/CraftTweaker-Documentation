# ミネラルミックス

## パッケージのインポート

何か問題(配列のキャストなど)が発生した場合は、パッケージをインポートする必要があるかもしれません。 申し訳ありませんよりも安全で、インポート `import mods.immysiveengineering.MineralMix;` を追加してください。

## 失敗のチャンス

オブジェクトのfailChance [ZenSetter/Getter] を使用して、Mineralmix のfailchance を取得および設定できます。

## 鉱物を入手

| 必須 | タイプ | データタイプ |
| -- | --- | ------ |
| 必須 | 名称  | 文字列    |

```zenscript
//例:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## 鉱石を追加

| 必須 | タイプ  | データタイプ |
| -- | ---- | ------ |
| 必須 | 鉱石   | 文字列    |
| 必須 | チャンス | 文字列    |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```

あなたはオレディクトの名前を使用する必要があります。

## 鉱石を削除

| 必須 | タイプ | データタイプ |
| -- | --- | ------ |
| 必須 | 鉱石  | 文字列    |

```zenscript
mineralMixObject.removeOre("oreIron");
```

## 失敗のチャンス ゲッター/セッター

### 例

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## 完全な例

```zenscript
//Example:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering.Excavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0.5);

//Print Initial Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 25%
Iron.failChance = 0.25;

//Print Out The Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 50%
Iron.failChance = 0.5;

//Print Final Fail Chance
print(Iron.failChance);
```