# MCStyle

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructeurs
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Méthodes
### est égal à

Type de retour: booléen

```zenscript
myMCStyle.equals(other as Object);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| autres    | Objet         | Aucune description fournie |


### getBold

Type de retour: booléen

```zenscript
myMCStyle.getBold();
```

### getFontId

Type de retour : [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Obtenir l'insertion

Type de retour: chaîne de caractères

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Type de retour: booléen

```zenscript
myMCStyle.getItalic();
```

### format@@0 getObfuscated

Type de retour: booléen

```zenscript
myMCStyle.getObfuscated();
```

### format@@0 getStrikethrough

Type de retour: booléen

```zenscript
myMCStyle.getStrikethrough();
```

### devenez souligné

Type de retour: booléen

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Type de retour: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Si ce style est vide ou non (hérite de tout le parent).

Type de retour: booléen

```zenscript
myMCStyle.isEmpty();
```

### FugeStyle

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style comme crafttweaker.api.util.text.MCStyle);
```

| Paramètre | Type de texte                                                        | Libellé                    |
| --------- | -------------------------------------------------------------------- | -------------------------- |
| style     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Aucune description fournie |


### setBold

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| boldIn    | Boolean       | Aucune description fournie |


### définir la couleur

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formatage comme crafttweaker.api.text.TextFormatting);
```

| Paramètre     | Type de texte                                                                 | Libellé                    |
| ------------- | ----------------------------------------------------------------------------- | -------------------------- |
| mise en forme | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Aucune description fournie |



Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| couleur   | Indice        | Aucune description fournie |


### setFontId

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(emplacement comme emplacement crafttweaker.api.util.MCResourceLocation);
```

| Paramètre    | Type de texte                                                                              | Libellé                    |
| ------------ | ------------------------------------------------------------------------------------------ | -------------------------- |
| Localisation | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Aucune description fournie |


### format@@0 setFormatting

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(mise en forme comme crafttweaker.api.text.TextFormatting);
```

| Paramètre     | Type de texte                                                                 | Libellé                    |
| ------------- | ----------------------------------------------------------------------------- | -------------------------- |
| mise en forme | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Aucune description fournie |


### setInsertion

Définir un texte à insérer dans le chat lorsque le composant est cliqué avec la touche Maj

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion en tant que String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| insertion | Chaîne de caractères | Aucune description fournie |


### setItalic

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(italique comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| italic    | Boolean       | Aucune description fournie |


### format@@0 setObfuscated

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfusqué comme Boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| obfusqué  | Boolean       | Aucune description fournie |


### setStrikethrough

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough as Boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| barré     | Boolean       | Aucune description fournie |


### soulignée

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(souligné comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| souligné  | Boolean       | Aucune description fournie |



Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(souligné comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| souligné  | boolean       | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCStyle.toString();
```


