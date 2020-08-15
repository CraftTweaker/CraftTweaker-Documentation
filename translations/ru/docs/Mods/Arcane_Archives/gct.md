### Класс

```zenscript
import mods.arcanearchives.GCT;
```

#### Методы

```zenscript
void addRecipe(
  string name, // название рецепта
  IItemStack, // вывод как элемент
  IIngredient[] входов // массив ингредиентов
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // удаляемый элемент (количество должно совпадать)
);
```

* * *

```zenscript
void replaceRecipe(
  строковое имя, // имя рецепта (должно уже существовать)
  вывод IItemStack, // вывод как элемент
  IIngredient[] входов // массив ингредиентов
);
```

* * *

### Примеры

```zenscript
импорт mods.arcanearchives.GCT;

// Удаляем рецепт сияющей пыли
GCT.removeRecipe(<arcanearchives:radiant_dust>*2);

// Добавляет новый рецепт для сияющей пыли
GCT. ddRecipe("radiant_dust", <arcanearchives:radiant_dust>*2, [<minecraft:flint>, <arcanearchives:raw_quartz>]);

// Заменяет рецепт сияющего кварца в форме без нарушения экрана GCT
GCT. eplaceRecipe("shaped_quartz", <arcanearchives:shaped_quartz>, [<arcanearchives:raw_quartz>*10]);
```