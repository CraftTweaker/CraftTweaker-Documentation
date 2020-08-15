# Miner la Baie

Vous pouvez échanger des objets contre des objets sur minebay.

## Échanges par défaut

- Argile durcie pour 1 x Émeraude
- Crâne pour 8x Émeraude
- Selle pour 4x Émeraude
- Œuf d'apparition (méta 100, ne fait rien) pour 8x Émeraude
- Armure de cheval en diamant pour 8x Diamant
- Bouteille d'enchantement pour 1x Lingots de Fer
- 4x Feux d'artifice pour 1x Lingots de Fer
- Livre enchanté Toucher de soie pour 8x Émeraude
- 2x Potion de Vision Nocturne (3:00) pour 1 x Émeraude
- Livre de recettes 1x Emeraude

## Enlèvement

## Supprimer les ordres correspondants.

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Supprime l'échange qui donne lieu à la potion de vision nocturne (avec n'importe quel montant)
mods. fm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// Supprime toutes les transactions
mods.cfm.MineBay.remove();
```

Actuellement ne prend en charge que la suppression par résultat d'échange.

## Ajout en cours

## Ajouter une négociation.

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack item, @Nonnull IItemStack currency);

// Ajoute une négociation pour 42 bâtons donnés 13 diamants
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>. ithAmount(13));
// Ajoute une négociation pour 16 pommes données 3 émeraudes
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>. ithAmount(3));
// Ajoute une négociation pour 1 carotte donnée 1 émeraude
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```