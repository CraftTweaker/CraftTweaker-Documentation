# Global Functions

Глобальные функции-это функции, которые можно вызвать без [импортирования](/AdvancedFunctions/Import/).  
Ниже приведен список таких функций:

## print

Записывает строчку в лог CraftTweaker как информацию.

```zenscript
//print(String сообщение);
print("Привет, мир!");
```

Ничего не возвращает.

## totalActions

```zenscript
//totalActions();
totalActions();
```

Возвращает int(целое число), отображающее кол-во зарегистрированных глобальных функций.

## enableDebug

Включает режим дебага.  
Впрочем, рекомендуется использовать [препроцессор дебага](/AdvancedFunctions/Preprocessors/DebugPreprocessor/).

```zenscript
//enableDebug();
enableDebug();
```

Ничего не возвращает.

## isNull

Проверяет, равен ли объект null.  
Doesn't work on primitives!

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Возвращает bool(true/false) Заметка: Если для Вас эта функция не сработала, попробуйте преобразовать объект в bool `<minecraft:dirt> as bool`

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Возвращает целое число.

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Возвращает целое число.

## pow

```zenscript
//pow(double основаниеСтепени, double показательСтепени);
pow(2.0, 4.0);
```

Возвращает первое число, возведенное в степень второго числа

## Глобальные поля

| Поле       | Описание                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------- |
| brewing    | Дает доступ к [Brewing Handler](/Vanilla/Recipes/Recipes_Brewing_Stand/)                        |
| client     | Дает доступ к [client Methods](/Vanilla/Game/IClient/)                                              |
| events     | Дает доступ к [Event Handler](/Vanilla/Events/IEventManager/)                                   |
| format     | Дает доступ к [Formatting Handler](/Vanilla/Utils/IFormatter/)                                  |
| furnace    | Дает доступ к [Furnace Handler](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                      |
| game       | Дает доступ к [Game functions](/Vanilla/Game/IGame/)                                                |
| itemUtils  | Дает доступ к [ItemUtils Handler](/Vanilla/Utils/IItemUtils/)                                   |
| loadedMods | Дает доступ к [loaded Mods list](/Vanilla/Game/Mods/)                                           |
| logger     | Дает доступ к [logger](/Vanilla/Utils/Logger/)                                                  |
| oreDict    | Дает доступ к [oreDictionary Handler](/Vanilla/OreDict/IOreDict/)                               |
| recipes    | Дает доступ к [Recipe Handler](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)               |
| server     | Дает доступ к [server Methods](/Vanilla/Game/IServer/)                                              |
| vanilla    | Дает доступ к ванильным функциям (на данный момент только [vanilla.seeds](/Vanilla/Recipes/Seeds/) available) |
