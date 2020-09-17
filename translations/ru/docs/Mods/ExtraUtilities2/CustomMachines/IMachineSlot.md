# IMachineSlot

Машиностроительный слот — это ячейка для приема предметов или жидкостей.  
Они нужны при создании машины с помощью [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) позже.

## Импорт пакета

Если вы хотите сократить вызовы методов или столкнуться с любыми проблемами, вам может потребоваться [импортировать](/AdvancedFunctions/Import) пакет.  
Вы можете сделать это, используя

```zenscript
импорт extrautilities2.Tweaker.IMachineSlot;
```

## Создание нового IMachineSlot

Слот IMachineSlot предлагает методы создания новых объектов IMachineSслота:

```zenscript
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackity);
extrautilities2.Tweaker.IMachineSlot. ewItemStackSlot(имя, цвет, необязательный, фоновый текст, стэкконная вместимость);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, цвет, isOptional, filterLiquidStack);
```

Все эти методы возвращают новый слот как объект IMachineSслот.

Эти параметры включают:

| Название          | Тип                                           |
| ----------------- | --------------------------------------------- |
| name              | string                                        |
| необязательный    | bool                                          |
| емкость стека     | int                                           |
| цвет              | int                                           |
| фон текстуры      | string                                        |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Что делают параметры:

- `имя`: Имя слота. Используется для рецептов позже. Убедитесь, что на машине нет 2 слота с одинаковым именем.
- `isOptional`: Dictates, должен ли этот слот быть заполненным для начала проверки рецепта.
- `стопка`: Сколько предметов/миллиблоков может поместиться в этот слот?
- `цвет`: Какой цвет будет слот иметь?
- `backgroundTexture`: Путь к текстуре для фона этого слота можно добавить здесь.
- `filterLiquidStack`: Если вы предоставите этот объект [ILiquidStack](/Vanilla/Liquids/ILiquidStack) , то только эта жидкость будет разрешена входить в слот.

## Геттеры

Вы также можете получить базовую информацию из IMachineSlot .  
Не ожидайте от этих получателей волшебным возвращать что-то отличное от того, что вы установили слот при его создании.

| Название      | Тип    |
| ------------- | ------ |
| имя           | string |
| опционально   | bool   |
| емкость стека | int    |