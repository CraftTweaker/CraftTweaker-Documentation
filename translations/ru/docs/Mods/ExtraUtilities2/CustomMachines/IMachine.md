# IMachine

IMachine является фактическим объектом машины, вы можете получить его из [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Импорт пакета

Возможно, вам потребуется [импортировать класс](/AdvancedFunctions/Import) .  
Обычно вам нужно импортировать только класс, если вы используете имя, таких как в заклинании или [объявлениях массива](/AdvancedFunctions/Arrays_and_Loops) но лучше быть безопасным, чем извините и добавьте импорт.

```zenscript
импортировать extrautilities2.Tweaker.IMachine;
```

## Добавить рецепты

Существует два метода добавления рецептов, в одном из которых используется карта вероятностей для вывода предметов, позволяет использовать [взвешенные ItemStack](/Vanilla/Items/WeightedItemStack) и [взвешенные LiquidStack](/Vanilla/Liquids/WeightedLiquidStack) объекты.  
Оба метода используют [карту](/AdvancedFunctions/Associative_Arrays) со строками в качестве индексов.  
Эти строки будут называться слотами ввода/вывода, указанными в них Поэтому в машине не должно быть двух слотов с одинаковым именем.

### Использование вероятностной карты

```zenscript
myMachine.addRecipe(входы, выходы, энергия, время, вероятности);
```

Этот метод использует следующие параметры:

| Название    | Тип                                                         |
| ----------- | ----------------------------------------------------------- |
| inputs      | [Ингредиент](/Vanilla/Variable_Types/IIngredient)[строка\] |
| outputs     | [Ингредиент](/Vanilla/Variable_Types/IIngredient)[строка\] |
| энергия     | int                                                         |
| время       | int                                                         |
| вероятности | float[string\]                                             |

### Использование только карты вывода

Вы также можете использовать только карту выходов, затем ExtUtils2 проверит все [взвешенные объекты ItemStack](/Vanilla/Items/WeightedItemStack) и [взвешенная LiquidStack](/Vanilla/Liquids/WeightedLiquidStack) и воспользуется их шансами.  
Помните, что добавление ничего кроме двух или [IIngredient](/Vanilla/Variable_Types/IIngredient) как сопоставленное значение, не будет иметь никакого эффекта.

```zenscript
myMachine.addRecipe(входы, выходы, энергия, время);
```

Этот метод использует следующие параметры:

| Название | Тип                                                         |
| -------- | ----------------------------------------------------------- |
| inputs   | [Ингредиент](/Vanilla/Variable_Types/IIngredient)[строка\] |
| outputs  | Объект[строка\]                                            |
| энергия  | int                                                         |
| время    | int                                                         |

## Удалить рецепты

Вы также можете удалить рецепты. Опять же, вы используете [карты](/AdvancedFunctions/Associative_Arrays) со строками в качестве индексов.

Существует два метода, один использует [IIngredient](/Vanilla/Variable_Types/IIngredient) в качестве значений, , который принимает карту с [IItemStack](/Vanilla/Items/IItemStack) и картой с [значениями ILiquidStack](/Vanilla/Liquids/ILiquidStack).

### Использование IIngredient

```zenscript
myMachine.removeRecipe(входа);
```

| Название | Тип                                                         |
| -------- | ----------------------------------------------------------- |
| inputs   | [Ингредиент](/Vanilla/Variable_Types/IIngredient)[строка\] |

### Использование отдельных карт для товаров и жидкостей

```zenscript
myMachine.removeRecipe(элементы, жидкости);
```

| Название | Тип                                                     |
| -------- | ------------------------------------------------------- |
| элементы | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| liquids  | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## Получение информации о машине

Вы также можете получить информацию на машине, используя следующие методы:

- `getInputSlots()`: Возвращает все слоты ввода, как список [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Возвращает все выходные слоты как список [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Возвращает [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) соответствующий имени.

## Наименование машины

До сих пор все наши машины будут называться `machine.crafttweaker:your_machine_name` , где `your_machine_name` является любым именем, которое вы использовали для создания машины.

Если вы хотите локализованное имя машины, используйте либо возможности [IGame](/Vanilla/Game/IGame) или пользовательский файл lang.

Итак, если ваше имя машины было `time_machine`, вам придется либо вызвать это в скрипте:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Space Time distorter (Time machine)");
```

Или добавьте это в файл lang:

    machine.crafttweaker:time_machine=Space Time distorter (Time machine)