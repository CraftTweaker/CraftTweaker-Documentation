### Класс

```zenscript
импортировать mods.roots.Ritual;
```

#### Методы

```zenscript
void modifyRitual(
  string name, // название ритуала, чьи ингредиенты вы хотите изменить
  входы IIngredient[] // список пяти ингредиентов (не более, не меньше)
);
```

* * *

### Примеры

```zenscript
импортируем mods.roots.Ritual;

// Изменяем ингредиенты, необходимые для выполнения ритуала windwall
ритуала. odifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```