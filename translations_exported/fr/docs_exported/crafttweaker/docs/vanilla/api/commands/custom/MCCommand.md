# Commande MCC

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructeurs
```zenscript
new crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Paramètre | Type de texte                                                                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| amusant   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | Aucune description fournie |



## Méthodes
### est égal à

Type de retour: booléen

```zenscript
myMCCommand.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### hashCode

Type de retour: int

```zenscript
myMCCommand.hashCode();
```

### Exécuter

Type de retour: int

```zenscript
myMCCommand.run(contexte comme crafttweaker.api.commands.custom.MCCommandContext);
```

| Paramètre | Type de texte                                                                                      | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Contexte  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCCommand.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCCommand == o comme objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

