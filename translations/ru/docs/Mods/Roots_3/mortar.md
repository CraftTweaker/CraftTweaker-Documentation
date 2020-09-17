### Класс

```zenscript
Импортировать mods.roots.Mortar;
```

#### Методы

```zenscript
void addRecipe(
  IItemStack, // вывод элемента этого рецепта
  IIngredient[] входов // массив ингредиентов, который либо 5 длинный, либо 1 длинный,
);
```

* * *

```zenscript
void changeSpell(
  string spellName, // название заклинания как в реестре заклинаний
  входов IIngredient[] // массив 5 предметов, являющихся новыми ингредиентами для рецепта
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // стек элементов, производимый рецептом
);
```

* * *

### Примеры

```zenscript
import mods.roots. ортар;

// Добавляет рецепт, который выводит порох из кремня
// Как рецепт имеет только один вход, он будет автоматически
// генерировать 5 рецептов, увеличивая количество входов и
// количество выходов соответственно.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Этот рецепт использует пять ингредиентов для создания одной кровати.
Mortar. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// Это удалит все рецепты, которые имеют корневую муку в выводе
// включая любые мультиингредиентные рецепты
Mortar. emoveRecipe(<roots:flour>);

// Это изменит рецепт заклинания для высадки рощи на
// Просто требуем пять частей сахара.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```