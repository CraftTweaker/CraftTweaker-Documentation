### Класс

```zenscript
import mods.roots.Fey;
```

#### Методы

```zenscript
void addRecipe(
  string name, // название рецепта; если заменить существующий рецепт, обязательно используйте одно и то же имя, чтобы обеспечить преемственность Patchouli
  выход IItemStack, // предметный стек, созданный входом этого рецепта
  IIngredient[] // массив IIngredients, составляющий рецепт; должен содержать 5 элементов

```

* * *

```zenscript
void addRecipe(
  string name,          // the name of the recipe; if replacing an existing recipe, be sure to use the same name to ensure Patchouli continuity
  IItemStack output,    // the itemstack produced by this recipe
  IIngredient[] inputs, // an array of IIngredients that make up the recipe; must contain 5 items
  int xp                // the amount of xp (in levels) to reward the player for crafting this recipe
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // элемент, производимый по рецепту, который вы хотите удалить
);
```

* * *

### Примеры

```zenscript
import mods.roots.Fey;

// Добавляет рецепт для TNT с помощью 4 пороха и красной шерсти
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Добавляет приведенный выше рецепт, но также даёт игроку 6 уровней (от 0-6 относительно) каждый раз, когда он создаётся
Fey. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Удаляет рецепт живого топора
Fey. emoveRecipe(<roots:living_axe>);

// Добавляет другой рецепт для живого топора, используя одно и то же имя, чтобы убедиться, что он появился в Patchouli. По умолчанию все имена рецептов создания Fey совпадают с именем реестра.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Примечания

Важно для Patchouli непрерывности, если вы удалите рецепт по умолчанию (например `living_axe`), заменить его другим рецептом и дать этому рецепту имя `"living_axe"` если вы хотите, чтобы Patchouli правильно отображал новый рецепт.