# IOreDict

The Forge OreDictionary is like a huge Lexicon in the way that it features many different entries and each entry is described by fitting items.  
Когда речь идет о словарях, люди обычно ссылаются на [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) не на весь словарь.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import crafttweaker.oredict.IOreDict;`

## Как получить словарь oreDictionary

Вы можете получить OreDictionary с помощью [`oreDict` глобального ключевого словаря](/Vanilla/Global_Functions/).

## Методы

Что можно сделать с помощью oreDict?

### Получение [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

Вы можете использовать один из трех способов ниже, чтобы обратиться к OreDictEntry, независимо от того, существует ли он или нет.  
Если oreDictEntry еще не существует, он будет создан.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Итерация через все зарегистрированные [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//участники записи для извлечения всех зарегистрированных записей в oreDictionary!
val allEntries = oreDict.entries;

для oreDictEntry в allEntries{
    print(oreDictEntry. ame);
}

//Или можно лишь повторить через oreDict
для записи в oreDict {
    print(entry.name);
}

```

## Как проверить существует ли запись в словаре ore Dictionary

Вы можете использовать `в` или `оператор` для проверки уже существует [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/):

```zenscript
if (oreDict in "ingotIron") {
    print("ingotIron существует! );
}

if (oreDict имеет "ingotIron") {
    print("ingotIron существует"! );
}


//Или используйте функцию:
if(oreDict. ontains "ingotIron") {
    print("ingotIron exists!"); 
}
```