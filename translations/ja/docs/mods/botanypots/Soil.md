# Soils

クラスパス: `mods.botanypots.Soil`

## 使用

使用するには、スクリプトの先頭に `import mods.botanypots.Soil;` を使用してクラスをインポートします。

## 新しい土壌の作成

`Soil.create(id, 食材, displayState, tickRate, categories);`

- `id` &lt;string> 新しい土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)> 土壌を鍋に入れるために使用するアイテム/ブロックを決定するために使用する成分。
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 鉢の土壌に表示するブロック状態。
- `growthModifier` &lt;float> 作物が成長するまでの時間を変更します。 1f = インスタント成長。 0 = 正常な成長。 -1f = 成長しない。 0.15 = 15% 高速、-0.15 = 15% 低速。
- `categories` &lt;string[]> 新しい土壌に関連するカテゴリの配列。

ボタニーポットでプレイヤーが使用できる新しい土壌エントリを作成します。

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 0, ["rocky"]);
```

## 土壌を削除する

`Soil.remove(id);`

- `id` &lt;string> 取り除く土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。

ゲームのデータから土壌を削除します。

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## 土壌成長調整装置の変更

`Soil.setGrowthModifier(id, tickRate);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `growthModifier` &lt;float> 作物が成長するまでの時間を変更します。 1f = インスタント成長。 0 = 正常な成長。 -1f = 成長しない。 0.15 = 15% 高速、-0.15 = 15% 低速。

土壌の成長修飾子を変更します。

```zenscript
Soil.setGrowthModifier("botanypots:soil/grass", 0.15);
```

## 土壌成分を変える

`Soil.setIngredient(id, 食材);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)> 土壌を鍋に入れるために使用するアイテム/ブロックを決定するために使用する成分。

植物鉢に土壌を入れるために使用されるアイテムを変更します。

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## 土壌表示の変更

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 鉢の土壌に表示するブロック状態。

土に表示されるブロックを変更します。

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## 土壌カテゴリの変更

土壌に関連するカテゴリを変更します。 これらは有効な土壌に作物をマッチさせるために使用されます。

### 土壌にカテゴリを追加

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `categoriesToAdd` &lt;string[]> 土壌に関連付けるカテゴリの配列。

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### 土壌からカテゴリを削除

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `categoriesToRemove` &lt;string[]> 土壌と解離するカテゴリーの配列。

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### 土壌からすべてのカテゴリをクリア

`Soil.clearCategories(id);`

- `id` &lt;string> 土壌のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。

```zenscript
Soil.clearCategories("botanypots:土壌/農地");
```

## すべてのIDを取得

`Soil.getAllIds();`

- 戻り値: &lt;string[]> これは実行された時点で既知の土壌IDの配列。

これにより、その時点で既知の土壌idの配列が得られます。

```zenscript
// Log all id to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## すべての土壌を削除

これは現在登録されているすべての土壌を完全に削除します。 これは、スクリプトを介してゼロからすべてのデータを再作成したい場合に便利です。

```zenscript
Soil.removeAll();
```
