# Máquina de enlatado

## Paquete

```zenscript
importar mods.ic2.CanningMachine;
```

### Lista de ids de efecto
* 1: Hambre (Carne de Rotten) (80% de oportunidades)
* 2: Veneno (Ojo de araña)
* 3: Cazador (Pollo Raíz) (30% de probabilidad)
* 4: Manzana Dorada
* 5: Manzana Notch
* 6: Fruta de Corus

## Métodos

### Registrar artículos para Efecto (int id, Itemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, Itemstack... entradas);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... inputs** Los insumos que obtienen los alimentos pueden efectar.
- **int id** El effectID que desea aplicar a los elementos especificados. Los ids de efecto válido son los siguientes:

### Eliminar Id de efecto (int id, boolean deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** El effectID que desea eliminar del relleno. Consulte la parte superior para ver los identificadores de efectos válidos.
- **borrado booleano** Si eliminar elementos con ese efecto también de latas archivadas. Actualmente este booleano puede no funcionar.

### Registrar valor de combustible (int fuelValue, entrada de ItemStack)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, ItemStack entrada);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Formerly tenía un valor de 2548.
```

- **int fuelValue** Cuánto combustible vale el elemento especificado.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** El elemento para registrar ese valor de combustible. Incluso puede ser elementos con valores existentes, en cuyo caso se sobrescribirá el valor previamente especificado. Nota: debe ser una pila de objetos, no se permiten oredicitos.

### Registrar Fuel Multiplier (float fuelMultiplier, ItemStack input)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, entrada ItemStack);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float fuelMultiplier** ¿Qué porcentaje aumenta el valor de entrada anterior. por ejemplo 1 = 100%, 0.5 = 50%, 0 = 0%, ect.
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** El elemento para registrar ese multiplicador de combustible. Incluso puede ser objetos con multiplicadores existentes, en cuyo caso se sobrescribirá el multiplicador previamente especificado. Nota: debe ser una pila de objetos, no se permiten oredicitos.

### Eliminar Petróleo de artículo (pila de ítem)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(entrada IItemStack);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** El elemento a eliminar de ser una entrada para el lateral de combustible.

Vea [aquí](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) para obtener información sobre cómo funcionan las latas de combustible.

### Añadir receta de enlatado (salida ItemStack, relleno IIngrediente, contenedor ItemStack)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(salida IIItemStack, relleno IIngredient, contenedor ItemStack);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** El producto
- **[Contenedor](/Vanilla/Items/IItemStack/) de ItemStack** La pila de elementos a ser "llenada"
- **[rellenador](/Vanilla/Variable_Types/IIngredient/) IIngrediente** El ingrediente con el que se llena en el contenedor

