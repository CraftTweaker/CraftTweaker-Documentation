# 抽出チャンバー

## パッケージ
```zenscript
import mods.calculator.extractionChamber;
```

## メソッド

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** 入力。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** outputs.

## 加算
```zenscript
extractionChamber.addRecipe(IIngredient入力, IIngredient出力1, IIngredient出力2);
```

## 削除
```zenscript
extractionChamber.removeRecipe(IIngredient出力, IIngredient出力2);
```