# Котел

Пакет котла используется для добавления/удаления рецептов котла. Обратите внимание, что если в конфигурации установлен котел `простой` , могут быть изготовлены только рецепты, использующие воду, но все еще будут показаны в JEI.

## Звонок

Вы можете вызвать пакет котлов с помощью `mods.inspirations.Cauldron`

## Жидкости

Вдохновение включает три типа рецептов с помощью жидкостей: один для преобразования предмета с помощью жидкости, для преобразования жидкости с помощью предмета, и единицы для добавления жидкости с помощью предмета. В то время как все обработчики принимают стек жидкости, только жидкий тип повлияет на рецепт. Вдохновляющие котлы используют ванильную систему из трех бутылок в котле, поэтому количество обрабатывается по другому параметру.

### Добавление жидкости

Добавляет рецепт для преобразования входного элемента в выходной элемент с помощью жидкости.

* Входящий элемент поддерживает размер стека, который требует определенного размера.
* Уровни определяют, сколько уровней потребляется рецептом. Поддерживает 0-3, по умолчанию 1
* Определяет кипячку, следует ли накладывать котел над котелой. Может быть правда требовать его, ложно, чтобы требовать не иметь огня, или null (по умолчанию), чтобы игнорировать его.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(IItemStack output, IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional boolean boiling);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Снятие жидкости

Удаляет из котла существующий жидкий рецепт.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Добавить преобразование жидкости

Добавляет рецепт, преобразующий жидкость в выходную жидкость, используя предмет.

* Входящий элемент поддерживает размер стека, который требует определенного размера.
* Максимальный уровень определяет максимальное количество жидкости, допустимое для этого преобразования. Используется для того, чтобы позволить рецептам иметь более дешевую версию, если котел содержит меньше жидкости.
* Определяет кипячку, следует ли накладывать котел над котелой. Может быть правда требовать его, ложно, чтобы требовать не иметь огня, или null (по умолчанию), чтобы игнорировать его.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Снятие жидкости трансформации

Удаляет из котела существующий рецепт преобразования жидкости. Вывод - `IIngredient` , но поддерживает только стек жидкости или подстановочную карту.

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Заполнить добавление рецепта

Добавляет рецепт, заполняющий котел предоставленной жидкостью.

* Входящий элемент поддерживает размер стека, который требует определенного размера.
* Уровни определяют, сколько рецепт заполняет котелон. По умолчанию 1, если не предоставлено.
* Контейнер определяет предмет, возвращаемый после выполнения этого рецепта. Если ничего не указано по умолчанию возвращать ничего.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional int levels, @Optional IItemStack);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Удаление рецепта заливки

Удаляет существующий рецепт заливки из котла.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient input, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Пивоварение и зелья

Вдохновение включает два типа рецептов зелий с помощью зелий: приготовление рецептов, которые превращают зелье из одного типа в другой, и рецепты зелий, которые меняют предмет с помощью зелья.

Поскольку рецепты используют `PotionType`вместо `Зелье`непосредственно, параметры зелья являются строками. Список всех видов зелий можно получить с помощью команды `/ct inspirations зелья`.

### Добавление пива

Добавляет рецепт, преобразующий входное зелье в выходное зелье, используя реагент.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(String output, String input, IIngredient reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Удаление пива

Удаляет существующий рецепт пива из котела. Как вход, так и вывод могут быть установлены в null для работы в качестве шаблона.

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Добавление рецепта зелья

Добавляет рецепт, преобразующий входной элемент в элемент, используя зелье.

* Уровни определяют, сколько уровней потребляется рецептом. Поддерживает 0-3, по умолчанию 1
* Определяет кипячку, следует ли накладывать котел над котелой. Может быть правда требовать его, ложно, чтобы требовать не иметь огня, или null (по умолчанию), чтобы игнорировать его.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String potion, @Optional int levels, @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Удаление рецепта зелья

Удаляет существующий рецепт зелий из котела. По умолчанию рецепты зелий не существуют, но аддоны могут добавить рецепт.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String potion);
```

## Краски

Вдохновение имеет только один тип рецепта краски, чтобы преобразовать предмет с помощью краски. Рецепты красок получают цвет струны, который представляет собой значение из `EnumDyeColor`. Чтобы получить список всех ценностей, приведена команда `/ct вдохновляющих красителей`.

### Добавление

Добавляет рецепт, преобразующий ввод в вывод, используя раскрашенную воду, потребляющую один уровень раскрашенной воды.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack, IIngredient input, String dye);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Удаление

Удаляет существующий рецепт краски из котела.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```