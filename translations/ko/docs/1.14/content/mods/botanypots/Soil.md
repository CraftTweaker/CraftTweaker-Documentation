# 토양

클래스 경로: `mods.botanypots.Soil`

## Use

사용하려면 스크립트 시작 부분에 `import mods.botanypots.Soil;`을 써서 클래스를 임포트합니다.

## 새 토양 생성

`Soil.create(id, ingredient, displayState, tickRate, categories);`

- `id` &lt;string> 새 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> 화분에 토양을 넣는 데 사용되는 아이템이나 블록.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 화분 속 토양을 표시하는 블록의 블록 상태.
- `tickRate` &lt;int> 토양의 틱 속도.
- `categories` &lt;string[]> 새 토양에 부여할 카테고리의 배열.

플레이어가 화분에 쓸 수 있는 새 토양 아이템을 만듭니다.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## 토양 제거

`Soil.remove(id);`

- `id` &lt;string> 제거할 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

게임 데이터에서 토양을 제거합니다.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## 토양 틱 속도 변경

`Soil.setTicks(id, tickRate);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `tickRate` &lt;int> 토양의 새 틱 속도.

주어진 토양의 틱 속도를 바꿉니다.

```zenscript
Soil.setTicks("botanypots:soil/grass", 1300);
```

## 토양 재료 변경

`Soil.setIngredient(id, ingredient);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> 화분에 토양을 넣는 데 사용되는 아이템이나 블록.

화분에 토양을 넣을 때 사용할 아이템을 변경합니다.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## 토양 모양 변경

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> 화분 속 토양을 표시하는 블록의 블록 상태.

토양으로 표시되는 블록의 모양을 바꿉니다.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## 토양 카테고리 변경

토양에 할당된 카테고리를 바꿉니다. 카테고리는 작물과 유효한 토양을 대응시키는 데 사용됩니다.

### 토양에 카테고리 추가

`Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToAdd` &lt;string[]> 토양에 부여할 카테고리의 배열입니다.

```zenscript
Soil.addCategory("botanypots:soil/soul_sand", ["nether"]);
```

### 토양에서 카테고리 제거

`Soil.removeCategory(id, categoriesToRemove);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `categoriesToRemove` &lt;string[]> 토양에서 제거할 카테고리의 배열입니다.

```zenscript
Soil.removeCategory("botanypots:soil/soul_sand", ["soul_sand"]);
```

### 토양에서 모든 카테고리 제거

`Soil.clearCategories(id);`

- `id` &lt;string> 토양의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

```zenscript
Soil.clearCategories("botanypots:soil/farmland");
```

## 모든 ID 보기

`Soil.getAllIds();`

- 반환: &lt;string[]> 실행한 시점의 모든 토양 ID의 배열.

해당 시점의 모든 토양 ID의 배열을 제공해줍니다.

```zenscript
// Log all ids to the crafttweaker.log file
for soilId in Soil.getAllIds() {
    println(soilId);
}
```

## 모든 토양 제거

현존하는 모든 토양을 완전히 제거합니다. 스크립트를 통해 모든 데이터를 다시 만들고자 하는 경우 유용합니다.

```zenscript
Soil.removeAll();
```
