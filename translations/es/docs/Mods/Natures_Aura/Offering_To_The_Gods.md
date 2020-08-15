# Ofrecer a los dioses

## Paquete
```zenscript
mods.naturesaura.OfferingOferta
```

## Metodos
- **Nombre de cadena**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) entrada** La oferta
- **int inputAamount** La cantidad de artículos requeridos para la entrada. Tenga en cuenta que esto significa que la cantidad de la variable de entrada es ignorada
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) inicia el Artículo** el objeto necesario para comenzar la oferta
- **[ItemStack](/Vanilla/Items/IItemStack) obtiene** el regalo de la oferta

## Adicional

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.addRecipe(String name, IIngredient input, int inputAmount, IIngredient startItem, IItemStack output)
```

## Eliminar

```zenscript
mods.naturesaura.AnimalSpawnermods.naturesaura.Offering.removeRecipe(IItemStack output)
```