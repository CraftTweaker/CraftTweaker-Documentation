# Altar natural

## Paquete
```zenscript
mods.naturesaura.AltarAltar
```

## Metodos
- **Nombre de cadena**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) entrada** La entrada de los altares.
- **[ItemStack](/Vanilla/Items/IItemStack) salida** Los altares.
- **[Catalizador IIngrediente](/Vanilla/Variable_Types/IIngredient)** El bloque de catalizador que se coloca en uno de los cuatro bloques de esquina, puede ser nulo
- **int aura** La cantidad de Aura necesaria para completar la receta
- **int time** El proceso de tiempo toma ticks

## Adicional

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Altar.addRecipe(String name, IIngredient input, IItemStack output, IIngredient catalyst, int aura, int time)
```

## Eliminar

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Altar.removeRecipe(IItemStack output)
```