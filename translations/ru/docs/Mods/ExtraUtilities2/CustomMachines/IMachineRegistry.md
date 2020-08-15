# IMachineRegistry

Вы используете IMachineRegistry для регистрации [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) в игре, или для получения ранее зарегистрированной машины.

## Импорт пакета

Если вы хотите сократить вызовы методов или столкнуться с любыми проблемами, вам может потребоваться [импортировать](/AdvancedFunctions/Import) пакет.  
Вы можете сделать это, используя

```zenscript
• импортировать дополнительные утилиты2.Tweaker.IMachineRegistry;
```

## Создать машину

Существует два типа машин:

- Машины
- Генераторы

Машины потребляют энергию, генераторы выделяют энергию, в противном случае они ведут себя почти идентично.

```zenscript
extrautilities2.Tweaker.IMachineRegistry. reateNewMachine(
    имя, 
    energyBufferSize, 
    energyTransferit, 
    входных слотов, 
    выходные слоты, 
    фронтаТекстура, 
    фронтальная Текстурия, цвет 

);


экстраутилиты2. weaker.IMachineRegistry. reateNewGenerator(
    имя,
    объём буфера энергии
    лимит энергии,
    слота ввода,
    выходные слоты,
    фронтаТекстура,
    передней Актуальной Текстуры,
    цвет
);
```

Как вы можете видеть, оба метода принимают одни и те же параметры, единственная разница заключается в том, что они требуют или производят энергию.  
Параметры являются:

| Название                     | Тип                                                                 |
| ---------------------------- | ------------------------------------------------------------------- |
| name                         | string                                                              |
| Размер буфера энергии        | int                                                                 |
| energyTransferLimit          | int                                                                 |
| inputSlots                   | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots                  | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture                 | string                                                              |
| Активный передний инструмент | string                                                              |
| цвет (необязательно)         | int (по умолчанию `0xffffff` (черный)                               |

Слоты принимают список [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Списки могут быть созданы так же, как и массивы, используя [] вокруг слотов. Оба метода возвращают объект [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) , представляющий созданную машину.  
Имейте в виду это, так как этот объект нужен для создания рецептов позже!

## Получить существующие машины

### Получить машину по имени

Вы можете получить уже сгенерированные машины с помощью реестра:

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getMachine(String name);
```

Этот метод вернет машину с заданным именем как [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) или `null`

### Получить все зарегистрированные машины

Это вернет все зарегистрированные машины в список [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### Получить машины XU2

Вы также можете использовать эти гетеры для получения машин с мода XU2 как [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) объекта:

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;