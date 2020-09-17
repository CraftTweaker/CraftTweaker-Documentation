# 肥料（肥料）

クラスパス: `mods.botanypots.Fertilizer`

## 使用

使用するには、 `import mods.botanypots.Fertilizer;` をスクリプトの先頭にあるクラスをインポートします。

## 肥料の作成

`Fertilizer.create(id, 食材, minTick, maxTick);`

- `id` &lt;string> 新しい肥料のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `材料` <[原料](/vanilla/api/items/IIngredient)> 肥料に使われるアイテム。
- `minTick` &lt;int> 肥料によって追加される最小ティック数。
- `maxTick` &lt;int> 肥料によって追加されるティックの最大量。

新しい肥料を作成します。 これらは作物をより早く栽培するために使用できます。

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## 肥料を削除する

`Fertilizer.remove(id);`

- `id` &lt;string> 肥料のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。

これは肥料を除去するために使用することができます。

```zenscript
Fertilizer.remove("botanypots:肥料/bone_meal");
```

## 肥料の効果を変更

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> 肥料のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `minTick` &lt;int> 肥料によって追加された新しい最小ティック数。
- `maxTick` &lt;int> 肥料によって追加される最大ティック数。

これは、肥料によって追加された成長ダニの範囲を変更します。

```zenscript
Fertilizer.setTicks("botanypots:肥料/bone_meal", 800, 900);
```

## 肥料材料の変更

`Fertilizer.setIngredient(id, 食材);`

- `id` &lt;string> 肥料のid。 これは、有効な `namespace:path` 形式でなければならない名前空間IDです。
- `材料` <[原料](/vanilla/api/items/IIngredient)> 肥料に使用される新しいアイテム。

肥料である成分アイテムを設定します。

```zenscript
Fertilizer.setIngredient("botanypots:肥料/bone_meal", <item:minecraft:sugar>);
```

## すべてのIDを取得

`Fertilizer.getAllIds();`

- 戻り値: &lt;string[]> これは実行された時点のすべての既知の肥料idの配列。

これにより、当時のすべての既知の肥料idの配列が得られます。

```zenscript
// 全てのIDをcrafttweaker.logファイルにログする
for followerId in Fertilizer.getAllIds() {
    println(failerId);
}
```

## すべての肥料を削除しています

これは現在登録されているすべての肥料を完全に取り除きます。 これは、スクリプトを介してゼロからすべてのデータを再作成したい場合に便利です。

```zenscript
Fertilizer.removeAll();
```