# IMachine

Un IMachine es el objeto de máquina real, puede obtenerlo del [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Importando el paquete

Podría ser necesario que [importe](/AdvancedFunctions/Import) la clase.  
Normalmente solo necesita importar una clase cuando utiliza directamente el nombre, tales como en el casting o [Declaraciones de matriz](/AdvancedFunctions/Arrays_and_Loops) pero más vale ser seguro que lo sentimos y añadir la importación.

```zenscript
importar extrautionties2.Tweaker.IMachine;
```

## Añadir recetas

Hay dos métodos para añadir recetas, uno utiliza un mapa de probabilidad para las salidas, uno permite el uso de objetos [WeightedItemStack](/Vanilla/Items/WeightedItemStack) y [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) .  
Ambos métodos usan [mapas](/AdvancedFunctions/Associative_Arrays) con cadenas como índices.  
Estas cadenas serán los nombres de las ranuras de entrada y salida, que es por lo que no debería tener dos ranuras con el mismo nombre en una máquina.

### Usando un mapa de probabilidad

```zenscript
myMachine.addRecipe(entradas, salidas, energía, tiempo, probabilidades);
```

Este método utiliza los siguientes parámetros:

| Nombre         | Tipo                                                          |
| -------------- | ------------------------------------------------------------- |
| inputs         | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs        | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[string\] |
| energía        | int                                                           |
| tiempo         | int                                                           |
| probabilidades | flotante[cadena\]                                            |

### Utilizar solo el mapa de salida

También puedes usar solo el mapa de salidas, entonces ExtUtils2 comprobará si hay objetos [WeightedItemStack](/Vanilla/Items/WeightedItemStack) y [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) y usará sus oportunidades.  
Recuerda, que añadir cualquier otra cosa que no sea esos dos o [IIngredient](/Vanilla/Variable_Types/IIngredient) como valor mapeado, no tendrá efecto.

```zenscript
myMachine.addRecipe(entradas, salidas, energía, tiempo);
```

Este método utiliza los siguientes parámetros:

| Nombre  | Tipo                                                          |
| ------- | ------------------------------------------------------------- |
| inputs  | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs | Objeto[cadena\]                                              |
| energía | int                                                           |
| tiempo  | int                                                           |

## Eliminar recetas

También puedes eliminar recetas. De nuevo, usas [mapas](/AdvancedFunctions/Associative_Arrays) con cadenas como índices.

Hay dos métodos, uno usa [IIngredient](/Vanilla/Variable_Types/IIngredient) como valores, y uno que acepte un mapa con [IItemStack](/Vanilla/Items/IItemStack) y un mapa con los valores [ILiquidStack](/Vanilla/Liquids/ILiquidStack).

### Usando IIngredient

```zenscript
myMachine.removeRecipe(entradas);
```

| Nombre | Tipo                                                          |
| ------ | ------------------------------------------------------------- |
| inputs | [IIngrediente](/Vanilla/Variable_Types/IIngredient)[string\] |

### Utilizando mapas separados para artículos y líquidos

```zenscript
myMachine.removeRecipe(elementos, líquidos);
```

| Nombre   | Tipo                                                    |
| -------- | ------------------------------------------------------- |
| objetos  | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| líquidos | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## Recuperando información de la máquina

También puede obtener información sobre la máquina utilizando los siguientes métodos:

- `getInputSlots()`: Devuelve todas las ranuras de entrada como una lista de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Devuelve todas las ranuras de salida como una lista de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Devuelve el [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) que coincide con el nombre.

## Nombrando la máquina

Hasta ahora, todas nuestras máquinas se llamarán `machine.crafttweaker:your_machine_name` donde `your_machine_name` es el nombre que usted utilizó para crear la máquina.

Si quieres localizar el nombre de la máquina, usa las capacidades de [IGame](/Vanilla/Game/IGame) de CrT o un archivo de idioma personalizado.

Así que si el nombre de su máquina era `time_machine`, necesitaría llamar a esto en un script:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Space Time distorter (Time machine)");
```

O agregue esto a un archivo de idioma:

    machine.crafttweaker:time_machine=distorter espacial tiempo (maquinaria de tiempo)