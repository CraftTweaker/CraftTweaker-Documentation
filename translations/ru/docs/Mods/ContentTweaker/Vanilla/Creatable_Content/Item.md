# Пункт 1

Это позволяет вам добавлять предметы в игру!

## Создать представление товара

Прежде чем вы сможете добавить элемент, необходимо создать представление вещи, которое позволит вам установить свойства добавляемого предмета.  
Это место для [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/):

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Импортировать пакет представления

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.Item;`

## Свойства ZenProperties

Чтобы получить/установить свойства, вы можете использовать релевантные ZenGetters/Setters или ZenMethods:

```zenscript
//имя свойства: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Название свойства               | Тип                                                                                                                   | Требуется | Значение по умолчанию | Описание/заметки                                                                                         |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| Оплата маяком                   | boolean                                                                                                               | Нет       | false                 | Может быть подарено маяку, чтобы включить бонусы                                                         |
| creativeTab                     | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                          | Нет       | Прочие                | Творческая вкладка, в которую будет помещен предмет                                                      |
| светящиеся                      | boolean                                                                                                               | Нет       | false                 | Может быть использовано для придания вашему предмету светящегося эффекта (как если бы он был зачарован). |
| цвет предмета поставщика        | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)               | Нет       | -1 как цвет           | Цвет элемента                                                                                            |
| пункт РазрушёнБлок              | [Разрушен IItemBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)             | Нет       | false                 | Что произойдет, когда предмет только что уничтожил блок?                                                 |
| скорость уничтожения предмета   | [Скорость Разрушения II](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)            | Нет       | null                  | Определяет скорость разрушения блока Предмета                                                            |
| itemGetContainerItem            | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)         | Нет       | null                  | Что останется в сетке создания при использовании предмета в рецепте?                                     |
| itemtClick                      | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)                     | Нет       |                       | Вызывается, когда игрок нажимает правой кнопкой мыши с предметом                                         |
| пункт Действия                  | EnumUseAction                                                                                                         | Нет       | "НЕТ"                 | Какую анимацию будет иметь ("НЕСЕ", "EAT", "DRINK", "BLOCK", "BOW")                                      |
| поставщик локализованного имени | [Поставщик ILocalizedNameName](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | Нет       | null                  | Может использоваться для программирования определения отображаемого имени вашего предмета                |
| maxDamage                       | int                                                                                                                   | Нет       | -1                    | Сколько использует этот предмет? Менее 0 означает, что он не может быть повреждён                        |
| maxStackSize                    | int                                                                                                                   | Нет       | 64                    | Сколько предметов может поместиться в один стоп? Менее 0 означает размер стандартного стека (64)         |
| onItemUpdate                    | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                             | Нет       | null                  | Вызывает каждый тик, пока предмет находится в инвентаре игрока                                           |
| onItemUse                       | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                                   | Нет       | null                  | Вызывается, когда игрок нажимает правой кнопкой мыши на блоке с предметом                                |
| ItemUseFinish                   | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                       | Нет       | null                  | Вызывается, когда игрок завершит использование предмета                                                  |
| редкость                        | Номер редкости                                                                                                        | Нет       | ОБЩИЙ                 | Как редко элемент определяет цвет подсказок ("ОБЩИЙ", "UNCOMMON", "RARE", "EPIC")                        |
| выдержки плавки                 | float                                                                                                                 | Нет       | -1                    | Сколько опытных опытов у игрока есть возможность плавки этого предмета в печи?                           |
| местоположение текстуры         | [Расположение CTResource-ресурсов](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                  | Нет       | null                  | Расположение ресурса, используемое для текстур и т.д.                                                    |
| класс инструментария            | string                                                                                                                | Нет       |                       | Типы блоков, которые может сломать инструмент                                                            |
| уровень инструмента             | int                                                                                                                   | Нет       | -1                    | Можно сломать уровень блоков                                                                             |
| unlocalizedName                 | string                                                                                                                | Да        |                       | Имя должно быть строчными буквами                                                                        |

## Регистрация элемента

Вам нужно позвонить этому методу, чтобы зарегистрировать предмет в игре!  
В противном случае ничего не произойдет!  
После вызова этой функции, вы не можете отменить регистрацию элемента или изменить его свойства!

```zenscript
item.register();
```

## Пример скрипта

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods. ontenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "кирка";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRightClick = function(stack, world, player, hand) {
    Команды. all("Игроки со счетчиками задают @p имя 5", игрок, мир);
    возвращает "Проход";
};
zsItem.register();
```

## Локализация элемента

Вам нужно добавить `item.contenttweaker.itemName.name=Localized Name` к отвечающим языковым файлам.  
Пример в ru_us. ang файл `item.contenttweaker.zsItem.name=Ваше имя предмета здесь` покажет `Ваше имя предмета здесь` в игре.

В качестве альтернативы, вы можете использовать [функцию локализации CraftTweaker](/Vanilla/Game/IGame/), хотя рекомендуется использовать языковые файлы!