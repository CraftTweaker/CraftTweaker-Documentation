# IItemStack

Объект IItemStack состоит из [определения предмета](/Vanilla/Items/IItemDefinition/), значения метаданных и NBT.  
Другими словами, он ссылается на предмет или блок.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.item.IItemStack;`

## Вызов IItemStack

Есть несколько методов, как получить IItemStack:

* С помощью [обработчика скобок](/Vanilla/Brackets/Bracket_Item/) `<minecraft:apple>`
* Используя метод `makeStack()` на объекте [IItemDefinition](/Vanilla/Items/IItemDefinition/) `<minecraft:stone>.definition.makeStack(0)`
* Используя стек `` получить объект [IEntityDrop](/Vanilla/Entities/IEntityDrop/)
* Используя `первый` получить на [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

## Calling an IItemStack[] or a IItemStack List

Если вы вызываете эти функции, то скорее всего вы будете повторять их через результирующие списки/массивы

* Использование метода `элементов` на [IIngredient](/Vanilla/Variable_Types/IIngredient/) возвращает список IItemStack: `<ore:ingotGold>.items`
* Используя метод `itemArray` на [IIngredient](/Vanilla/Variable_Types/IIngredient/) возвращает IItemStack[]: `<ore:ingotGold>.itemArray`
* Используя метод `элементов` на объекте [IMod](/Vanilla/Game/Mods/#imod) возвращает IItemStack[]: `loadedMods["minecraft"].items`

## Функции

Так что же мы можем сделать с ним сейчас?

### Наследование от IIngredient

IItemStack расширяет [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
означает, что все функциональности, доступные для [IIngredient](/Vanilla/Variable_Types/IIngredient/) объектов, также применимы к IItemStacks. <details><summary>Задуманные методы</summary> 

* stack.mark
* stack.amount
* стоп.элементы
* массив stack.itemray
* stack.жидкости
* stack.commandString
* стек | otherIngredient
* stack.or(otherIngredient)
* stack.transform([трансформатор](/Vanilla/Items/Item_Transformers/))
* stack.transformNew([трансформатор](/Vanilla/Items/Item_Transformers/))
* stack.only([условия](/Vanilla/Items/Item_Conditions/))
* stack.marked(mark)
* stack.matches(item)
* stack.matchesExact(item)
* stack.matches(liquid)
* стек содержит ингредиент
* stack.applyTransform(стол, плеер)
* stack.hasTransformers()</details>

### Геттеры/сеттеры

Можете прочитать, как их использовать [здесь](/UsingThisWiki/). Также, можете проверить примеры ниже.

| Геттер/метод             | Сеттер/метод | Тип                                                          |
| ------------------------ | ------------ | ------------------------------------------------------------ |
| definition               |              | [IItemDefinition](/Vanilla/Items/IItemDefinition/)           |
| name                     |              | string                                                       |
| displayName              | displayName  | string                                                       |
| maxStackSize             | maxStackSize | int                                                          |
| hardness                 | hardness     | float                                                        |
| damage                   |              | int                                                          |
| maxDamage                | maxDamage    | int                                                          |
| hasTag                   |              | bool                                                         |
| tag                      | withTag(tag) | [IData](/Vanilla/Data/IData/)                                |
| ores                     |              | Список<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)\>   |
| toolClasses              |              | List<string\>                                               |
| itemEnchantability       |              | int                                                          |
| containerItem            |              | IItemStack                                                   |
| hasContainerItem         |              | bool                                                         |
| repairCost               | repairCost   | int                                                          |
| canEditBlocks            |              | bool                                                         |
| isOnItemFrame            |              | bool                                                         |
| isEnchantable            |              | bool                                                         |
| isEnchanted              |              | bool                                                         |
| isDamaged                |              | bool                                                         |
| isDamageable             |              | bool                                                         |
| блок-istemBlock          |              | бул (если содержащийся элемент является блоком)              |
| укладка                  |              | bool                                                         |
| Платеж isBeacon          |              | bool                                                         |
| имеет эффект             |              | bool                                                         |
| hasDisplayName           |              | bool                                                         |
| метаданные               |              | int                                                          |
| имеет подтипы            |              | bool                                                         |
| isEmpty                  |              | bool                                                         |
| время сгорания           |              | int                                                          |
| полоса прочности         |              | bool                                                         |
| имеет Настраиваемое Лицо |              | bool                                                         |
| чары                     |              | Список<[Зачарование](/Vanilla/Enchantments/IEnchantment/)\> |
| совпадающий Тег Точно    |              | bool                                                         |

#### Количество

| Вызов метода                   | Возвращает                                                  | Типы параметров |
| ------------------------------ | ----------------------------------------------------------- | --------------- |
| `stack.anyAmount()`            | Новый IItemStack с измененным свойством                     |                 |
| `stack.amount(int amount)`     | Новый IItemStack с измененным свойством                     | int             |
| `stack.withAmount(int amount)` | Новый IItemStack с измененным свойством                     | int             |
| `stack *  amount`              | Новый IItemStack с измененным свойством                     | int             |
| `stack.splitStack(int amount)` | Разделяет IItemStack. Старый будет соответственно уменьшен. | int             |

#### Вес

| Вызов метода                  | Возвращает                                             | Типы параметров    |
| ----------------------------- | ------------------------------------------------------ | ------------------ |
| `stack.percent(float chance)` | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (100 = 100%) |
| `stack.weight(float chance)`  | [WeightedItemStack](/Vanilla/Items/WeightedItemStack/) | float (1 = 100%)   |

#### Урон

| Вызов метода                                | Возвращает                              | Типы параметров                            |
| ------------------------------------------- | --------------------------------------- | ------------------------------------------ |
| `stack.anyDamage()`                         | Новый IItemStack с измененным свойством |                                            |
| `stack.withDamage(int damage)`              | Новый IItemStack с измененным свойством | int                                        |
| `stack.damageItem(сумма, сущность объекта)` | void                                    | int, [IEntity](/Vanilla/Entities/IEntity/) |

#### Теги

| Вызов метода                                     | Возвращает                              | Типы параметров                     |
| ------------------------------------------------ | --------------------------------------- | ----------------------------------- |
| `stack.withEmtpyTag()`                           | Новый IItemStack с измененным свойством |                                     |
| `stack.withTag(IData тег)`                       | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/)       |
| `stack.withTag(IData tag, bool matchTagExact)`   | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/), bool |
| `stack.removeTag(String name)`                   | Новый IItemStack с измененным свойством | string                              |
| `stack.updateTag(тег IDat)`                      | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/)       |
| `stack.updateTag(IData тег, bool matchTagExact)` | Новый IItemStack с измененным свойством | [IData](/Vanilla/Data/IData/), bool |

#### Блоки литья

| Вызов метода      | Возвращает                                      |
| ----------------- | ----------------------------------------------- |
| `stack.asBlock()` | Новый объект [IBlock](/Vanilla/Blocks/IBlock/). |
| `стек как IBlock` | Новый объект [IBlock](/Vanilla/Blocks/IBlock/). |

#### Ярость/отображение имени

| Вызов метода                        | Возвращает                                                                                                                | Типы параметров                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `stack.withDisplayName(String имя)` | Новый IItemStack с измененным свойством. В отличие от набора отображаемого имени, это относится только к одному элементу. | строка (поддерживает цветовые коды с помощью "§")   |
| `stack.withLore(tring[] лот)`       | Новый IItemStack с измененным свойством.                                                                                  | строка[] (поддерживает цветовые коды с помощью "§") |
| `stack.clearCustomName()`           | void                                                                                                                      |                                                     |

#### Чары

| Вызов метода                                                       | Возвращает | Типы параметров                                                         |
| ------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------- |
| `stack.canApplyAtplyCraftingTable(IEnchantDefinition зачарование)` | Удар.      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| `Костюм Зачарований (Зачарование зачарования)`                     | void       | [IEnchantment](/Vanilla/Enchantments/IEnchantment/)                     |

#### canItem...

| Вызов метода                                       | Возвращает                                                       | Типы параметров                                       |
| -------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| `stack.canPlaceOn(IBlockDefinition блок)`          | Бул, который указывает, может ли предмет быть размещен на блоке. | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canDestroy(блок IBlockDefinition)`          | Бул, который указывает, может ли предмет уничтожить блок.        | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| `stack.canHarvestBlock(блок IBlockState)`          | Бул, который указывает, может ли предмет собирать блок.          | [IBlockState](/Vanilla/Blocks/IBlockState/)           |
| `stack.getStrengthAgainstBlock(IBlockState block)` | Поглощение, представляющее прочность предмета против блока.      | [IBlockState](/Vanilla/Blocks/IBlockState/)           |

#### create IEntityItem

| Вызов метода                                                 | Возвращает                                                                                                  | Типы параметров                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `stack.createEntityItem(IWorld world, int x, int y, int z);` | Новый [IEntityItem](/Vanilla/Entities/IEntityItem/) , соответствующий только что созданному предмету в мире | [IWorld](/Vanilla/World/IWorld/), int, int, int                          |
| `stack.createEntityItem(IWorld world, IBlockPos pos);`       | Новый [IEntityItem](/Vanilla/Entities/IEntityItem/) , соответствующий только что созданному предмету в мире | [IWorld](/Vanilla/World/IWorld/), [IBlockPos](/Vanilla/World/IBlockPos/) |

## Преобразователи элементов и условия

Вы можете найти как использовать их либо на странице [Ингредиентов](/Vanilla/Variable_Types/IIngredient/) или в их записях:  
[Условия предмета](/Vanilla/Items/Item_Conditions/)  
[Преобразователи предметов](/Vanilla/Items/Item_Transformers/)

## Примеры

#### Отображаемое имя

Глобально (переводит элемент в новое имя).

```zenscript
val apple = <minecraft:apple>;

//распечатывает "Apple"
print(apple.displayName);

//Устанавливает яблоки имя в "Tomato"
яблок. isplayName = "Tomato";

//Выводит "Tomato"
print(apple.displayName);
```

Локально (только этот элемент).

```zenscript
<minecraft:coal>.withDisplayName("Черное золото");
```

#### Лора

`<minecraft:coal>.withLore(["Эта функция","требуется а","string[]"]);`

#### Максимальный размер стека

Максимальный размер стека — это количество предметов в одном стеке, например, размер стека ваты — 64 и только 16 ведров.

```zenscript
val apple = <minecraft:apple>;
val bucket = <minecraft:bucket>;

//печатает 64
(яблоко. xStackSize);

//Устанавливает максимальный размер стека яблок в 32
apple.maxStackSize = 32;

//выводит 32
print(яблок. xStackSize);

//Устанавливает максимальный размер стека яблоков в максимальный размер стека
apple.maxStackSize = bucket.maxStackSize;

//печатает 16
print(apple.maxStackSize);
```

#### Твердость

Твердость - сколько времени занимает разрыв упомянутого блока. Работает только в том случае, если объект относится к блоку.

```zenscript
val grass = <minecraft:grass>;

//Выводит 1.0
print(трава);

//Устанавливает жесткость травы до 10.0
травы = 10.0;

//Выводит 10.0
print(твердость трава);
```

#### Урон

Урон по предметам, которые не могут быть повреждены, равен 0.

```zenscript
val pick = <minecraft:diamond_pickaxe>;

//Печать 1561
печати (выбрать. xDamage);

//Устанавливает максимальный урон алмазной кирке 256
кирки maxDamage = 256;

//печатает 256
print(pick. axDamage);



//Урон не имеет значения, используется в рецептах
<minecraft:iron_pickaxe>.anyDamage();

//С данным уроном
<minecraft:iron_pickaxe>.withDamage(122);
```

#### Тег

Тег является объектом [IData](/Vanilla/Data/IData/) .  
Если предмет не содержит тега, он вернет пустой тег, не нулево.

```zenscript
//создаёт яблоко с заданным тегом
//Удаляет существующие теги
<minecraft:apple>. ithTag({Unbreakable: 1});

//создаёт яблоко с emtpy тегом
<minecraft:apple>. ithEmptyTag();

//удаляет тег по имени
элемента. emoveTag("Имя тэга");

//обновить существующий тэг
//Если тэг не переопределяет существующий тэг, они останутся постоянными.
item.updateTag({Unbreakable: 1});
```

#### Жидкость

Возвращает жидкость, содержащуюся в одном предмете (если несколько) или нулевую, если предмет не является контейнером.  
возвращает объект [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) или null.

```zenscript
val lav = <minecraft:lava_bucket>;
print(lav.liquid.name);
```

#### Количество

Сколько здесь яблок?

```zenscript
<minecraft:apple>. nyAmount();

//1 Apple
val apple = <minecraft:apple>;

//2 яблоки
val moreApples = яблоко * 2;

//3 Яблоки
val evenMoreApples = <minecraft:apple> * 3;
```

#### Вес

Возвращает [взвешенный ItemStack](/Vanilla/Items/WeightedItemStack/) с заданным процентом.

```zenscript
val apple = <minecraft:apple>;

//Создает весомый стек с 100-процентным шансом
вара яблочного яблока = яблоко % 100;

//Имеет то же самое, что и выше
апплета = яблоко. восемьдесят (1.0);
```

#### Ores

Возвращает список [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) , относящийся к этому элементу.

```zenscript
<minecraft:apple>.ores;
```

#### Разливка в IBlock

Вы можете использовать IItemStack в [IBlock](/Vanilla/Blocks/IBlock/), до тех пор, пока вы ссылаетесь на блок, в противном случае бросок будет выброшен исключение.

```zenscript
<minecraft:dirt>.asBlock();
<minecraft:dirt> в качестве crafttweaker.block.IBlock;
```

Вы также можете проверить, содержит ли IItemStack и может ли он быть преобразован:

<pre><code class="zenscript:">&lt;minecraft:dirt&gt;.isItemBlock; // true
&lt;minecraft:stick&gt;.isItemBlock; // false
</code></pre>

#### Свойства питания

Вы можете проверить, является ли IItemStack продуктом и какие его свойства еды.  
Может не работать для каждого модифицированного еды!

```zenscript
<minecraft:apple>.isFood d; //true
<minecraft:apple>.saturation; //0.3
<minecraft:apple>.healAmount; //4
```