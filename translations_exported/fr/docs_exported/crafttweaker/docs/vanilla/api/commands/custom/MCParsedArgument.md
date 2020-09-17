# Argument MC analysé

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCParsedArgument
```

## Méthodes
### est égal à

Type de retour: booléen

```zenscript
myMCParsedArgument.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedArgument.getRange();
```

### hashCode

Type de retour: int

```zenscript
myMCParsedArgument.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCParsedArgument.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCParsedArgument == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

