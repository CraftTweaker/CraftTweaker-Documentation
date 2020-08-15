# Сиды

Семена - это то, что вы получаете от пробивания высокой травы.

## Печатать все сиды в журнал

Эта команда выведет все зарегистрированные сиды в лог.

Необходимо, чтобы игрок или консоль не могли быть записаны в zs-файл.

    1.12
    /ct семена
    
    пред1.12
    /mt
    

## Добавить семантику

Добавляет `предмет` в виде выпадения семян.  
**Вес относительно семенного материала, вес которого составляет 10 (<unk> 10%)!**

```zenscript
vanilla.seeds.addSeed(item);
```

`элемент` является [взвешенный ItemStack](/Vanilla/Items/WeightedItemStack/). Что это значит? Это просто означает, что вам нужно дать ему такой процентный показатель:

```zenscript
//adds carrots with a weight of 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Удалить семантику

Останавливает `предмет` от того, чтобы стать капельницей семян.

```zenscript
vanilla.seeds.removeSeed(item);
```

`элемент` является [IIngredient](/Vanilla/Variable_Types/IIngredient/).

## Получить все зарегистрированные семена

Возвращает все предметы как [взвешенный список ItemStack](/Vanilla/Items/WeightedItemStack/).

```zenscript
val seedList = vanilla.seeds.seeds;

для элемента в seedList {
    print("Item: " ~ пункт. tack.displayName ~ " || Шанс: " ~ элемент в процентах ~ "%");
}
```