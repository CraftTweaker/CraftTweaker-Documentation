# Менеджеры рецептов

Менеджеры рецептов — это системы крафта, такие как верстак, печь или костер, поддерживающие стандартную систему наборо данных JSON  
Большинство менеджеров рецептов имеют аналогичные методы **удаления**, но разные методы для добавления рецептов.

Менеджеры рецептов — это то, что вы в основном будете использовать для взаимодействия с рецептами в игре, однако некоторые моды не используют систему наборов данных, и для них придется добавлять и отключать рецепты иным образом.

## Получение менеджера рецептов

Обычно к менеджерам рецептов обращаются через обработчик скобок (за исключением стандартных менеджеров рецептов, доступных через глобальное значение).  
Формат менеджера рецептов такой:

```zenscript
<recipetype:id_мода:имя>
```

Некоторые примеры:

```zenscript
<recipetype:minecraft:smoking> // Возвращает менеджер рецептов коптильни
<recipetype:botania:mana_infusion> // Возвращает менеджер рецептов наполнения маной Botania
<recipetype:thermal:pulverizer> // Возвращает менеджер рецептов в измельчителе из Thermal Expansion
```

Менеджеры стандартных рецептов особенны тем, что для них есть глобальные переменные, позволяющие ссылаться на них без обработчика скобок.

Менеджеры рецептов в обычной игре такие:
| Менеджер рецептов              | Обработчик скобок                               | Глобальная переменная |
| ------------------------------ | ----------------------------------------------- | --------------------- |
| Выплавка в плавильной печи     | `<recipetype:minecraft:blasting>`         | `blastFurnace`        |
| Готовка на костре              | `<recipetype:minecraft:campfire_cooking>` | `campfire`            |
| Крафт                          | `<recipetype:minecraft:crafting>`         | `craftingTable`       |
| Выплавка в обычной печи        | `<recipetype:minecraft:smelting>`         | `furnace`             |
| Использование кузнечного стола | `<recipetype:minecraft:smithing>`         | `smithing`            |
| Копчение                       | `<recipetype:minecraft:smoking>`          | `smoker`              |
| Камнерезание                   | `<recipetype:minecraft:stonecutting>`     | `stoneCutter`         |

На них можно ссылаться либо по обработчику скобок, либо через глобальную переменную. Например:

```zenscript
<recipetype:minecraft:blasting>.removeAll() // Удаляет все рецепты плавильной печи
```

Что равносильно следующему:

```zenscript
blastFurnace.removeAll() // Удаляет все рецепты плавильной печи
```

Глобальные переменные просто упрощают обращение к менеджерам рецептов.

Причина, почему не для всех менеджеров рецептов создаются глобальные переменные в том, что могут случиться конфликты, если разные моды добавят машины с одинаковым именем — дробилку, например.

## Методы

:::group{name=getRecipeByName}

Этот метод получает рецепт по имени и возвращает объект [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getRecipeByName(String name);
```

Можно применить его, чтобы получить ингредиенты рецепта и вывести `commandString` для каждого из них.

```zenscript
for ingredient in craftingTable.getRecipeByName("minecraft:arrow").ingredients {
    println(ingredient.commandString);
}
```
:::

:::group{name=getRecipesByOutput}

Этот метод получает список рецептов на основании его выхода и возвращает список объектов [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getRecipesByOutput(IIngredient name);
```

Можно использовать этот метод, чтобы получить ингредиенты всех рецептов с данным выходом и вывести  `commandString` для каждого.

```zenscript
for recipe in craftingTable.getRecipesByOutput(<item:minecraft:stick>) {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=getAllRecipes}

Этот метод получает список всех рецептов для данного менеджера рецептов и возвращает список объектов [Recipe](/vanilla/api/recipe/type/Recipe).

```zenscript
getAllRecipes();
```

Можно использовать этот метод, чтобы получить ингредиенты всех рецептов и вывести `commandString` для каждого:

```zenscript
for recipe in furnace.getAllRecipes() {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}
```
:::

:::group{name=remove}

Позволяет удалять рецепты из менеджера рецепта по выходному предмету.

```zenscript
remove(IItemStack output);
```

Пример использования — удаление рецепта палки в верстаке.

```zenscript
craftingTable.remove(<item:minecraft:stick>);
```

Еще пример — удаление выплавки алмаза из алмазной руды в печи:

```zenscript
furnace.remove(<item:minecraft:diamond>);
```
:::

:::group{name=removeByName}

Позволяет удалять рецепты из менеджера рецептов по имени рецепта.

```zenscript
removeByName(String name);
```

Пример использования — удаление рецепта стрелы в верстаке:

```zenscript
craftingTable.removeByName("minecraft:arrow");
```
:::

:::group{name=removeByModid}

This method allows you to remove recipes from this Recipe Manager based on the the recipe name's modid.  
There is an optional parameter that is used to exclude recipes from being removed.   
Note: The name given to the RecipeFilter is just the path of the recipe id.  
For example, if the recipe id is `minecraft:orange_wool`, the name given will be `orange_wool`. Еще пример — ID рецепта `id_мода:путь/имя`, именем будет только часть `путь/имя`.

```zenscript
removeByModid(String modid);

или

removeByModid(String modid, RecipeFilter exclude);
```

Пример использования — удаление всех рецептов из верстака на minecraft:

```zenscript
craftingTable.removeByModid("minecraft");
```

Еще пример — удаление всех рецептов на minecraft кроме рецепта оранжевой шерсти.

```zenscript
craftingTable.removeByModid("minecraft", (name as string) => {
    return name == "orange_wool";
});
```
:::

:::group{name=removeByRegex}

Позволяет удалять рецепты из менеджера рецептов, проверяя ID рецепта по регулярному выражению.

```zenscript
removeByRegex(String regex);
```

Пример использования — удаление всех рецептов, ID которых соответствует шаблону `.*wool.*` (то есть, все, которые содержат `wool` где угодно в названии).

```zenscript
craftingTable.removeByRegex(".*wool.*");
```
:::

:::group{name=removeAll}

Позволяет удалять все рецепты из менеджера рецептов.

```zenscript
removeAll(String regex);
```

Пример — удаление всех рецептов в плавильной печи.

```zenscript
blastFurnace.removeAll();
```
:::
