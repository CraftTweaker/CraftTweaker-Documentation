# Global Functions

Global functions are functions that can be called without being [imported](/AdvancedFunctions/Import/).  
Here's the list:

## print

Prints the string to the crafttweaker log as information.

```java
//print(String message);
print("Hello World!");
```

Returns nothing

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

Returns nothing

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

Returns an int

## min

```java
//min(int number1, int number2);
min(10, 11);
```

Returns an int

## pow

```java
//pow(double number1, double number2);
pow(2.0, 4.0);
```

Returns a double

## Global Fields

| Field      | Description                                                                                    |
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