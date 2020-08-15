### Класс

```zenscript
импорт mods.roots.RunicShears;
```

#### Методы

```zenscript
void addRecipe(
  имя строки, // имя создаваемого рецепта
  IItemStack outputDrop, // вывод элемента получен путем выполнения замещения
  IItemStackBlock, // блок (как itemstack), заменяющий блок, взаимодействующий при прошивке
  IItemStack inputBlock, // блок, который должен быть вырезан
  IItemStack jeiDisplayItem // элемент, который должен быть отображен в JEI для этого рецепта
);
```

* * *

```zenscript
void addEntityRecipe(
  строковое имя, // имя рецепта для shearing
  IItemStack outputDrop, // элемент, который выбрасывается при сбрасывании указанной сущности
  IEntityDefinition сущности, // сущность, которая должна быть вырублена для получения int перезарядки
  int: количество тиков (секунд, умноженных на 20), оно занимает до тех пор, пока сущность не может быть сбита снова
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // вывод элемента, который вы хотите удалить
);
```

* * *

### Примеры

```zenscript
import mods.roots. "юникеры";

// Создаёт рецепт, получающий из красных кирпичей Незера
, а затем преобразовывает кирпичи в обычные кирпичи Незера
RunicShears. ddRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Создаёт рецепт, который получает яйца от цыплят через 2 минуты перезарядки
RunicShears. ddEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Удаляет все рецепты (оба блока & ), которые дают кожу
RunicShears. emoveRecipe(<roots:fey_leather>);
```

### Примечания

Note that the `removeRecipe` function will attempt to remove any recipe (both runic shearing of blocks and of entities) that matches the desired output.