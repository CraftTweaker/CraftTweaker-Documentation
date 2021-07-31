# 全局函数

全局函数是可以不使用[imported](/AdvancedFunctions/Import/)关键字的情况下调用的函数.  
列表如下

## print

将字符串信息打印到CraftTweaker的日志中。

```zenscript
//print(String message);
print("Hello World!");
```

不返回任何内容

## totalActions

```zenscript
//totalActions();
totalActions();
```

返回一个int，显示注册了多少个全局函数。

## enableDebug

启用调试模式。  
推荐使用[Debug Preprocessor](/AdvancedFunctions/Preprocessors/DebugPreprocessor/)

```zenscript
//enableDebug();
enableDebug();
```

不返回任何内容

## isNull

Checks if a given object is null.  
Doesn't work on primitives!

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Returns a boolean Note: If this does not work for you, try casting the object to bool `<minecraft:dirt> as bool`

## instanceof

```zenscript
entity instanceof IEntity;
```

Returns a boolean

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Returns the larger number

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Returns the lower number

## pow

```zenscript
//pow(double number1, double number2);
pow(2.0, 4.0);
```

Returns a double

## Global Fields

| 字段         | 说明                                                                                             |
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