# Bahía Mina

Puedes intercambiar por objetos en minebay.

## Operaciones por defecto

- Arcilla endurecida para 1x Esmeralda
- Cráneo de 8x Esmeralda
- Jubilar para 4x Esmeralda
- Spawn de Huevo (meta 100, no hace nada) para 8x Esmeralda
- Armadura de Diamante para Diamante de 8x Diamante
- Bottle o' encantador para 1x Lingote de Hierro
- Fuegos artificiales 4x para lingote de hierro 1x
- Libro de Toque de Seda encantado para 8x Esmeralda
- Poción de visión nocturna 2x (3:00) para 1x Esmeralda
- Libro de recetas de 1x Esmeralda

## Eliminando

## Eliminar operaciones coincidentes.

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Elimina el intercambio resultante en la poción de visión nocturna (con cualquier cantidad)
mods. fm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// Elimina todos los intercambios
mods.cfm.MineBay.remove();
```

Actualmente sólo soporta la eliminación por resultado de la operación.

## Agregando

## Añadir una operación.

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull ItemStack item, @Nonnull ItemStack currency);

// Agrega un intercambio por 42 sticks dado 13 diamantes
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>. ithAmount(13));
// Agregar un intercambio por 16 manzanas dado 3 esmeraldas
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>. ithAmount(3));
// Agregar un intercambio por 1 zanahoria dada 1 esmeralda
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```