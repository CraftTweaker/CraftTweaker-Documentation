# Electrolizador

## Paquete

```zenscript
importar mods.ic2.ClassicElectrolyzer;
```

## Metodos

### Añadir ambas recetas

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(salida ItemStack, entrada ItemStack, energía de int);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** Tiene que ser una Pila de artículos, ningún tipo de artículo u otras cosas.
- **energía intacta** Energía total recibida de la parte de descarga y energía total utilizada para cargar parte de la receta.

### Añadir Receta de Carga

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(salida ItemStack, entrada ItemStack, energía de int);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** Tiene que ser una Pila de artículos, ningún tipo de artículo u otras cosas.
- **energía intacta** Energía total utilizada en la receta.

### Añadir Receta de Descarga

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(salida ItemStack, entrada ItemStack, energía de int);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[ItemStack](/Vanilla/Items/IItemStack/) entrada** Tiene que ser una Pila de artículos, ningún tipo de artículo u otras cosas.
- **energía intacta** Energía total recibida de la receta.

### Eliminar

Simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.

