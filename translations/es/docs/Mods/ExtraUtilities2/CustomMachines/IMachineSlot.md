# IMachineSlot

Una ranura para máquinas es una ranura que acepta objetos o líquidos.  
Los necesita al crear una máquina usando el [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) más adelante.

## Importando el paquete

Si desea acortar las llamadas a métodos o encontrar cualquier problema, puede que necesite [importar](/AdvancedFunctions/Import) el paquete.  
Puedes hacerlo usando

```zenscript
importar extrautionties2.Tweaker.IMachineSlot;
```

## Crear un nuevo IMachineSlot

El paquete IMachineSlot ofrece métodos para crear nuevos objetos de IMachineSlot:

```zenscript
extrauFirstties2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrauthes2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrauFirstties2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrauercities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrauBILties2.Tweaker.IMachineSlot. ewItemStackSlot(name, color, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

Todos estos métodos devolverán el nuevo Slot como objeto de IMachineSlot.

Los parámetros son:

| Nombre            | Tipo                                          |
| ----------------- | --------------------------------------------- |
| nombre            | cadena                                        |
| opcional          | pluma                                         |
| capacidad de pila | int                                           |
| color             | int                                           |
| textura de fondo  | cadena                                        |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Qué hacen los parámetros:

- `name`: Nombre de la ranura. Usado para recetas más tarde. Asegúrese de que una máquina no tiene 2 ranuras con el mismo nombre.
- `isoptional`: Indica si esta ranura debe o no ser rellenada para que comiencen los chequeos de recetas.
- `Capacidad de pila`: ¿Cuántos artículos/millbuckets pueden caber en esta ranura?
- `color`: ¿Qué color tendrá la ranura?
- `textura de fondo`: Aquí se puede añadir una ruta de textura personalizada para el fondo de esta ranura.
- `filterLiquidStack`: Si proporciona este objeto [ILiquidStack](/Vanilla/Liquids/ILiquidStack) , entonces sólo este fluido podrá entrar en la ranura.

## Obtetos

También puede obtener información básica de un IMachineSlot también.  
No esperes que estos getters devuelvan mágicamente algo diferente de lo que configuras la ranura al crearla.

| Nombre            | Tipo   |
| ----------------- | ------ |
| nombre            | cadena |
| opcional          | pluma  |
| capacidad de pila | int    |