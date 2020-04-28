# Commands

CraftTweaker добавляет команды для помощи в написании скриптов, они созданы для сокращения времени разработки.

Префикс для всех комманд: `/crafttweaker` или `/ct`

Также Вы можете использовать эти алиасы: `/minetweaker` или `/mt`

Этот список можно отобразить в игре, выполнив:

`/crafttweaker help`

или

`/ct help`

# Список комманд

## Биомы

Использование:

`/crafttweaker biomes`

`/ct biomes`

Описание:

Выводит список всех существующих в игре биомов.

## BiomeTypes

Использование:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Описание:

Перечисляет все виды биомов(biomeTypes) в игре.

## Читатель блоков

Использование:

`/crafttweaker blockinfo`

`/ct blockinfo`

Описание:

Включает/выключает читатель блоков. В этом режиме ПКМ по блоку отобразит Вам его имя, метаданные и(при возможности) информацию о нем как о TileEntity.

## Блоки

Использование:

`/crafttweaker blocks`

`/ct blocks`

Описание:

Записывает лист всех блоков в файл crafttweaker.log.

## Баги

Использование:

`/crafttweaker bugs`

`/ct bugs`

Описание:

Открывает баг-трекер в Вашем браузере.

## Конфликты

Использование:

`/crafttweaker conflict`

`/ct conflict`

Описание:

Выводит список всех конфликтующих рецептов для верстака в файл crafttweaker.log.  
Заметьте, эта функция работает исключительно для КЛИЕНТА с модом JEI!

## Дискорд

Использование:

`/crafttweaker discord`

`/ct discord`

Описание:

Открывает браузер со ссылкой на [сервер Discord](https://www.discord.blamejared.com).

## Документация

Использование:

`/crafttweaker docs`

`/ct docs`

Описание:

Открывает этот сайт в вашем браузере (идентично `/ct wiki`).

## DumpZs

Использование:

`/crafttweaker dumpzs`

`/ct dumpzs`

Описание:

Outputs a ZenScript dump to a crafttweaker_dump folder within your minecraft directory as HTML file.  
You can use one or more dump targets that will be executed consecutively (if you provide a target twice it will run twice).  
The targets can be found using auto-complete (tab key).  
By default `log`, `html` and `json` are registered as targets.  
This will include all registered Bracket Handlers, ZenTypes, Global Functions, ZenExpansions an all Registered Packages including their methods.  
Note that not all of these can be used from within the scripts!

## Сущности

Использование:

`/crafttweaker entities`

`/ct entities`

Описание:

Записывает список всех существующих сущностей в файл crafttweaker.log.

## Выдать предмет

Использование:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Описание:

Выдает предмет игроку с помощью CrT's Bracket handler синтакса.  
С помощью `.withTag()` можно выдать предмет с тегом.  
Заметьте, что этот парсер довольно прост и может помочь не во всех случаях!

## Рука

Использование:

`/crafttweaker hand`

`/ct hand`

Описание:

Выводит имя предмета, который Вы держите, в чат.

Также копирует его в буфер обмена и учитывает вхождения в словарь руд.

## Инвентарь

Использование:

`/crafttweaker inventory`

`/ct inventory`

Описание:

Выводит список предметов в Вашем инвентаре в файл crafttweaker.log.

## JeiCategories

Использование:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Описание:

Выводит список категорий JEI в файл crafttweaker.log.  
Мод JEI для этого должен быть установлен(неожиданно)!

## Json

Использование:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Описание:

Выводит в чат nbt предмета в руке как JSON.  
Этот формат отличается от IData форматирования, которое использует CraftTweaker.  
Нажмите для него, чтобы скопировать его в буфер обмена.  
You can also provide the `escaped` argument to automatically escape the resulting string.

## Жидкости

Использование:

`/crafttweaker liquids`

`/ct liquids`

Описание:

Записывает список всех жидкостей в файл crafttweaker.log.

## Логи

Использование:

`/crafttweaker log`

`/ct log`

Описание:

Отправляет ссылку на файл crafttweaker.log.

## Моды

Использование:

`/crafttweaker mods`

`/ct mods`

Описание:

Выводит список всех модов с версиями в файл crafttweaker.log и выводит его в чат.

## Имена

Использование:

`/crafttweaker names [категория]`

`/ct names [категория]`

Описание:

Записывает имена всех предметов в игре в файл crafttweaker.log.  
Аргумент `категория` опицонален и дополнит список данной информацией:

* burntime(время горения)
* creativetabs(вкладки в креативе)
* damageable(может ли ломаться)
* display
* enchantability(может ли быть зачаровано)
* foodvalue(сколько восстанавливает еды)
* maxdamage(прочность)
* maxstack(сколько предметов в стаке)
* maxuse
* modid(id мода)
* rarity(редкость)
* repairable(можно ли починить)
* repaircost(стоимость починки)
* saturationvalue(сколько восстанавливает сытости)
* unloc

Этот список можно также отобразить с помощью автозаполнения клавишей TAB.

## Nbt

Использование:

`/crafttweaker nbt`

`/ct nbt`

Описание:

Записывает nbt блока, на который Вы смотрите или предмета, который Вы держите, в файл crafttweaker.log.

## Словарь руд

Использование:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Описание:

Записывает все существующие вхождения в словарь руд в файл crafttweaker.log.

Если в команду вставлено имя, все вхождения этого имени в словарь руд будут записаны в файл crafttweaker.log.

## Зелья

Использование:

`/crafttweaker potions`

`/ct potions`

Описание:

Записывает список всех зелий в файл crafttweaker.log.

## RecipeNames

Использование:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Описание:

Записывает список всех имен рецептов в файл crafttweaker.log.  
Id мода можно указать для фильтрации результатов.

## Рецепты

Использование:

`/crafttweaker recipes`

`/ct recipes`

Описание:

Записывает список всех рецептов в игре в файл crafttweaker.log.

## Рецепты (Рука)

Использование:

`/crafttweaker recipes hand`

`/ct recipes hand`

Описание:

Идентично `/ct recipes`, но записывает в файл crafttweaker.log только рецепты, использующие этот предмет.

## Рецепты (Печь)

Использование:

`/crafttweaker recipes furnace`

`/ct recipes furnace`

Описание:

Записывает список рецептов для печи в файл crafttweaker.log.

## Скрипты

Использование:

`/crafttweaker scripts`

`/ct scripts`

Описание:

Отправляет ссылку на папку со скриптами.  
Can also be executed from a command line which instead prints the absolute path to the directory to the log.

## Seeds

Использование:

`/crafttweaker seeds`

`/ct seeds`

Описание:

Записывает список всех семян в файл crafttweaker.log.

## Синтакс

Использование:

`/crafttweaker syntax`

`/ct syntax`

Описание:

Выводит все синтаксические ошибки в Ваших скриптах. Заметьте, что для вступления правок в силу необходимо перезагрузить игру.

## Вики

Использование:

`/crafttweaker wiki`

`/ct wiki`

Описание:

Открывает этот сайт в Вашем браузере (аналогично `/ct docs`).

## ZsLint

Использование:

`/crafttweaker zslint`

`/ct zslint`

Описание:

Starts the zslint socket.
