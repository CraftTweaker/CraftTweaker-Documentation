# Gestionnaire de fourchettes de matériaux

Le gestionnaire de supports de matériaux vous donne accès aux pièces du jeu. Il est seulement possible de faire enregistrer des Material Parts dans le jeu, donc vous devez faire attention à l'ordre de chargement des scripts.

Les pièces de matériaux sont référencées dans le gestionnaire de fourchettes de pièce de cette façon :

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Si la pièce de matériau est trouvée, cela retournera un objet MaterialPartDefinition.  
Ceci est un objet qui agit les deux, une [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) ainsi qu'un objet [IItemStack](/Vanilla/Items/IItemStack/) , de sorte que les méthodes des deux interfaces fonctionnent sur la définition retournée.