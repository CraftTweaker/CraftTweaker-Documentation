# ZenStager

Этот класс является главным обработчиком для создания новых [этапов](/Mods/GameStages/ZenStages/Stage/), , то вы можете построить для того, чтобы рассказать игре, чтобы начать отлаживать то, что вы поставили. Он поставляется с методами, позволяющими легко интегрироваться с другими модами, использующими [GameStages API](https://minecraft.curseforge.com/projects/game-stages) , а также некоторые пользовательские твики для того, чтобы сделать жизнь модпаков намного проще.

Более подробную информацию и последний исходник для класса [вы можете найти здесь](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Импорт пакета

ZenStager : `импорт mods.zenstages.ZenStager;`

Этап *(Рекомендуется также импортировать)* : `импорт mods.zenstages.Stage;`

## Методы

### Создать этап

Создать и вернуть новый [этап](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Когда вы создали свою стадию, вы должны создать статический/глобальный файл, который содержит следующие параметры: затем вы можете получить доступ к Stage на других скриптах/классах.

**Примечание: У вас нет `initStage` и `статического` создания в том же скрипте. Из-за ограничений и других проблем, `initStage` будет вызываться каждый раз, когда вы ссылаетесь на статического члена. Так что сохраните инт и статическое творение раздельно**

```zenscript
Импортируйте mods.zenstages.ZenStager;

статический TestStage = ZenStager.getStage("test"); // Имя как тот, который вы только что создали.
```

### Способы помощи

Получить [этап](/Mods/GameStages/ZenStages/Stage/) *(Бросок нуля, если не найден)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Получить карту [стадий](/Mods/GameStages/ZenStages/Stage/) которые созданы.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap как этап[string] = ZenStager.getStageMap();
```

Получить карту распределенных жидкостей.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap как ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Методы разбивки

Добавить имя пакета. Для установки требуется [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/). Это следует той же логике, что и [здесь](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```

Добавить имя пакета. Для установки требуется [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/). Это следует той же логике, что и [здесь](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Получи стадию ингредиента, если он поставлен, он вернет этап [](/Mods/GameStages/ZenStages/Stage/) или аннулировать, если не найден.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(IIngredient ingredient);
var StickStage = ZenStager.getIngredientStage(<minecraft:stick>);
```

Стадия пачки жидкости, если она поставлена, вернет этап [](/Mods/GameStages/ZenStages/Stage/) или аннулировать, если не найдена.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage = ZenStager.getLiquidStage(<liquid:water>);
```

Получить имя этапа, если он поставлен, он вернет этап [](/Mods/GameStages/ZenStages/Stage/) или аннулировать, если не найден. Для установки требуется [Рецептов](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

Стадия контейнера вернёт [Этап](/Mods/GameStages/ZenStages/Stage/) или null, если не найдена. Для установки требуется [Рецептов](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

Перейдите на стадии пакета, если он вернёт этап [](/Mods/GameStages/ZenStages/Stage/) или null, если он не найден. Для установки требуется [Рецептов](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as Stage = ZenStager.getPackageStages("appeng");
```

Достигните этапа измерения, если он поставлен, он вернет этап [](/Mods/GameStages/ZenStages/Stage/) или нулевой, если не найден. Требуется установка [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/).

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage = ZenStager.getDimensionStage(-1);
```

Сделайте стадию мобов, если она будет поставлена на стадию [](/Mods/GameStages/ZenStages/Stage/) или аннулирована, если не будет найдена. Требуется установка [MobStages](/Mods/GameStages/MobStages/MobStages/).

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Достигните этапа Материала TiC, если он будет размещен, он вернет этап [](/Mods/GameStages/ZenStages/Stage/) или аннулировать, если не найден. Требуется установка [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/).

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(string material);
var MobStage = ZenStager.getTiCMaterialStage("bronze");
```

### Проверьте, если что-то откладывается

Поддерживаемые типы:

- контейнер
- измерение
- ингредиент
- моб
- mod
- mulitblock
- руда
- пакет
- имя рецепта
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my. wesome.container");
ZenStager.isStaged("mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimension", -1);
```

### Отладка

Вызов этого метода позволит проверить мод на [стадиях,](/Mods/GameStages/ZenStages/Stage/) которые вы создали и что поставили. Чтобы узнать, ошибочно ли вы *поставили* что-нибудь более одного раза. Если обнаружено, они вошли в файл `crafttweaker.log`. Расскажите вам, что дублируется и какие этапы он находится. Это идеальный метод/инструмент для использования перед выпуском обновлений к модпаку или просто для разработки модпака.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Стадии сборки

Это **важно** для вызова после того, как вы завершили добавление записей в свои стадии. Это призывает все моды к реально заявленным записям. Если этот метод не будет запущен, ничего не будет оглушено!

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```