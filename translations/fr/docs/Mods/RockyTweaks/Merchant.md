# Marchand

## Commandes

Les commandes suivantes sont ajoutées pour récupérer des informations sur les professions marchandes & carrures disponibles :

- `professions marchandes /ct` - donne un log de professions marchandes valides
- `carrières de marchand /ct [profession]` - donne un journal de carrières valides pour tout ou la profession spécifiée

## Paquet

`Marchand`

## Ajouter

Les métiers peuvent être ajoutés à une profession marchande spécifique & aidant.

```zenscript
// addTrade(String profession, carrière à chaînes, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Retirer

La suppression du commerce marchand n'est actuellement pas possible.
