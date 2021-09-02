# Funciones Globales

Las funciones globales son funciones que no necesitan [importes](/AdvancedFunctions/Import/). </br> La lista es la siguiente:

## print

Muestra el string en el `crafttweaker.log`

```zenscript
//print(String mensaje);
print("Hola Mundo");
```

Returns nothing

## totalActions

```zenscript
//totalActions();
totalActions();
```

Devuelve un int que muestra cuantas funciones globales existen.

## enableDebug

Activa el modo de depuración.</br> Se recomienda el uso del [Preprocesador de depuración](/AdvancedFunctions/Preprocessors/DebugPreprocessor/)

```zenscript
//enableDebug();
enableDebug();
```

Returns nothing

## isNull

Comprueba si un objeto es nulo.</br> No funciona en tipos primitivos.

```zenscript
//isNull(Objeto o);
isNull(<minecraft:dirt>);
Se usa frequentemente en eventos o funciones avanzadas.
```

Devuelve un boolean.</br> Si esto no funciona, prueba a castear el objecto a bool `<minecraft:dirt> as bool`

## instanceof

```zenscript
entitidad instanceof IEntity;
```

Devuelve un boolean que representa si el objeto es del tipo de la clase.

## max

```zenscript
//max(int number1, int number2);
max(10, 11);

```

Devuelve el número mayor

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Devuelve el número menor

## pow

```zenscript
//pow(double numero1 double numero2);
pow(2.0, 4.0);
```

Devuelve un double

## Campos globales

| Field      | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| brewing    | Accede al [Brewing Handler](/Vanilla/Recipes/Recipes_Brewing_Stand/) (pociones)                 |
| client     | Acceda a los métodos [del cliente](/Vanilla/Game/IClient/)                                      |
| events     | Accede al [Event Handler](/Vanilla/Events/IEventManager/) (eventos)                             |
| format     | Accede al [Formatting Handler](/Vanilla/Utils/IFormatter/) (formato)                            |
| furnace    | Accede al [Furnace Handler](/Vanilla/Recipes/Furnace/Recipes_Furnace/) (horno)                  |
| game       | Acceda a los métodos [del Juego](/Vanilla/Game/IGame/)                                          |
| itemUtils  | Accede al [ItemUtils Handler](/Vanilla/Utils/IItemUtils/)                                       |
| loadedMods | Accede a la [lista de Mods cargados](/Vanilla/Game/Mods/)                                       |
| logger     | Accede al [logger](/Vanilla/Utils/Logger/)                                                      |
| oreDict    | Accede al [oreDictionary Handler](/Vanilla/OreDict/IOreDict/) (entradas oreDict)                |
| recipes    | Accede al [Recipe Handler](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)(Mesas de crafteo) |
| server     | Acceda a los métodos [del servidor](/Vanilla/Game/IServer/)                                     |
| vanilla    | Accesses vanilla functions (currently only [vanilla.seeds](/Vanilla/Recipes/Seeds/) available)  |