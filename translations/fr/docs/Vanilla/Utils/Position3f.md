# Position 3f

Une position dans Minecraft se compose de 3 valeurs : x, y et z.  
Un objet Position3f stocke une position en utilisant ces trois valeurs.

## Importation du paquet

Il peut être nécessaire pour vous de [importer](/AdvancedFunctions/Import/) le paquet si vous rencontrez des problèmes (comme lancer un [tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.util.Position3f ;`

## Obtention d'un objet Position3f

Vous pouvez obtenir un tel objet en utilisant :

- The `position` ZenGetter on a [IPlayer](/Vanilla/Players/IPlayer/) object
- Le constructeur Position3f ci-dessous
- Le [IBlockPos](/Vanilla/World/IBlockPos/) lanceur de position 3f.

## constructeur Position3f

Vous pouvez créer un objet Position3f vous-même en utilisant la méthode suivante :

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

La première méthode vous permet de créer une position aux coordonnées données.

## ZenGetters et ZenSetters

| ZenGetter | ZenSetter | Libellé                            |
| --------- | --------- | ---------------------------------- |
| x         | x         | Renvoie la valeur x de la position |
| y         | y         | Renvoie la valeur y de la position |
| Z         | Z         | Renvoie la valeur z de la position |

## Casting comme IBlockPos

You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos/) Object: Remember, for casting you need to [import](/AdvancedFunctions/Import/) the type you want to cast to unless you use the full name.

```zenscript
posThree.asBlockPos();
posTrois comme IBlockPos;
```