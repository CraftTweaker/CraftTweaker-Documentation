# format@@0 MaterialPartColorSupplier

Vous pouvez créer un MaterialPartColorSupplier pour former un objet [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) qui sera ensuite utilisé à chaque demande.

## Importation de la classe

Si vous avez besoin d'importer la classe, voici :

```zenscript
Importer mods.contenttweaker.MaterialPartColorSupplier;
```

## Méthodes statiques

Les méthodes statiques peuvent être appelées sur le paquet, pas sur les instances de la classe.

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart materialPart);
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```