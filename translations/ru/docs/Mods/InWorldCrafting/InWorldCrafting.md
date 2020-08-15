# Примеры

Создает лаву, сбросив 4х ловушек в криотей.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Создает древесное дерево, бросив некоторые березовые доски в креостоте. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Создает бутылку с водой, сбросив стеклянную бутылку в воде, поглощает блок с источником воды.  
`модов. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Создать сталь 15%, когда слиток железа упал в мире, наносится взрывом.  
`модов. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Создаёт 8 палочек на 75% от времени, когда взрыв наносится пленки Acacia Plan. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Создайте блок из древесного угля, когда на 60 часов сожжено 4 бревен древесины. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Документация

## Примечание о ремесле

**Не добавляйте один и тот же ингредиент несколько раз, используйте `<ingredient> * count`. Это по причине.**  
Игра объединяет предметы поблизости в стеки, поэтому нахождение нескольких ингредиентов одного типа в одном BlockSpace происходит только тогда, когда первый EntityItem получает полный набор предметов, так что не случится, как вы ожидаете.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Гудуд

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Преобразование жидкости в предмет

импорт должен быть `mods.inworldcrafting.FluidToItem`

**Использование**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

Значение потребления по умолчанию для этого метода `истинно`, так что если вы не хотите, чтобы `inputItem` использовался при преобразовании жидкости, вы должны передать `false` в качестве 4-го параметра методу.

## Преобразование жидкости в жидкость

импорт должен быть `mods.inworldcrafting.FluidToFluid`

**Использование**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

Значение потребления по умолчанию для этого метода `истинно`, так что если вы не хотите, чтобы `inputItem` использовался при преобразовании жидкости, вы должны передать `false` в качестве 4-го параметра методу.

## Горящие предметы

импорт должен быть `mods.inworldcrafting.FireCrafting`

**Использование**  
`FireCrafting.addRecipe(IItemStack, inputIIngredient, @Optional int ticks);`

Количество тиков для создания вывода по умолчанию: `40` (2 секунды)

## Взрывающиеся предметы/блоки

импорт должен быть `mods.inworldcrafting.ExplosionCrafting`

### Взрывающиеся предметы

**Использование**  
`ExplosionCrafting.explodeItemRecipe(IItemStack, Ingredient inputItem, @Optional int survicechechance);`

Выживание задает вероятность того, что рецепт будет успешным. Значение по умолчанию `100`%

### Взрыв блоков

**Использование**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` должен быть `Блок` в его стеклянной форме. Он будет сравниваться с метаданными. `Предмет Появление` задает вероятность появления блока, когда блок разрушается взрывом. Значение по умолчанию `100`%