# IEntityAnimal

Un animal.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityAnimal ;`

## Étendant [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal étend [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Cela signifie que toutes les fonctions disponibles pour [IEntities](/Vanilla/Entities/IEntityAgeable/) sont également disponibles pour IEntityAnimal.

## Méthodes

### ZenGetters/Setters

| ZenGetter        | Type de texte                                       |
| ---------------- | --------------------------------------------------- |
| Cause de l'amour | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove         | booléen                                             |

### Méthodes Zen

#### vérifier si un objet peut être utilisé pour élever l'animal

La méthode attend une [IItemStack](/Vanilla/Items/IItemStack/).  
Renvoie une bool.

```zenscript
entAnObj.isBreedingItem(IItemStack itemStack) ;
```

#### Définir ou réinitialiser en amour

Première méthode attend un objet [IPlayer](/Vanilla/Players/IPlayer/) optionnel, rien de second.  
Ne retourne rien.

```zenscript
entAnObj.setInLove(@Joueur IPlayer facultatif);
entAnObj.resetInLove();
```

#### Vérifie si un autre animal peut s'accoupler avec celui-ci.

La méthode attend un objet IEntityAnimal.  
Renvoie un bool.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```