# DropTableBuilder

DropTableBuilder используется для создания строк с рудами и образцами, которые поддерживают сбрасывание нескольких предметов одновременно, стеки предметов, содержащие более одного предмета, и взвешенные дроби.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.DropTableBuilder;`

## Методы

Эти методы позволяют создавать и модифицировать карандашную таблицу. Все методы конструктора возвращают выполняемый конструктор, что позволяет использовать методы цепочки.

| Название метода    | Описание                                                                             |
| ------------------ | ------------------------------------------------------------------------------------ |
| newSlot()          | Создает новую таблицу, если запустить статически или добавляет новый слот в таблицу. |
| addItem()          | Добавляет указанный предмет к текущей ячейке паутины.                                |
| включить Fortune() | Позволяет текущему слоту извлекать пользу из зачарок.                                |

### Использование:

#### `newSlot()`

DropTableBuilder.newSlot() создаст новый конструктор. \<builder\>.newSlot() завершит текущий слот и запустит новый.

#### `addItem(String itemStr[, int weight [, int count]])`

`элемент` может быть именем предмета как \<mod\>:\<item\>:\<meta\>, руда запись словаря типа oredict:\<entry\>, или слово пустое. `Вес` управляет, насколько вероятно, что предмет выбросит с помощью формулы \<item weight\>/\<sum of item weights within slot\>. По умолчанию 1 если пропущено. `count` это количество выпадающих предметов, если выбрано. По умолчанию 1 если пропущено.

#### `включить Fortune()`

Для слотов с включенными способностями будет выбран ряд дополнительных предметов от слота до используемого уровня состояния. Совпадает с обычным поведением удачи на слотах, у которых всего 1 предмет.

## Примеры использования строителя

### Создание таблицы для переноса

```zenscript
var complextable = DropTableBuilder.newSlot()
                    .addItem("minecraft:diamond", 1, 2)
                    .addItem("minecraft:coal", 9)
                    .enableFortune()
                    .newSlot()
                    .addItem("oredict:stone")
                    .newSlot()
                    .addItem("minecraft:cobblestone")
                    .addItem("empty");
```

Эта таблица понизит 2 алмаза (10%) или 1 уголь (90%) на счастье, 1 камень (100%) и 1 булыжник (50%).

```zenscript
var lapistable = DropTableBuilder.newSlot()
                   . ddItem("minecraft:lapis_lazuli", 1, 4)
                   . ddItem("minecraft:lapis_lazuli", 1, 5)
                   ddItem("minecraft:lapis_lazuli", 1, 6)
                   . ddItem("minecraft:lapis_lazuli", 1, 7)
                   . ddItem("minecraft:lapis_lazuli", 1, 8)
                   .enableFortune();
```

This drop table mimics vanilla lapis, dropping 4-8 lapis and benefit from fortune.

### Использование таблицы папок

Строители используются для присвоения их значениям "отбрасывается". Поскольку значения данных принимают только строки, конструктор будет транслироваться в виде строки, используя метод toString.

```zenscript
var lapisData = MaterialSystem.getMaterialBuilder()
                  .setColor(12345678).setName("Fake Lapis").setColor(12345678).build()
                  .registerPart("ore").getData();
var complexData = MaterialSystem.getMaterialBuilder()
                    .setColor(12345678).setName("Complex Ore").setColor(12345678).build()
                    .registerPart("ore").getData();
lapisDataValue("drops",lapistable);
complexData.addDataValue("drops",complextable+lapistable+lapistable);
```

Когда объединяются 2 строителя, создается новый стол с слотами из обеих таблиц.