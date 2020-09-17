# Définition IBlock

Les objets IBlockDefinition fournissent des informations supplémentaires sur les blocs.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IBlockDefinition;`

## Appel d'un objet IBlockDefinition

* Utilisation de la `définition` ZenGetter sur un objet [IBlock](/Vanilla/Blocks/IBlock/).

## Appel d'une liste IBlockDefinition

* Utiliser `game.blocks` pour obtenir une liste de toutes les définitions de blocs dans le jeu.

## ZenGetters/ZenSetters

| ZenGetter         | ZenSetter                 | Que fait-il                                         | Type de texte                                           |
| ----------------- | ------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
|                   | format@@0 canSpawnInBlock | Retourne si une entité peut apparaître dans ce bloc | booléen                                                 |
| Onglet créatif    | Onglet créatif            |                                                     | [Onglet ICreative](/Vanilla/CreativeTabs/ICreativeTab/) |
| État par défaut   |                           |                                                     | [État de l'IBlock](/Vanilla/Blocks/IBlockState/)        |
|                   | Slipperiness par défaut   |                                                     | flottant                                                |
| id                |                           | Renvoie l'ID du bloc                                | chaîne de caractères                                    |
| nomdeaffichage    |                           | Renvoie le nom d'affichage du bloc                  | chaîne de caractères                                    |
|                   | dureté                    |                                                     | Indice                                                  |
| Niveau de récolte |                           | Renvoie le niveau de récolte du bloc                | Indice                                                  |
| Outil de récolte  |                           | Renvoie l'outil de récolte du bloc                  | chaîne de caractères                                    |
|                   | Opacité de la lumière     |                                                     | Indice                                                  |
|                   | Niveau de lumière         |                                                     | Indice                                                  |
|                   | Résistance                |                                                     | Indice                                                  |
| unlocalizedName   |                           | Renvoie le nom non localisé du bloc                 | chaîne de caractères                                    |
| tickaléatoirement | tickaléatoirement         |                                                     | booléen                                                 |

## Méthodes Zen

### Définir le bloc incassable

N'utilise aucun paramaeters.  
Ne retourne rien.  
Fait la même chose que `dureté = -1 ;`

```zenscript
defObj.setUnbreakable();
```

### Obtenir un taux de ticket dans un monde spécifique

Utilise un objet [IWorld](/Vanilla/World/IWorld/) .  
Renvoie un int.

```zenscript
defObj.getTickRate(IWorld world);
```

### Vérifie si le bloc peut être placé sur un autre bloc

Utilise un objet [IWorld](/Vanilla/World/IWorld/) , un objet [IBlockPos](/Vanilla/World/IBlockPos/) et, dépendant de la méthode utilisée, aussi un objet [IFacing](/Vanilla/World/IFacing/) .  
Renvoie un bool.

```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```

### Attrape la glissance du bloc

Utilise un [IBlockState](/Vanilla/Blocks/IBlockState/), un objet [IBlockAccess](/Vanilla/World/IBlockAccess/) , un [IBlockPos](/Vanilla/World/IBlockPos/) et un objet [IEntity](/Vanilla/Entities/IEntity/) facultatif.  
Renvoie un flotteur.

```zenscript
defObj.getSlipperiness(état IBlockState), IBlockAccess pos, @Entité facultative ;
```

### Définir le niveau de récolte du bloc

Utilise une chaîne de caractères et un int.  
Renvoie vide (rien).

```zenscript
defObj.setHarvestLevel(chaîne toolclass, int level);
```

### Obtenir un état de bloc par métadonnées

Utilise un int.  
Renvoie un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```