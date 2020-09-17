# Ritual del Bosque

## Paquete
```zenscript
mods.naturesaura.TreeRitualTreeRitual
```

## Metodos
- **Nombre de cadena**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) plingType** La representación de objetos del retoño que necesita ser colocado y crecido en un árbol
- **[ItemStack](/Vanilla/Items/IItemStack) salida** Resultado de los rituales
- **init time** The time the process takes in ticks
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) elementos** Los elementos requeridos para el ritual

## Adicional

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## Eliminar

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```