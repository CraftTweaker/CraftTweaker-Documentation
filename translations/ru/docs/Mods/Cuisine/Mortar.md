# Мортар

## Сложение

```zenscript
Импортировать mods.cuisine.Mortar;

// Третий параметр 'step' означает "сколько раз вам нужно протолкнуть вредитель"
Mortar. dd(IItemStack[] inputs, IItemStack output, int step);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Удаление

```zenscript
import mods.cuisine.Mortar;

// Удаляем с ввода.
Mortar.remove(IItemStack[] input);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Удаляем по выводу.
Mortar.removeByOutput(IIngredient output);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Удаляем по идентификатору.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// Удаляем все!
Mortar.removeAll();
```