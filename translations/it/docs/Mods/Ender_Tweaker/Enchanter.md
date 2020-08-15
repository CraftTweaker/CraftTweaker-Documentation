# Incantatore

## Pacchetto

`import mods.enderio.Enchanter;`

## Metodi

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) output** The output enchantment.

**- [Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'elemento usato per rendere questo incantesimo.

**- int amountPerLevel** Il numero di elementi di input per livello di incantesimo.

**- doppio costMoltiplicatore** Usato per modificare quanto costoso è la ricetta.

## Addizione

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Rimozione

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```