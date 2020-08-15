# Еда

Вы можете добавить еду в игру!

## Создать представление продуктов питания

Прежде чем вы сможете добавить элемент, необходимо создать элемент питания, который позволит вам установить свойства добавляемого предмета.  
Это место для [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/):

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmoun);
```

## Импортировать пакет представления

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.ItemFood;`

## Расширение Представления Предмета

Класс ItemFood расширяет [Представление ItemFood](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Это означает, что все методы и ZenProperties доступные для [товаров](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) также доступны для продуктов питания!

## Свойства ZenProperties

Чтобы получить/установить свойства, вы можете использовать релевантные ZenGetters/Setters или ZenMethods:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Свойства         | Тип                                                                                             | Требуется | Значение по умолчанию | Описание/заметки                                      |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------- | --------------------- | ----------------------------------------------------- |
| исцеление        | int                                                                                             | Да        |                       | Сколько точек питания восстанавливается при съезде?   |
| всегда съедобный | bool                                                                                            | Нет       | false                 | Можно ли съесть еду, если пользователь полон еды?     |
| еда волка        | bool                                                                                            | Нет       | false                 | Может ли еда быть использована для приручения волков? |
| насыщенность     | float                                                                                           | Нет       | 0.6                   | Значение насыщенности пищи                            |
| onItemFoodEaten  | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | Нет       | null                  | Вызывается, когда еда съедена                         |

## Регистрация элемента

Вам нужно позвонить этому методу, чтобы зарегистрировать предмет в игре!  
В противном случае ничего не произойдет!  
После вызова этой функции, вы не можете отменить регистрацию элемента или изменить его свойства!

```zenscript
item.register();
```