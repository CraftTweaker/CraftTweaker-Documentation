# MCAxisAlignedBB

Un objet Boîte-limite alignée sur l'axe de MineCraft vous permet de changer les bordures de la zone de [bloc](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) en une forme de cuboïde donnée.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.AxisAlignedBB ;`

## Appel d'un objet MCAxisAlignedBB

You can get such an object using a [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` Property.  
Alternatively, you can use this package to create a new MCAxisAlignedBB object:

```zenscript
AxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxY, double maxZ) ;
```

Tous les paramètres de cette fonction sont doublés entre 0 et 1!

## Propriétés Zen

Vous pouvez récupérer et définir chaque propriété en utilisant `getProperty()` ou `object.property`.

| Propriété Zen | Type de texte |
| ------------- | ------------- |
| min X         | double        |
| minY          | double        |
| minZ          | double        |
| maxX          | double        |
| maxi          | double        |
| maxZ          | double        |