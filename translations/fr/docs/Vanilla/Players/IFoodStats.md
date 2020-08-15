# IFoodStats

L'interface IPlayer vous permet de voir certaines informations sur les statistiques de nourriture d'un joueur.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.player.IFoodStats ;`

## ZenGetter/ZenSetters

| ZenGetter               | ZenSetter               | Type de texte |
| ----------------------- | ----------------------- | ------------- |
| Niveau de la nourriture | Niveau de la nourriture | Indice        |
| niveau de saturation    | niveau de saturation    | flottant      |
| Nourriture              |                         | boolean       |

## Méthodes Zen

#### Ajout de statistiques

Fonction du Vide. Prend une int et un float en tant que paramètres intpés.

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

Fonction du Vide. Prend un objet [IPlayer](/Vanilla/Players/IPlayer/) en tant que paramètre d'entrée.

```zenscript
stats.onUpdate(lecteur IPlayer);
```

#### asNBT

Retourne un objet IData représentant les foodStats.

```zenscript
stats.asNBT();
stats comme crafttweaker.data.IData ;
```

#### Ajouter Épuisement

Fonction du Vide. prend un float comme paramètre d'entrée.

```zenscript
stats.addExhaustion(épuisement à virgule flottante);
```