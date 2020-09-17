# IMachineRegistry

Si utilizza il IMachineRegistry per registrare un nuovo [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) al gioco, o per recuperare una macchina precedentemente registrata in seguito.

## Importazione del pacchetto

Se si desidera abbreviare le chiamate di metodo o incontrare eventuali problemi si potrebbe aver bisogno di [importare](/AdvancedFunctions/Import) il pacchetto.  
Puoi farlo usando

```zenscript
import extrautilities2.Tweaker.IMachineRegistry;
```

## Crea la macchina

Ci sono due tipi di macchine:

- Macchine
- Generatori

Le macchine consumano energia, i generatori emettono energia, altrimenti si comportano quasi identicamente.

```zenscript
extrautilities2.Tweaker.IMachineRegistry. reateNewMachine(
    name, 
    energyBufferSize, 
    energyTransferLimit, 
    inputSlots, 
    outputSlots, 
    frontTexture, 
    frontTextureActive, 
    colore
);


extrautilità2. weaker.IMachineRegistry. reateNewGenerator(
    nome,
    energyBufferSize,
    energyTransferLimit,
    inputSlots,
    outputSlots,
    frontTexture,
    frontTextureActive,
    colore
);
```

Come puoi vedere, entrambi i metodi accettano gli stessi parametri, l'unica differenza è se richiedono o producono energia.  
I parametri sono:

| Nome                | Tipo                                                                |
| ------------------- | ------------------------------------------------------------------- |
| nome                | stringa                                                             |
| energyBufferSize    | int                                                                 |
| energyTransferLimit | int                                                                 |
| inputSlots          | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots         | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture        | stringa                                                             |
| frontTextureActive  | stringa                                                             |
| colore (opzionale)  | int (valori predefiniti per `0xffffff` (nero))                      |

Gli slot accettano una lista di [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Le liste possono essere create allo stesso modo degli Arrays, usando [] intorno agli slot. Entrambi i metodi restituiscono un oggetto [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) che rappresenta la macchina creata.  
Tienilo a mente, poiché hai bisogno di quell'oggetto per creare ricette più tardi!

## Ottieni macchine esistenti

### Ottieni macchina per nome

È possibile ottenere macchine già generate utilizzando il Registro di sistema può:

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getMachine(String name);
```

Questo metodo restituirà la macchina con il nome specificato come [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) o `null`

### Ottieni tutte le macchine registrate

Questo restituirà tutte le macchine registrate come elenco di [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### Ottieni macchine XU2

È inoltre possibile utilizzare queste ricevitori per ottenere le macchine dalla mod XU2 come l'oggetto [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine):

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.IMachineRegistry.
    extrautilities2. weaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;