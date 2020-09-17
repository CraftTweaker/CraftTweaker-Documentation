# Автомат канирования

## Пакет

```zenscript
импорт mods.ic2.CanningMachine;
```

### Список идентификаторов эффектов
* 1: Голод (плоть гнило) (шанс 80%)
* 2: Яд (Глаз Паука)
* 3: Голод (Курица) (шанс 30%)
* 4: Золотое яблоко
* 5: Яблоко Notch
* 6: Корс фрукты

## Методы

### Регистрация элементов для эффекта (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... inputs);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... вводит** Входы для получения пищи.
- **int id** эффект, который вы хотите применить к указанным элементам. Допустимы следующие идентификаторы эффекта:

### Идентификатор эффекта (int id, boolean deleteitems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** идентификатор эффекта, который вы хотите удалить с заполнения. Обратитесь к выше, чтобы получить действительные идентификаторы эффекта.
- **boolean deleteItems** Удалять ли элементы с таким эффектом и из созданных банков. В настоящее время это логическое значение может не работать.

### Регистрация топливного значения (int fuelValue, IItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Ранее имел значение 2548.
```

- **int fuelValue** Сколько топлива стоит указанный предмет.
- **[IItemStack](/Vanilla/Items/IItemStack/) ввод** Элемент для регистрации этого значения топлива. Это даже могут быть элементы с существующими значениями, в этом случае предварительно указанное значение будет перезаписано. Примечание: должно быть itemstack, нет допустимых oredicts.

### Регистрировать множитель топлива (число плавающего топлива, ввод IItemStack)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float Multiplier, IItemStack);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float FuelMultiplier** какой процент от ранее введенного значения увеличился. например 1 = 100%, 0.5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) входной** Элемент для регистрации мультипликатора топлива. Это даже могут быть предметы с существующими мультипликаторами, в этом случае ранее указанный мультипликатор будет перезаписан. Примечание: должно быть itemstack, нет допустимых oredicts.

### Исключить пункт Топлива (ввод IItemStack)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) входной** Предмет, который будет удален с качестве входного материала для топлива.

Смотрите [здесь](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) для информации о том, как работают баки с топливом.

### Добавить рецепт (выход IItemStack, наполнитель IIngredient, контейнер IItemStack)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(выход IItemStack, наполнитель IIngredient, контейнер IItemStack);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) вывод** продукт
- **[IItemStack](/Vanilla/Items/IItemStack/) контейнер** itemstack для "заполнения"
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) наполнитель** Ингредиент, с которым заполняется в контейнер

