# Funciones globales

Las funciones globales son funciones que se pueden llamar sin ser [importadas](/AdvancedFunctions/Import/).  
Aquí está la lista:

## imprimir

Muestra la cadena en el registro de crafttweaker como información.

```zenscript
//print(String message);
print("Hola Mundo!");
```

No devuelve nada

## totalAcciones

```zenscript
//totalActions();
totalActions();
```

Devuelve un mensaje que muestra cuántas funciones globales están registradas.

## enableDebug

Habilita el modo de depuración.  
El uso del [Preprocesador de depuración](/AdvancedFunctions/Preprocessors/DebugPreprocessor/) es preferido.

```zenscript
//enableDebug();
enableDebug();
```

No devuelve nada

## isNull

Comprueba si un objeto dado es nulo.  
¡No funciona en primitivos!

```zenscript
//isNull(Objeto o);
isNull(<minecraft:dirt>);
```

Returns a boolean Note: If this does not work for you, try casting the object to bool `<minecraft:dirt> as bool`

## máx

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Devuelve un int

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Devuelve un int

## pow

```zenscript
//power (doble número1, doble número2);
potencia (2.0, 4.0);
```

Devuelve un doble

## Campos globales

| Campo         | Descripción                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| elaboración   | Accede al [Creador de Cacería](/Vanilla/Recipes/Recipes_Brewing_Stand/)                                    |
| cliente       | Acceda a los métodos [del cliente](/Vanilla/Game/IClient/)                                                 |
| eventos       | Accede al gestor de eventos [](/Vanilla/Events/IEventManager/)                                             |
| formato       | Accede al [Formateo Manejador](/Vanilla/Utils/IFormatter/)                                                 |
| horno         | Accede al gestor de horno [](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                                    |
| juego         | Accede a [funciones de juego](/Vanilla/Game/IGame/)                                                        |
| objetosUtils  | Accede al [Manejador de objetos](/Vanilla/Utils/IItemUtils/)                                               |
| Mods cargados | Accede a la [lista de Mods cargados](/Vanilla/Game/Mods/)                                                  |
| logger        | Accede al registrador [](/Vanilla/Utils/Logger/)                                                           |
| oreDict       | Accede al [mando del diccionario ore](/Vanilla/OreDict/IOreDict/)                                          |
| recetas       | Accede al [Manejador de recetas](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)                        |
| servidor      | Acceda a los métodos del servidor [](/Vanilla/Game/IServer/)                                               |
| vanilla       | Accede a las funciones de vainilla (actualmente solo [vanilla.seeds](/Vanilla/Recipes/Seeds/) disponibles) |