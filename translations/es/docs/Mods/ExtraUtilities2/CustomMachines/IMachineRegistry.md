# Registro de IMachine

Utiliza el IMachineRegistry para registrar una nueva [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) en el juego o para recuperar una máquina previamente registrada.

## Importando el paquete

Si desea acortar las llamadas a métodos o encontrar cualquier problema, puede que necesite [importar](/AdvancedFunctions/Import) el paquete.  
Puedes hacerlo usando

```zenscript
importar extrautionties2.Tweaker.IMachineRegistry;
```

## Crear la máquina

Hay dos tipos de máquinas:

- Máquinas
- Generadores

Las máquinas consumen energía, los generadores emiten energía, de lo contrario se comportan casi idénticamente.

```zenscript
extrautionties2.Tweaker.IMachineRegistry. reateNewMachine(
    name, 
    energyBufferSize, 
    energyTransferLimit, 
    entradas, 
    outputSlots, 
    frontTexture, 
    frontTextureActive, 
    color
);


extrautionties2. weaker.IMachineRegistry. reateNewGenerator(
    name,
    energyBufferSize,
    energyTransferLimit,
    entradas,
    ranuras de salida,
    frontTexture,
    frontTextureActive,
    color
);
```

Como puede ver, ambos métodos aceptan los mismos parámetros, la única diferencia es si requieren o producen energía.  
Los parámetros son:

| Nombre                     | Tipo                                                                |
| -------------------------- | ------------------------------------------------------------------- |
| nombre                     | cadena                                                              |
| tamaño de búfer de energía | int                                                                 |
| energyTransferLimit        | int                                                                 |
| inputSlots                 | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots                | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture               | cadena                                                              |
| textureActivo frontal      | cadena                                                              |
| color (opcional)           | int (por defecto a `0xffffff` (black))                              |

Las ranuras aceptan una lista de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Las listas se pueden crear de la misma manera que los Arrays, usando [] alrededor de las ranuras. Ambos métodos retornan un objeto [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) que representa la máquina creada.  
¡Ten esto en cuenta, ya que necesitas ese objeto para crear recetas más adelante!

## Obtener máquinas existentes

### Obtener máquina por nombre

También puede obtener máquinas ya generadas usando el Registro:

```zenscript
extrautionties2.Tweaker.IMachineRegistry.getMachine(String name);
```

Este método retornará la máquina con el nombre dado como [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) o `null`

### Obtener todas las máquinas registradas

Esto devolverá todas las máquinas registradas como lista de [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

```zenscript
extrautionties2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### Obtener máquinas XU2

También puede usar estos getters para obtener máquinas del mod XU2 como objeto [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine):

    extrautionties2.Tweaker.IMachineRegistry.crusher;
    extrauTunisities2.Tweaker.IMachineRegistry.enconfiguter;
    extrauFirstties2.Tweaker.IMachineRegistry.generator_culinary;
    extrauverities2.Tweaker.IMachineRegistry.generator_death;
    extrautionties2.Tweaker.IMachineRegistry.generator_dragon;
    extrauvernties2.Tweaker.IMachineRegistry.generator_enchant;
    extrauthes2.Tweaker.IMachineRegistry.generator_ender;
    extrauFirstties2.Tweaker.IMachineRegistry.generator_furnace;
    extrauFirstties2.Tweaker.IMachineRegistry.generator_ice;
    extrauens. weaker.IMachineRegistry.generator_lava;
    extrauFirstties2.Tweaker.IMachineRegistry.generator_netherstar;
    extrauFirstties2.Tweaker.IMachineRegistry.generator_overclock;
    extrautionties2.Tweaker.IMachineRegistry.generator_pink;
    extrauvernties2.Tweaker.IMachineRegistry.generator_potion;
    extraututies2.Tweaker.IMachineRegistry.generator_redstone;
    extrauthes2.Tweaker.IMachineRegistry.generator_slime;
    extrauute es2.Tweaker.IMachineRegistry.generator_survivalist;
    extraututies2.Tweaker.IMachineRegistry.generator_tnt;