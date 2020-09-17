# Enchanteur

## Paquet

```zenscript
Importer mods.aether_legacy.Enchanteur;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// réparant les outils et les trucs
Enchanter.registerEnchantment(IItemStack réparation, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```