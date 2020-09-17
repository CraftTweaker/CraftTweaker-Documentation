# MCTextComponent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Méthodes
### appendSibling

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(composant comme crafttweaker.api.util.text.MCTextComponent);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie |


### appendText

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(text as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| texte     | Chaîne de caractères | Aucune description fournie |


### copier/copier brute

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### Copier en profondeur

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Type de retour: chaîne de caractères

```zenscript
myMCTextComponent.getString();
```

### format@@0 getStringTuncated

Type de retour: chaîne de caractères

```zenscript
myMCTextComponent.getStringTruncated(maxLen comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| maxLen    | Indice        | Aucune description fournie |


### getUnformattedComponentText

Type de retour: chaîne de caractères

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style comme crafttweaker.api.util.text.MCStyle);
```

| Paramètre | Type de texte                                                        | Libellé                    |
| --------- | -------------------------------------------------------------------- | -------------------------- |
| style     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Aucune description fournie |



## Propriétés

| Nom                      | Type de texte                                                                                                 | A un Getter | A un Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| texte formaté            | Chaîne de caractères                                                                                          | vrai        | Faux        |
| frères et soeurs         | Liste&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | vrai        | Faux        |
| unformattedComponentText | Chaîne de caractères                                                                                          | vrai        | Faux        |

## Opérateurs
### AJOUTER

```zenscript
myMCTextComponent + composant en tant que crafttweaker.api.util.text.MCTextComponent
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie |
### ATTENTION

```zenscript
myMCTextComponent ~ composant en tant que crafttweaker.api.util.text.MCTextComponent
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie |
### SHL

```zenscript
myMCTextComponent << composant en tant que crafttweaker.api.util.text.MCTextComponent
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | Faux          |

