# Простой Проход

Здравствуйте, добро пожаловать здесь. Так вы пытаетесь выйти ContentTweaker для 1.15, да?

Иногда я обычно сокращаю ContentTweaker с CoT, чтобы избавить меня от нескольких писем (это уже больше автоматизма от Discord), так что оставайтесь со мной, хорошо? Затем, во-первых, я рекомендую вам также установить режим диспетчера ресурсов, так что блоки/элементы, которые можно добавить текстуры и модели для блоков и элементов позднее.

ContentTweaker постарается создать файлы моделей, а также простое нетекстурное изображение в папке ресурсов, до тех пор, пока обнаружен мод [Загрузчик](https://www.curseforge.com/minecraft/mc-mods/the-loader) или [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) установлен. Если ни один из них не установлен, то будет распечатано только сообщение в журнал, что текстура не будет для вас создана. В какой-то момент также можно отключить генерацию текстур, но не в сборке curren Alpha/Beta.

Для генерируемых текстур CoT не переопределяет файлы, если они уже существуют, , так что вы можете просто заменить существующие файлы своими собственными, и CoT не отменит эти изменения.


А теперь давай к нему, не так ли? Я приведу примеры для некоторых простых блоков и предметов. Если вы хотите видеть все эти классы поддержки, вы можете найти экспорт API в папке API прямо под этим файлом на панели навигации!

## Loader ContentTweaker
Поскольку CraftTweaker в 1.14+ будет загружаться во время работы сервера, нам нужен способ загрузить скрипты где-то еще. Вот для этого `#loader contenttweaker` !  
Просто поместите его где-то в (предпочтительно вверх) ваш файл, и вам нужно идти.  
Запомните **скрипты crafttweaker не допускаются** в `#loader contenttweaker`, поскольку они запускаются в различных фазах laod цикла!


## Блоки

Для создания блоков вам нужно создать объект [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) .  
После того, как у вас есть что вы можете установить простые свойства в конструкторском шаблоне.

Затем вы можете напрямую вызвать на него `build(имя)` и выполнить вызов, если вы хотите создать базовый блок.  
Или вы можете специализироваться на конструкторе, используя `с типом` и предоставить специализированный класс конструктора, Например, [Строительные ступеньки](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) или [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Проверьте свои соответствующие страницы, чтобы увидеть, какие дополнительные возможности они предлагают. Имейте в виду, что когда вы делаете вызов withType, не происходит возврата, поэтому установите все основные свойства перед этим вызовом.

Помните, что вы делаете, в конце цепочки **вам нужно `build(имя)` call**, так как в противном случае ничего не случится!

Достаточно говорить, вы хотите пример копирования/вставки, вы?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;


//Простейший способ, использует blockamterial IRON
new BlockBuilder()
    //Будет делегировать Базовому Builder
    . uild("generic_block");


//Устанавливает другой блок материала.
новый BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


Тип колонны в основном совпадает с логами, одной текстурой сверху/снизу и одной для сторон.
//Можно поворачивать по всем осям, как и бревна.
//Имена текстур по умолчанию будут "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Лестницы.
//Имеет 3 Текстуры, сверху, нижние стороны, по умолчанию они будут "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("лестница_noarg");
```


## Предметы

For items you more or less do the same, but this time you need an [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
You can again, either use a `build(name)` directly, or switch to a specialized version using `withType`.  
At the time of this writing there only exists [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool), though.

Помните, что вы делаете, в конце цепочки **вам нужно `build(имя)` call**, так как в противном случае ничего не случится!

Достаточно говорить, вы хотите пример копирования/вставки, вы?
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//Самый простой способ создания элементов.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//С настройками
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize и MaxDamage противоречат друг другу, поэтому используйте только 1
    . uild("other_item");


//Если вы хотите использовать инструменты, то вам нужно задать тип.
//С момента установки типа вы переключаете контексты, так что другие методы больше не будут доступны.
//Это значит, что вам нужно установить прочность и _раньше_ вызова с вводом ввода.
новый ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //Уровень сбора урожая осей = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //Лопаточный урожай 3 уровня и уничтожить скорость 4,0
    . uild("my_tool");



//Если вы хотите повредить инструмент, вы также можете воспользоваться инструментом типа
новый ItemBuilder()
    . ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withDurabilityCostAttack(1) //По умолчанию: 2
    .build("my_mace");

```

## Имена
Итак, как бы вы хотели добавить необходимые имена?  
Для этого вам нужен lang файл.  
На момент написания CoT еще не создал этого для ya, так что вам нужно будет создать его самостоятельно.  
В вашем наборе ресурсов найдите папку `assets/contenttweaker` .  
Там создайте папку `lang` , если она еще не существует, и создайте файл с именем `ru_us. сын` там.  
Я рекомендую всегда начинаться с en_us, 1, так как это то, что игра вернется назад, если она не сможет найти название для другого языка. После этого вы можете повторить это и с другими кодами языка.

Там вам придется создать карту ключевого значения для ваших записей. Ключи, также называемые ключами перевода, или в более ранних версиях делокализованное имя, зависят от имени используемого блока/предмета, и они будут выглядеть как
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Для значения, вы можете установить там имя предмета. Если вы не уверены в синтаксисе, проверьте пример ниже, или попробуйте JSON Validator, если у вас есть синтаксис вниз.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Generic Item",
  "item.contenttweaker.generic_item_2": "Generic Item the 2nd",
  "item.contenttweaker.generic_item_3": "Generic Item the charmed one"
}
```