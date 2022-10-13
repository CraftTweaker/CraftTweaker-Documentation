# 비료

클래스 경로: `mods.botanypots.Fertilizer`

## Use

사용하려면 스크립트 시작 부분에 `import mods.botanypots.Fertilizer;`을 써서 클래스를 임포트합니다.

## 비료 생성

`Fertilizer.create(id, ingredient, minTick, maxTick);`

- `id` &lt;string> 새 비료의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> 비료로 쓰일 아이템.
- `minTick` &lt;int> 비료에 의해 추가될 최소 틱.
- `maxTick` &lt;int> 비료에 의해 추가될 최대 틱.

새 비료를 생성합니다. 작물을 빠르게 자라도록 하는 데 사용할 수 있습니다.

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## 비료 제거

`Fertilizer.remove(id);`

- `id` &lt;string> 비료의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.

새 비료를 제거하고자 할 때 사용할 수 있습니다.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## 비료 틱 변경

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;string> 비료의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `minTick` &lt;int> 새로 설정할 비료에 의해 추가될 최소 틱.
- `maxTick` &lt;int> 새로 설정할 비료에 의해 추가될 최대 틱.

비료에 의해 추가될 틱의 범위를 변경합니다.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## 비료 재료 변경

`Fertilizer.setIngredient(id, ingredient);`

- `id` &lt;string> 비료의 ID. 유효한 `namespace:path` 형식의 이름공간이 붙은 ID여야 합니다.
- `ingredient` <[IIngredient](/vanilla/api/items/IIngredient)> 비료로 쓰일 새로운 아이템.

비료로 쓰일 아이템을 설정합니다.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## 모든 ID 보기

`Fertilizer.getAllIds();`

- 반환: &lt;string[]> 실행한 시점의 모든 비료 ID의 배열.

해당 시점의 모든 비료 ID의 배열을 제공해줍니다.

```zenscript
// Log all ids to the crafttweaker.log file
for fertilizerId in Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## 모든 비료 제거

현존하는 모든 비료를 완전히 제거합니다. 스크립트를 통해 모든 데이터를 다시 만들고자 하는 경우 유용합니다.

```zenscript
Fertilizer.removeAll();
```