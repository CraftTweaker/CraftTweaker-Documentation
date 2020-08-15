# format@@0 MaterialPartalizedNameSupplier

Vous pouvez créer un MaterialPartLocalizedNameSupplier formant un objet [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , qui sera ensuite utilisé à chaque demande.

## Importation de la classe

Si vous avez besoin d'importer la classe, voici :

```zenscript
Importer mods.contenttweaker.MaterialPartLocalizedNameSupplier;
```

## Méthodes statiques

Les méthodes statiques peuvent être appelées sur le paquet, pas sur les instances de la classe.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```