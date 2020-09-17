# Создание нуклеар: Переработано

Все рецепты включают в себя пять наборов информаций: входы предметов, жидкие входы элементов, выходные материалы жидкости и дополнительная информация. первые четыре ясно представляют собой ингредиенты и продукты, вовлеченные в рецепт, и дополнительная информация содержит такие данные, как время обработки и питание машин, время истощения основы, тепло, эффективность, критичность и уровень излучения твердого топлива деления и т.д.

Все части рецепта просто перечислены в методе - внутренний код NC будет касаться разделения его на пять категорий и упаковки информации в рецепт.


## Шанс ингредиентов

Элемент и жидкие выходы могут иметь дополнительную информацию к ним - конкретно, информацию, которая может случайно отображать стек размера чем-то больше. Эта дополнительная информация приведена с использованием "шансовых ингредиентов NC".

Размер стека, производимого в каждом процессе, случайным образом присваивается из распределения биномиальных значений, указанного вероятностью . Процент и размер стека ингредиентов играют роли соответственно с вероятностью и количеством попыток. Можно также указать минимальный размер стека - без этого минимальный размер стека просто 0.

Для ChanceFluidIngredients, также должна быть указана "разница в стеке", которая определяет разницу в размере возможных стеков (для ChanceItemIngredients, это эффективно 1). For example, a ChanceFluidIngredient for an ingredient of size 500, with a stack difference of 150 and minimum stack size of 50, will produce 50, 200, 350 or 500 millibuckets of the fluid.

**Примечание: `ChanceItemIngredient` и `ChanceFluidIngredient` рассчитывается как `IIngredient` для целей рецептов в NuclearCraft: Переработано**

### Шанс Ингредиента

#### Создание

```zenscript
mods.nuclearcraft.ChanceItemIngredient.create(IIngredient ingredient, int chancePercent, @Optional int minStackSize);
```

#### Примеры

```zenscript
ChanceItemIngredient.create(<minecraft:coal>*2, 25);
ChanceIngredient.create(<ore:dustGlowstone>*3, 60, 2);
```

#### Дополнительные методы

```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getMinStackSize();
```

### Ингридиент Чансфлюида
Они могут использоваться везде, где используются обычные `ILiquidStack`.

#### Создание
```zenscript
mods.nuclearcraft.ChanceFluidIngredient.create(IIngredient ingredient, int chancePercent, int stackDiff, @Optional int minStackSize);
```

#### Примеры
```zenscript
ChanceFluidIngredient.create(<liquid:water>*1500, 35, 300);
Шанс FluidIngredient.create(<liquid:oil>*1000, 80, 200, 400);
```

#### Дополнительные методы
```zenscript
IIngredient getInternalIngredient();
int getChancePercent();
int getStackDiff();
int getMinStackSize();
```

## Добавления рецептов
Методы рецепта будут указывать `ввод элемента` для ввода. <br/> Методы рецептов будут задавать `элемент` для вывода элементов. <br/> Методы рецепта будут определять `fluidInput` для Fluid Inputs. <br/> Методы Рецепта будут определять `fluidOutput` для выходов жидкости. <br/> Методы рецепта будут содержать `блокаВвод` для ввода блоков. <br/> Методы рецептов будут содержать `blockOutput` для вывода блоков. <br/> **Примечание: `blockInput` и `blockOutput` должен быть `IItemStack`/`Ingredient` версий блоков**

### Item Inputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `null`: null

### Item Outputs
`IItemStack`: `<minecraft:gunpowder>` * 4 <br/> `IOreDictEntry`: `<ore:ingotIron>` * 2 <br/> `ChanceItemIngredient`: `<ore:gemDiamond>` * 5, 75 <br/> `null`: null

### Входы жидкости
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `null`: null

### Fluid Outputs
`ILiquidStack`: `<liquid:lava>` * 1500 <br/> `ChanceLiquidStack` : `<liquid:water>` * 2000, 40, 250, 500 <br/> `null`: null

### Блокировочные входы
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

### Блокировать выход
`IItemStack`: `<minecraft:dirt>` * 4 <br/> `IOreDictEntry`: `<ore:blockIron>` * 2 <br/> `null`: null

## Удаление рецептов
При задании удаления рецепта все, что требуется для указания всех входных или выходных ингредиентов. Данные о шансах ингредиентов не требуются. Опять же, предметы должны прийти первым, а за ними следуют жидкости.

Вы также можете удалить все типы рецептов - для этого просто используйте метод `removeAllRecipes()`.
