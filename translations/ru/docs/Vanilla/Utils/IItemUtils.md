# IItemUtils

Интерфейс ItemUtils предоставляет различные утилиты для работы с предметами.  
Можно получить к нему доступ с помощью `items`.

## Создание зелий

Функция createPotions позволяет создать пользовательские зелья.  
Возвращает зелье как [IItemStack](/Vanilla/Items/IItemStack/).  
В качестве параметра для этой функции является переменной, вы можете указать один объект[][] или много объекта[].  
В обоих случаях каждый объект [] должен содержать

1. [IЗелье](/Vanilla/Potions/IPotion/)
2. Подсказка, описывающая усилитель/прочность эффекта
3. Подсказка, описывающая длительность эффекта. 

Если объект [] не имеет такой длины или нет в таком порядке, он будет проигнорирован.

```zenscript
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
зелье val = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Получение предметов по имени

Эти две функции возвращают [IItemStack](/Vanilla/Items/IItemStack/)[], содержащий все соответствующие элементы.  
Первая проверка на соответствие имен реестра элементов, вторая использует нелокализованные имена.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // все вещи, которые имеют меч
itemUtils.getItemsByRegRegistryName(". thermal.*"); // все термические расширения/foundation/dynamics items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexlocalizedName(".*pink.*"); // розовые вещи!! <3
```

## Имитирование обработчика скобок

This method does the same as the [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item/).  
Unlike the BH though, you need to provide the meta as optional parameter.  
If you want to use the wildcard meta, use `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wol", 32767); //<minecraft:wool:*>
    

## Создание яиц призыва

Функция createSpawnEgg позволяет создать пользовательские яйца спавна модов.  
customNBT опционально и может переопределить тег сущности.  
Возвращает порождающий eff как [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(сущность, @optional customNBT)
//NBT переопределяет сущность (это создает яйцо creeper!)
val яйцо = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 как байт,PersistenceRequired:1 как байт}});
```