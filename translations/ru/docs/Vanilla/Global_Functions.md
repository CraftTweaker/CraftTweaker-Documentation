# Global Functions

Global functions are functions that can be called without being [imported](/AdvancedFunctions/Import/).  
Here's the list:

## print

Записывает строчку в лог CraftTweaker как информацию.

```java
//print(String сообщение);
print("Привет, мир!");
```

Ничего не возвращает.

## totalActions

```java
//totalActions();
totalActions();
```

Returns an int that shows how many global functions are registered.

## enableDebug

Enables Debug mode.  
Use of the [Debug Preprocessor](/AdvancedFunctions/Preprocessors/DebugPreprocessor/) is preferred though.

```java
//enableDebug();
enableDebug();
```

Ничего не возвращает.

## isNull

Checks if a given object is null.  
Doesn't work on primitives!

```java
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Returns a boolean Note: If this does not work for you, try casting the object to bool `<minecraft:dirt> as bool`

## max

```java
//max(int number1, int number2);
max(10, 11);
```

Возвращает целое число.

## min

```java
//min(int number1, int number2);
min(10, 11);
```

Возвращает целое число.

## pow

```java
//pow(double основаниеСтепени, double показательСтепени);
pow(2.0, 4.0);
```

Возвращает число с двойной точностью.

## Глобальные поля

| Поле       | Описание                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------- |
| brewing    | Accesses the [Brewing Handler](/Vanilla/Recipes/Recipes_Brewing_Stand/)                        |
| client     | Accesses [client Methods](/Vanilla/Game/IClient/)                                              |
| events     | Accesses the [Event Handler](/Vanilla/Events/IEventManager/)                                   |
| format     | Accesses the [Formatting Handler](/Vanilla/Utils/IFormatter/)                                  |
| furnace    | Accesses the [Furnace Handler](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                      |
| game       | Accesses [Game functions](/Vanilla/Game/IGame/)                                                |
| itemUtils  | Accesses the [ItemUtils Handler](/Vanilla/Utils/IItemUtils/)                                   |
| loadedMods | Accesses the [loaded Mods list](/Vanilla/Game/Mods/)                                           |
| logger     | Accesses the [logger](/Vanilla/Utils/Logger/)                                                  |
| oreDict    | Accesses the [oreDictionary Handler](/Vanilla/OreDict/IOreDict/)                               |
| recipes    | Accesses the [Recipe Handler](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)               |
| server     | Accesses [server Methods](/Vanilla/Game/IServer/)                                              |
| vanilla    | Accesses vanilla functions (currently only [vanilla.seeds](/Vanilla/Recipes/Seeds/) available) |