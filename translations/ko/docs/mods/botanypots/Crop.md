# 작물

클래스 경로: `mods.botanypots.Crop`

## Use

사용하려면 스크립트 시작 부분에 `import mods.botanypots.Crop;`을 써서 클래스를 임포트합니다.

## 작물 생성

`Crop.create(id, seed, display, tickRate, categories);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 작물을 심는 데 쓰이는 아이템입니다.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 작물을 보여주는 데 사용하는 블록입니다.
- `tickRate` &lt;int> 작물의 생장 속도를 결정하는 인자 중 하나입니다.
- `categories` &lt;string[]> 작물이 자랄 수 있는 토양 카테고리의 배열입니다.

새 작물을 생성하고자 할 때 사용할 수 있습니다. 부쉈을 때의 아이템은 별도로 추가해야 한다는 것을 잊지 마시기 바랍니다.

```zenscript
Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## 작물 제거

`Crop.remove(id);`

- `id` &lt;string> 제거할 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

ID를 기반으로 작물을 제거합니다.

```zenscript
Crop.remove("botanypots:crop/wheat");
```

## 씨앗 아이템 설정

`Crop.setSeed(id, seed);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 작물을 심는 데 쓰이는 아이템입니다.

작물을 심을 때 사용할 아이템을 설정합니다.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## 표시 블록 설정

`Crop.setDisplay(id, state);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 작물을 보여주는 데 사용하는 블록입니다.

작물을 표시할 때 사용할 블록을 설정합니다.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Set Tick Rate

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `tickRate` &lt;int> The updated tick rate. One of the factors for how long a crop takes to grow.

Sets the crop tick factor.

```zenscript
Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## Changing Crop Categories

Changes the categories associated with the crop. Categories are used to match the valid soils to the crop.

### Add a Category to a Crop

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToAdd` &lt;string[]> An array of categories to associate with the crop.

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### Remove a Category From a Crop

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToRemove` &lt;string[]> An array of categories to dissociate with the crop.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### Clear All Categories From a Crop

`Crop.clearCategories(id);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## Crop Drops

### Adding Drops

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> The id of the crop to add a drop to. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `drop` <[IItemStack](/vanilla/api/items/IItemStack)> The item to drop.
- `chance` &lt;float> The chance it drops.
- `min` &lt;int> The min amount of that item to give.
- `max` &lt;int> The max amount of that item to give.

This adds a new potential drop to the crop.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Removing Drops

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> The id of the crop to remove a drop from. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> The ingredient to match against for removal

Removes any drops that have a matching item.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Getting All Ids

`Crop.getAllIds();`

- Returns: &lt;string[]> An array of all known crop ids at the time this is ran.

This will give you an array of all the known crop ids at the time.

```zenscript
// Log all ids to the crafttweaker.log file
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## Removing All Crops

This will completely remove all the crops currently registered. This is useful for if you want to recreate all the data from scratch through scripts.

```zenscript
Crop.removeAll();
```
