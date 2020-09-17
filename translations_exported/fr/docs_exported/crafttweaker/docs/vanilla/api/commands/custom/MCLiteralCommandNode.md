# Liste des nœuds du cours

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Interfaces implémentées
MCLiteralCommandNode implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Méthodes
### createBuilder

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
monMCLiteralCommandNode.createBuilder();
```

### est égal à

Type de retour: booléen

```zenscript
monMCLiteralCommandNode.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### getLiteral

Type de retour: chaîne de caractères

```zenscript
monMCLiteralCommandNode.getLiteral();
```

### hashCode

Type de retour: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Type de retour: booléen

```zenscript
monMCLiteralCommandNode.isValidInput(input as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| input     | Chaîne de caractères | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
monMCLiteralCommandNode.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCLiteralCommandNode == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

