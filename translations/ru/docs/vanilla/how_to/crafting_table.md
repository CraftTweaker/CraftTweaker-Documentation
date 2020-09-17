# Верстак

## Типы рецептов

Есть три типа рецептов для столов для крафта:

- **Бесформенный:** Рецепт бесформенный - это рецепт, в котором исходные предметы не имеют значения.
- **Форма:** Рецепт формы - это рецепт, в котором точное положение предметов должно быть определено.
- **Форма зеркалированная:** зеркальный рецепт похож на рецепты формы, но зеркалирует рецепт вдоль горизонтальных или вертикальных топоров.

## Добавление рецепта

_При добавлении рецепта убедитесь, что имена рецептов уникальны!_

### Добавление рецептов Безграничных

`craftingTable.addShapeless(имя, выход, ингредиенты, функции);`

- `рецепт` &lt;строка>
- `вывести` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ингредиентов` <[ингредиентов](/vanilla/api/items/IIngredient)[]>
- `рецепт функции` (опционально) <[Рецепт FunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Добавляет [бесформенный](#recipe-types) рецепт за стол крафта. Так как рецепты [без формы](#recipe-types) игнорируют позицию входных элементов, порядок элементов при создании рецепта также не имеет значения.

[Неформальные](#recipe-types) рецепты могут иметь до 9 входов, но те, у которых 4 или меньше входов, также могут быть созданы в сетке инвентаря 2х2.

Рецепты столов также могут вывести более одного количества выводимого элемента. Это может быть достигнуто с помощью [IItemStack оператора умножения](/vanilla/api/items/IItemStack/#mul) на выходящем элементе.

```zenscript
raftingTable. ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Коктейль бесформенный рецепт может иметь до 9 входов
// Это также показывает, что можно использовать более чем один выход. В этом примере будет выведено 8 трав.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Смотрите [Использование функций рецепта](#using-recipe-functions) для примера использования функций рецепта._

### Добавление Формы и Форма зеркальных Рецептов

`craftingTable.addShaped(рецепт, выход, ингредиенты, рецептная функция);`

`craftingTable.addShapedMirrored(Рецепт, выход, ингредиенты, функция рецепта);`

- `рецепт` &lt;строка>
- `вывести` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ингредиентов` <[Ингредиент](/vanilla/api/items/IIngredient)[][]>
- `рецепт функции` (опционально) <[Рецепт FunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Добавляет [формы](#recipe-types) (или [зеркалируемых](#recipe-types), в зависимости от функции) рецепта к таблице создания. Порядок предметов при создании рецепта диктует положение каждого предмета в сетке крафта.

Вместо этого приготовление рецепта [в форме зеркалируемого](#recipe-types) рецепта позволяет игроку больше гибкости при добавлении предметов в сетку крафта.

Оба рецепта [формы](#recipe-types) и [образцов зеркальных](#recipe-types) могут быть сделаны для работы в сетке создания 2x2 (инвентарь) или 3x3.

Рецепты столов также могут вывести более одного количества выводимого элемента. Это может быть достигнуто с помощью [IItemStack оператора умножения](/vanilla/api/items/IItemStack/#mul) на выходящем элементе.

```zenscript
// Добавление рецепта в форме
craftingTable. ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Добавление рецепта в форме 2x2 (это также можно сделать как зеркальный)
верстака. ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Добавление зеркального рецепта в форме
craftingTable. ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Смотрите [Использование функций рецепта](#using-recipe-functions) для примера использования функций рецепта._

## Использование функций рецепта

Функция рецепта позволяет программно определить выход. Это может быть особенно полезно, когда вам нужны некоторые данные о вводе предмета, такие как повреждение предмета или другие данные NBT.

_Поскольку в форме и в форме зеркалируемых рецептов похожи, примеры будут включать только Формированные Рецепты. Вы можете рассматривать любой пример, используя `addShaped` , так же, как и `addShapedMirrored`._

### Использовать рецепт FunctionArray в рецепте без формы

`рецепт функции` <[Рецепт FunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(usualOut как IItemStack, inputs as IItemStack[]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `входов` <[IItemStack](/vanilla/api/items/IItemStack)[]> Массив входов заказал то же самое, что и в оригинальном рецепте

```zenscript
Импортируйте crafttweaker.api.item.IItemStack;

craftingTable. ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (обычно, как IItemStack, input as IItemStack[]) => {
    // Проверяет, имеет ли <item:minecraft:dirt> имя "totally real diamond block"
    if (input[0]. isplayName == "totally real diamond block") {
        // Возвращает <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Иначе, возвращать <item:minecraft:clay> с отображаемым именем "Алмаз"
    возврат <item:minecraft:clay>. etDisplayName("Алмаз");
});
```

### Использование рецепта FunctionMatrix в виде зеркального рецепта

`рецепт функции` <[Рецепт FunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut как IItemStack, inputs as IItemStack[][]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `входов` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Массив вводов заказал то же самое, что указано в оригинальном рецепте. Вход может быть найден путем определения строки, затем столбец (`входов[0][1]` , чтобы получить предмет в первой строке, второй столбец).

```zenscript
Импортируйте crafttweaker.api.item.IItemStack;

craftingTable. ddShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, inpuas IItemStack[][]) => {
        var counter = 0;
        // Проверяет if all <item:minecraft:clay_ball> имеет отображаемое имя "Алмаз"
        для строки {
            для рецепта в row {
                if (<item:minecraft:clay_ball>. atches(рецепт) && рецепт Item. isplayName == "Алмазные") {
                    // Если рецепт <item:minecraft:clay_ball> и имеет название "Алмаза" прибавить счетчик
                    счётчика ++;
                }
            }
        }

        // Если у нас 8 <item:minecraft:clay_ball> с именем "Алмаз"
        if (counter == 8) {
            if (input[1][1]. isplayName == "Special Diamond") {
                // If <item:minecraft:diamond> has a display name of "Special Diamond"
                // Return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Возвращает <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // Иначе возвращать <item:minecraft:clay> с отображаемым именем "Diamond Block"
        возвращает <item:minecraft:clay>. etDisplayName("Алмазный блок");
});
```

### Расширенное использование

#### Функции как переменная

Функции рецепта могут быть назначены переменной, позволяющей легко вызывать одну и ту же функцию для нескольких рецептов.

Безликость:

```zenscript
импорт crafttweaker.api.item ItemStack;

вар пример: ShapelessRecipeVarFunction как функция(обычно, как IItemStack, input as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(input[0]. isplayName == "totally real diamond block" ){
        return usualOut;
    }

    возвращает <item:minecraft:clay>. etDisplayName("Алмазы");
};

// вводим[0] exampleShapelessRecipeVarFunction будет <item:minecraft:dirt>
craftingTable. ddShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// Входы[0] в примере ShapelessRecipeVarFunction будет <item:minecraft:cobblestone>
craftingTable. ddShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

В форме/Зеркале:

```zenscript
импорт crafttweaker.api.item ItemStack;

var exampleShapedRecipeVarFunction как функция(обычно, как IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Проверяет, что все <item:minecraft:clay_ball> имеют отображаемое имя "Алмаз"
    для строки в входах {
        для recipeItem в row {
            if (<item:minecraft:clay_ball>. atches(рецепт) && рецепт. isplayName == "Алмаз") {
                // Если предмет рецепта <item:minecraft:clay_ball> и имеет название "Алмаз" прибавляет счетчик
                счетчика +;
            }
        }
    }

    // Если у нас есть 8 <item:minecraft:clay_ball> с именем "Алмаз"
    if (counter == 8) {
        if (input[1][1]. isplayName == "Special Diamond") {
            // If <item:minecraft:diamond> has a display name of "Special Diamond"
            // Return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Возвращает <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Иначе, возвращает <item:minecraft:clay> с отображаемым именем "Diamond Block"
    возвращает <item:minecraft:clay>. etDisplayName("Алмазный блок");
};

craftingTable. ddShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

верстальные. ddShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Удаление рецепта

### Удалить рецепт по имени

`craftingTable.removeByName(рецепт);`

- `рецепт` &lt;строка>

Удаляет рецепт, соответствующий указанному имени.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Удалить рецепты по выходу

`craftingTable.removeRecipe(выход);`

- `вывести` <[IItemStack](/vanilla/api/items/IItemStack)>

Удаляет все рецепты, в которых приведен результат, предоставленный [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Удалить рецепты по ID мода

`craftingTable.removeByModid(modId);`

- `modId` &lt;строка>

Удаляет все рецепты, добавленные указанным модом.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Исключить рецепты из удаления идентификатора мода

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;строка>
- `фильтр исключений` <<href="/vanilla/api/рецепт/RecipeFilter">Рецептный фильтр</a>>
  - `имя` &lt;строка> Имя проверяемого рецепта. _идентификатор мода не будет включен_

Удаляет все рецепты, добавленные указанным модом. Рецепты исключаются, если в результате фильтра исключений возвращается истинное имя рецепта.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Проверяет, соответствует ли имя рецепта "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Можно также исключить несколько рецептов. В качестве одного из способов можно сделать следующее:

```zenscript
// Массив имен рецептов как строк
var minecraftExclusions как string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

таблица крафта. emoveByModid("minecraft", (name) => {
    возврат имени в minecraftExclusions;
});
```

### Удалить рецепты по выражению

`craftingTable.removeByRegex(regex);`

- `регулярные` &lt;строка>

Удаляет все рецепты, которые соответствуют строке регулярного выражения.

```zenscript
// Удаляет такие рецепты, как "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", и "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Удалить все рецепты

`craftingTable.removeAll();`

Удаляет все рецепты таблиц крафта.

```zenscript
craftingTable.removeAll();
```
