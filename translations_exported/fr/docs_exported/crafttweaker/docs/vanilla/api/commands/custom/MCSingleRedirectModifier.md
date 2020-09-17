# Modificateur de redirection MCSingle

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Constructeurs
```zenscript
new crafttweaker.api.commands.custom.MCSingleRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Paramètre | Type de texte                                                                                                                                                                                                                             | Libellé                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| amusant   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Aucune description fournie |



## Méthodes
### appliquer

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(contexte comme crafttweaker.api.commands.custom.MCCommandContext);
```

| Paramètre | Type de texte                                                                                      | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Contexte  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCSingleRedirectModifier.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### hashCode

Type de retour: int

```zenscript
myMCSingleRedirectModifier.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCSingleRedirectModifier.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCSingleRedirectModifier == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

