# Extractor de Tierra Raro

## Paquete

```zenscript
importar mods.ic2.RareEarthExtractor;
```

## Método

- **valor flotante**
- **[IItemStack](/Vanilla/Items/IItemStack/)... entradas** Puede tener más de una especificada para la entrada. Si es así, todos los elementos especificados dan el mismo valor especificado.

### Añadir entradas raras de la Tierra

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(valor flotante, ItemStack... entrada);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```