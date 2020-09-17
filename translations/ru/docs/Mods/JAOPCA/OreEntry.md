# OreEntry

OreEntry - это материал из золота, алмазов, угля, красного камня и так далее.  
Вы можете использовать это для получения нескольких [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Методы

В общем, методы используют строковый параметр, который является префиксом.  
Например, OreEntry для `"Золото"`, вызов с префиксом `"пыль"` вернёт Золотой Пыль.  
На этих примерах мы предполагаем, что это было объявлено:  
В комментариях после примера вызовы будут указывать, какой метод может возвращаться (за исключением случаев, когда в дополнительной категории).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Золото").
```

### Получить свойства записи

Вы можете получить эти свойства:

```zenscript
oreEntry.energyModifier; //1.0 двойной
oreEntry.rarity; //1.0 двойной
oreEntry.oreType; //"INGOT" как строка
```

### Получить OreName или OreName Synonyms

Название руды является необходимым условием ее регистрации и того, что вы используете в getOre для ее получения.  
Название руды синонимы - это синонимы, которые моды или наборы авторов могут зарегистрироваться, чтобы объединить две или более записей руд (e. - "Алюминиевые" и "Алюминиевые"). Однако, большинство рудных записей, вероятно, не будет зарегистрированы. Получатель синонимов возвращает список, содержащий все синонимы, как строки.

```zenscript
oreEntry.oreName; //"Золото"
Синонимы oreEntry.oreName; //[]
```

### Получить IOreDictEntry

Возвращает новый [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) с указанным префиксом.

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

Возвращает новый [IItemStacks](/Vanilla/Items/IItemStack/) , который соответствует заданному префиксу.  
Вы можете предоставить альтернативный резервный префикс для использования, если соответствующий предмет не найден.

Если соответствующий элемент не найден и соответствующий элемент не найден с использованием резервного префикса (если он установлен), он вернёт `null`.

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); //null

//oreEntry.getItemStack(prefix, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Возвращает новый [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) , соответствующий заданному префиксу.  
Вы можете предоставить альтернативный резервный префикс для использования если не найден соответствующий Liquid.

Если соответствующая жидкость не найдена и соответствующая жидкость не найдена с использованием резервного префикса (если указано), она возвращает `null`.

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); //null

//oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Скачать дополнительные

Запись может иметь дополнительную регистрацию. Дополнительно, например, может быть вторичным выходом при пульсации соответствующей руды.

Вы можете либо проверить, имеет ли запись дополнительные дополнения, получить дополнительные (или `null` , если они отсутствуют) или extraName.  
Вы также можете использовать те же методы, что и выше (`getOreDictEntry`, `getLiquidStack` и `getItemStack`).

Существует до 3 дополнительных компонентов, которые могут быть зарегистрированы. Для упрощения нет примеров для эквивалентных методов, они будут приведены только

```zenscript
//Первое дополнительное
oreEntry.hasExtra; //true или false
oreEntry.extra; //matching oretry or null
Entry. xtraName; //имя или null

//Методы для дополнительной
записи. etOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry. etLiquidStackExtra(префикс);
oreEntry.getLiquidStackExtra(prefix, fallback);



//Дополнительные
oreEntry.hasSecondExtra; //true или false
oreEntry. econdExtra; //подходящий oreEntry или null
oreEntry.secondExtraName; //имя или null

//Методы дополнительно
oreEntry.getOreDictEntrySecondExtra(префикс);
EntrySecondExtra. etItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//Третья дополнительная
oreEntry.hasThirdExtra; //true или false
oreEntry.thirdExtra; //вычисление oreEntry или null
oreEntry. hirdExtraName; //имя или null

//Методы для третьей дополнительной
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```