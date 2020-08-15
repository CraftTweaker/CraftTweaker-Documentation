# Креативная вкладка

Это позволяет вам добавлять в игру креативные вкладки!

## Создание объекта ICreativeTab

Перед тем, как добавлять вкладку, необходимо создать представление, которое позволит вам установить свойства вкладки которую вы хотите добавить.  
Это место для [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/):

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation item);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.creativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

Строка в каждом из трех методов одинаково: это нелокализованное имя, которое будет иметь вкладка позже.  
Второй параметр является символом, который ваша вкладка будет продолжать позже (e. . ведро лавы для "misc").  
Вы можете выбрать колёшку, которую вы хотите использовать при представлении предмета, itemStack, blockrepresentation или функцию itemStackSupplier.

## Вызов существующего объекта ICreativeTab

Вы также можете вызвать существующую вкладку [креативного](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) , но вы не можете изменить ее свойства.  
Почему вам это нужно, вы спросите?  
Вам понадобится это если вы хотите добавить только что созданный блок или элемент на существующую вкладку!

## Свойства

Вы можете вызвать и установить все эти свойства с помощью обычной вкладки ZenGetters и ZenSetters  
`. nlocalizedName = "ч";`  
Заметим, что при создании объекта ICreativeTab эти настройки вряд ли понадобятся всегда.  
Кроме того, вы не можете установить или получить свойства из существующего ICreativeTab(тот, который вы получили с помощью обработчика [кронштейна](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/))!

| Название свойства | Тип                                                                                                     | Требуется | Значение по умолчанию | Описание/заметки            |
| ----------------- | ------------------------------------------------------------------------------------------------------- | --------- | --------------------- | --------------------------- |
| unlocalizedName   | string                                                                                                  | ДА        |                       | Название Креативной вкладки |
| значок Стек       | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | YES/NO    |                       | Значок креативной вкладки   |
| iconStackSupplier | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | НЕТ/ДА    | null                  | Определяет что-нибудь?      |

## Регистрация вкладки творчества

Вам нужно вызвать этот метод для регистрации вкладки в игре!  
В противном случае ничего не произойдет!  
После вызова этой функции, вы не можете отменить регистрацию вкладки или изменить какие-либо ее свойства!

```zenscript
tab.register();
```

## Пример скрипта

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```