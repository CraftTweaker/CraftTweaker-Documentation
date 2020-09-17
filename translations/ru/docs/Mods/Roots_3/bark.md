### Класс

```zenscript
импортировать mods.roots.Bark;
```

#### Методы

```zenscript
void addRecipe(
  string name, // название рецепта
  IItemStack woodLog, // эквивалент itemstack деревянного лога, сломанного
  кора IItemStack // itemstack of the type of bark this log produces (including stack count)
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack bark // предметный стек типа коры для удаления (исключая размер стека)
);
```

* * *

### Примеры

```zenscript
Импортируйте mods.roots.Bark;

// Выпускаем 2 песка из блока дыни, сломанного ножом.
Bark.addRecipe("дын", <minecraft:melon_block>, <minecraft:sand>*2);

// Удаляет кору дикого дерева из списка по умолчанию
Bark.removeRecipe(<roots:bark_wildwood>);
```