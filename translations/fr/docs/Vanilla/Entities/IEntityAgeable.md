# IEntityAgeable

Une entité âgée est une entité qui grandit au fil du temps, comme une vache.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import crafttweaker.entity.IEntityAgeable ;`

## Extension de [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable étend [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Cela signifie que toutes les fonctions disponibles pour [IEntities](/Vanilla/Entities/IEntityCreature/) sont également disponibles pour IEntityAgeable.

## Méthodes

### ZenGetters/Setters

| ZenGetter       | ZenSetter             | Type de texte |
| --------------- | --------------------- | ------------- |
| Âge grandissant | Âge grandissant       | Indice        |
|                 | format@@0 scaleForAge | booléen       |

### Méthodes Zen

#### ajouter l'âge

Les méthodes attendent un int et la seconde méthode un bool optionnel.  
Les deux méthodes ne retournent rien.  
Normalement, la seconde méthode fait la même chose que la première avec false comme argument forcé, qui peut cependant différer pour les implémentations de mod.

```zenscript
entAgObj.ageUp(int secondes, @Optional boolean forced);
entAgObj.addGrowth(int secondes);
```