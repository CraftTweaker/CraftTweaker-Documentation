# Explosion explosive

L'événement ExplosionDetonate est tiré peu avant le début d'une explosion. Il ne peut pas être annulé.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. xplosionDetonateEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements ExplosionDetonate implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter           | ZenSetter | Type de texte                                  |
| ------------------- | --------- | ---------------------------------------------- |
| `Entités affectées` |           | [IEntité](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions` |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
