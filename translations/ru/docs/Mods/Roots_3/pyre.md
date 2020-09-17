### Класс

```zenscript
import mods.roots.Pyre;
```

#### Методы

```zenscript
void addRecipe(
  string name, // имя добавляемого рецепта; если заменить существующий рецепт, убедитесь в правильности имени
  вывода IItemStack, // вывод этого рецепта
  IIngredient[] входов // список пяти ингредиентов (не больше, не меньше)
);
```

* * *

```zenscript
void addRecipe(
  string name, // имя добавляемого рецепта; если заменить существующий рецепт, убедитесь в правильности имени
  вывода IItemStack, // вывод входов этого рецепта
  IIngredient[], // список пяти ингредиентов
  int xp // количество xp уровней, предоставляемых после создания
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // вывод рецепта для удаления
);
```

* * *

### Примеры

```zenscript
import mods.roots.Pyre;

// Удаляет рецепт stalicripe; обратите внимание, что количество не считается
// проверяя соответствие рецепта.
Pyre.removeRecipe(<roots:stalicripe>);

// Повторное добавление сталикрипа с использованием рецепта добавок, который не даёт XP,
// но с значительно большим выводом
пира. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Как и выше, но вознаграждение 30 уровней опыта (рассчитывается по уровню 0)
Pyre. ddRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Примечания

Чрезвычайно важно при замене рецептов, чтобы удостовериться в том, что название рецепта совпадает с тем, что Патчули правильно сообщает о правильном рецепте создания базовых предметов.

Для всех остальных, пожалуйста, используйте название описания того, что делает ваш рецепт.