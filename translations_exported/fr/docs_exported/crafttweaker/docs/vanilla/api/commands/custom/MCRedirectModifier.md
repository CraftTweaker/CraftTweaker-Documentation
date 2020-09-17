# Modificateur de redirection MCC

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Constructeurs
```zenscript
new crafttweaker.api.commands.custom.MCRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| Paramètre | Type de texte                                                                                                                                                                                                                                                           | Libellé                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| amusant   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | Aucune description fournie |



## Méthodes
### appliquer

Type de retour : Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(contexte comme crafttweaker.api.commands.custom.MCCommandContext);
```

| Paramètre | Type de texte                                                                                      | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Contexte  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCRedirectModifier.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### hashCode

Type de retour: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCRedirectModifier.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCRedirectModifier == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

