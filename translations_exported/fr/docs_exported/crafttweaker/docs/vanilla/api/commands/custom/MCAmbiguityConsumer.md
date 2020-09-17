# MCAmbiguityConsumer

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Interface fonctionnelle

Cette classe est une interface fonctionnelle. Cela signifie que vous pouvez utiliser la notation lambda pour créer une instance de celle-ci. La notation lambda ressemble à :
```zenscript
(parent, enfant, frère, entrées) =>{}
```
## Méthodes
### ambigu

```zenscript
myMCAmbiguityConsumer.ambiguous(parent as crafttweaker.api.commands.custom.MCCommandNode, child as crafttweaker.api.commands.custom.MCCommandNode, soling as crafttweaker.api.commands.custom.MCCommandNode, inputs as Collection<String>);
```

| Paramètre  | Type de texte                                                                                | Libellé                    |
| ---------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| parent     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |
| enfant     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |
| fraternité | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |
| inputs     | Collection&lt;String&gt;                                                         | Aucune description fournie |



