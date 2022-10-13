# 작물

클래스 경로: `mods.botanypots.Crop`

## Use

사용하려면 스크립트 시작 부분에 `import mods.botanypots.Crop;`을 써서 클래스를 임포트합니다.

## 작물 생성

`Crop.create(id, seed, display, tickRate, multiplier, categories);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 작물을 심는 데 쓰이는 아이템.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 작물을 보여주는 데 사용하는 블록.
- `tickRate` &lt;int> 작물의 생장 속도를 결정하는 인자 중 하나.
- `multiplier` &lt;float> 작물의 생장 속도를 결정하는 또다른 인자.
- `categories` &lt;string[]> 작물이 자랄 수 있는 토양 카테고리의 배열.

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
- `seed` <[IIngredient](/vanilla/api/items/IIngredient)> 작물을 심는 데 쓰이는 아이템.

작물을 심을 때 사용할 아이템을 설정합니다.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## 표시 블록 설정

`Crop.setDisplay(id, state);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `display` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 작물을 보여주는 데 사용하는 블록.

작물을 표시할 때 사용할 블록을 설정합니다.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## 틱 속도 설정

`Crop.setTickRate(id, tickRate);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `tickRate` &lt;int> 틱 속도. 작물의 생장 속도를 결정하는 인자 중 하나입니다.

작물의 틱 인자를 설정합니다.

```zenscript
Crop.setTickRate("botanypots:crop/wheat", 5000);
```

## 생장 계수 설정

`Crop.setGrowthModifier(id, multiplier);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `multiplier` &lt;float> 계수. 작물의 생장 속도를 결정하는 또다른 인자입니다.

작물의 생장 계수/인자를 설정합니다.

```zenscript
Crop.setGrowthMofieir("botanypots:crop/wheat", 1.8);
```

## 작물 카테고리 변경

작물에 부여된 카테고리를 변경합니다. 카테고리는 작물이 자라는 데 적합한 토양을 찾는 데 사용됩니다.

### 작물에 카테고리 추가

`Crop.addCategory(id, categoriesToAdd);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToAdd` &lt;string[]> 작물에 부여할 토양 카테고리의 배열입니다.

```zenscript
Crop.addCategory("botanypots:crop/wheat", ["stone", "snow"]);
```

### 작물에서 카테고리 제거

`Crop.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToRemove` &lt;string[]> 작물에서 제거할 카테고리의 배열입니다.

```zenscript
Crop.removeCategory("botanypots:crop/wheat", ["dirt"]);
```

### 작물에서 모든 카테고리 제거

`Crop.clearCategories(id);`

- `id` &lt;string> 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

```zenscript
Crop.clearCategories("botanypots:crop/wheat");
```

## 작물 드롭 아이템

### Adding Drops

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> 추가할 드롭 아이템의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `drop` <[IItemStack](/vanilla/api/items/IItemStack)> 드롭할 아이템.
- `chance` &lt;float> 드롭할 확률.
- `min` &lt;int> 최소 드롭 아이템 개수.
- `max` &lt;int> 최대 드롭 아이템 개수.

작물에서 아이템이 드롭될 확률을 부여합니다.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Removing Drops

`Crop.removeDrop(id, toRemove);`

- `id` &lt;string> 드롭 아이템을 제거할 작물의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `toRemove` <[IIngredient](/vanilla/api/items/IIngredient)> 제거할 아이템.

작물에서 해당 드롭 아이템을 제거합니다.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## 모든 ID 보기

`Crop.getAllIds();`

- 반환: &lt;string[]> 실행한 시점의 모든 작물 ID의 배열.

해당 시점의 모든 작물 ID의 배열을 제공해줍니다.

```zenscript
// Log all ids to the crafttweaker.log file
for cropId in Crop.getAllIds() {
    println(cropId);
}
```

## 모든 작물 제거

현존하는 모든 작물을 완전히 제거합니다. 스크립트를 통해 모든 데이터를 다시 만들고자 하는 경우 유용합니다.

```zenscript
Crop.removeAll();
```
