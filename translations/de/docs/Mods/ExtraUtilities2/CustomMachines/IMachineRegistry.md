# IMachineRegistry

Sie verwenden die IMachineRegistry um einen neuen [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) ins Spiel zu registrieren oder um danach eine zuvor registrierte Maschine abzurufen.

## Dieses Paket importieren

Wenn Sie Methodenaufrufe verkürzen oder Probleme auftreten möchten, müssen Sie [das Paket importieren](/AdvancedFunctions/Import) importieren.  
Sie können dies tun mit

```zenscript
extrautilities2.Tweaker.IMachineRegistry;
```

## Maschine erstellen

Es gibt zwei Arten von Maschinen:

- Maschinen
- Generatoren

Maschinen verbrauchen Energie, Generatoren emittieren Energie, sonst verhalten sie sich fast identisch.

```zenscript
extrautilities2.Tweaker.IMachineRegistry. reateNewMachine(
    Name, 
    energyBufferSize, 
    energyTransferLimit, 
    InputSlots, 
    OutputSlots, 
    FrontTexture, 
    FrontTextureActive, 
    Farbe
);


Extrautilien2. schwächer.IMachineRegistry. reateNewGenerator(
    Name,
    energyBufferSize,
    energyTransferLimit,
    InputSlots,
    OutputSlots,
    frontTexture,
    frontTextureActive,
    Farbe
);
```

Wie Sie sehen können, akzeptieren beide Methoden die gleichen Parameter, der einzige Unterschied ist, wenn sie Energie benötigen oder produzieren.  
Die Parameter sind:

| Name                | Type                                                                |
| ------------------- | ------------------------------------------------------------------- |
| name                | string                                                              |
| Energie-Puffergröße | int                                                                 |
| energyTransferLimit | int                                                                 |
| inputSlots          | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots         | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture        | string                                                              |
| frontTextureActive  | string                                                              |
| farbe (optional)    | int (Standardwert `0xffffff` (schwarz))                             |

Die Slots akzeptieren eine Liste von [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Listen können auf die gleiche Weise wie Arrays erstellt werden, indem Sie [] um die Slots herum benutzen. Beide Methoden geben ein [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) Objekt zurück, das die erzeugte Maschine repräsentiert.  
Denken Sie daran, da Sie dieses Objekt brauchen, um später Rezepte zu erstellen!

## Vorhandene Maschinen holen

### Computer nach Name holen

Sie können bereits generierte Maschinen auch über die Registry erhalten:

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getMachine(Stringname);
```

Diese Methode gibt die Maschine mit dem angegebenen Namen als [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) oder `null` zurück

### Holen Sie sich alle registrierten Maschinen

Dadurch werden alle registrierten Maschinen als Liste von [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) zurückgegeben.

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### XU2-Maschinen holen

Du kannst diese Getter auch verwenden, um Maschinen aus dem XU2-Mod als [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) Objekt zu holen:

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;