# クロップ

クラスパス: `mods.botanypots.cript`

## 使用

使用するには、スクリプトの先頭に `import mods.botanypots.Crop;` を使用してクラスをインポートします。

## トリミングを作成

`Crop.create(id, seed, display, tickRate, categories);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 作物を植えるために使用されるアイテム。
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> トリミング時に表示するブロック。
- `tickRate` &lt;int> 作物が成長するまでにかかる時間の要因の1つ。
- `categories` &lt;string[]> この作物は栽培できる土壌カテゴリーの配列。

これは、新しい作物を作成するために使用できます。 ドロップは別途追加する必要があることに留意してください。

```zenscript
Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## 切り抜きを削除

`Crop.remove(id);`

- `id` &lt;string> 削除するクロップのID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。

ID に基づいて作物を削除します。

```zenscript
Crop.remove("botanypots:crop/wheat");
```

## シードアイテムを設定

`Crop.setSeed(id, seed);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 作物を植えるために使用されるアイテム。

作物の植え付けに使用するアイテムを設定します。

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## ディスプレイブロックを設定

`Crop.setDisplay(id, state);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> トリミング時に表示するブロック。

トリミング用にレンダリングされたブロックを設定します。

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## ティックレートの設定

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `tickRate` &lt;int> 更新されたティックレート。 作物が成長するのにかかる時間の要因の一つ。

トリミング係数を設定します。

```zenscript
Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## カテゴリのクロップを変更する

トリミングに関連付けられたカテゴリを変更します。 カテゴリは、有効な土壌と作物を一致させるために使用されます。

### カテゴリをトリミングに追加

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `categoriesToAdd` &lt;string[]> トリミングに関連付けるカテゴリの配列。

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### カテゴリを切り抜きから削除

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `categoriesToRemove` &lt;string[]> 切り口と切り離すカテゴリーの配列。

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### すべてのカテゴリをトリミングからクリア

`Crop.clearCategories(id);`

- `id` &lt;string> 作物のID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## クロップドロップ

### ドロップを追加中

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> ドロップ先のクロップのID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `ドロップ` <[IItemStack](/vanilla/api/items/IItemStack)> ドロップするアイテム。
- `chance` &lt;float> 確率が低下します。
- `min` &lt;int> 与えるアイテムの最小量。
- `max` &lt;int> 与えるアイテムの最大数。

これにより、作物に新しい潜在的なドロップが追加されます。

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### ドロップを削除

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> ドロップから削除するクロップのID。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> 除去に適合する材料

一致するアイテムを持つドロップを削除します。

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## すべてのIDを取得

`Crop.getAllIds();`

- 戻り値: &lt;string[]> 実行時の既知の作物IDの配列。

これにより、その時点で既知の作物IDの配列が得られます。

```zenscript
// Log all id to the crafttweaker.log file
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## すべてのクロップを削除しています

これは現在登録されているすべての作物を完全に削除します。 これは、スクリプトを介してゼロからすべてのデータを再作成したい場合に便利です。

```zenscript
Crop.removeAll();
```
