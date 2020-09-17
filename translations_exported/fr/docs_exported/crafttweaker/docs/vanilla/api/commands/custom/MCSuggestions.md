# MCSuggestions

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Méthodes
### créer

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(commande comme String, suggestions comme Collection<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Paramètre   | Type de texte                                                                                                            | Libellé                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| commande    | Chaîne de caractères                                                                                                     | Aucune description fournie |
| suggestions | Collection&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Aucune description fournie |


### vide

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### est égal à

Type de retour: booléen

```zenscript
myMCSuggestions.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### getList

Type de retour : Liste&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Type de retour: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Type de retour: booléen

```zenscript
myMCSuggestions.isEmpty();
```

### fusionner

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(commande comme String, entrée comme Collection<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Paramètre | Type de texte                                                                                                              | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| commande  | Chaîne de caractères                                                                                                       | Aucune description fournie |
| input     | Collection&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCSuggestions.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCSuggestions == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

