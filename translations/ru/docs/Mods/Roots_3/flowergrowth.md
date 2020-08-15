### Класс

```zenscript
import mods.roots.FlowerGrowth;
```

#### Методы

```zenscript
void removeRecipe(
  string name // Имя рецепта, который вы хотите удалить
);
```

* * *

```zenscript
void addRecipeBlockState(
  строковое имя, // Имя рецепта, который вы добавляете
  состояние IBlockState // Состояние блока цветка
);
```

* * *

```zenscript
void addRecipeBlock(
  строковое имя, // Имя рецепта, который вы добавляете
  блок IBlock, // Блок цветка, размещаемый
  int meta // Мета состояния цветного блока
);
```

* * *

### Примеры

```zenscript
import mods.roots.FlowerGrowth;

// Удаляем рецепт по умолчанию для dandelion
FlowerGrowth.removeRecipe("dandelion");

// Добавляет белый цветок Botania, используя состояние блока
Цветок Growth. ddRecipeBlockState("mystical_white_flower", <blockstate:botania:flower:color=white>);

// Добавляет цветок Ботании, используя блок + meta
FlowerGrowth.addRecipeBlock("mystical_green_flower", <botania:flower>.asBlock(), 2);
```

### Примечания

В настоящее время не тестируется с двойными цветами.