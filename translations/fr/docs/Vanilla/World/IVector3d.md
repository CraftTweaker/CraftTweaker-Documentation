# IVector3d

Un objet Vector3d est un vecteur qui utilise trois doubles pour les directions.  
Ils ont plusieurs méthodes utilitaires et getters.

## Importation de la classe

Il pourrait être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.world.IVector3d`

## Création d'un nouvel objet IVector3d

Si vous avez un jour besoin de créer un nouvel objet IVector3d, vous pouvez utiliser cette méthode :

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## ZenGetters

| ZenGetter | Type de texte |
| --------- | ------------- |
| x         | double        |
| y         | double        |
| Z         | double        |
| normalisé | IVector3d     |

## Méthodes Zen

- double dotProduct(IVector3d autre);
- IVector3d crossProduct(IVector3d autre) ;
- IVector3d soustract(IVector3d autre) ;
- IVector3d add(IVector3d autre);
- double distanceTo(IVector3d autre);
- Échelle IVector3d (double facteur) ;