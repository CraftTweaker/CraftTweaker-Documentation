# SAG Mill

## Paquet

`Importer mods.enderio.SagMill;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/)[] sortie** Les résultats de la recette.
- **float[] chances** La chance que cet élément apparaisse. Doit avoir la même longueur que la sortie.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **BonusType de chaîne de caractères** Ceci affecte le fonctionnement des Balles. Peut être NONE (pas de bonus), MULTIPLY_OUTPUT (peut augmenter les chances > 1.0), et CHANCE_ONLY (limite de chance de 1.0).
- **int EnergyCost** Combien FE la recette utilise. Par défaut, 5000.
- **float xp** Le xp est accordé à partir de cette recette. Ne peut pas être négatif.

## Ajouter

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] sortie, float[] chances, entrée IIngredient, @Optional String bonusType, @Optional int energyCost, @Optional int float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## Retirer

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack input);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```