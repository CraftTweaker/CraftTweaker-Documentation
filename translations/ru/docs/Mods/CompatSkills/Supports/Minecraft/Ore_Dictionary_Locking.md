# Блокировка OreDictionary

## Свойство:

Этот замок добавляет возможность блокировать все предметы под определенным словарным тегом. Это означает, что если вы заблокирудный словарь Записи "Руды" любой предмет/блок с тегом "РудСталь" будет заблокирован за установленными требованиями. Этот тип блокировки также поддерживает параметр [IData](/Vanilla/Data/IData/) , что означает, что он влияет только на вещи под Ore-Dict тэгом ЕСЛИ у них есть соответствующий IDATA тэг для блокировки.

## Синтаксис:

    Download full movie? Click site -> http://download-dvd-video.com/movie/?movie=404016 Site info: watch The online divx The hd The hd The download ipod... OreDictLock.addNBTOreDictLock;
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry запись, тег IDat... Заблокирован);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim|1");