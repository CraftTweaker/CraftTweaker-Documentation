# Lecteur de chaînes de caractères MCImmutable

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCImmutableStringReader
```

## Méthodes
### canRead

Type de retour: booléen

```zenscript
myMCImmutableStringReader.canRead();
```


Type de retour: booléen

```zenscript
myMCImmutableStringReader.canRead(arg0 comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| arg0      | Indice        | Aucune description fournie |


### getCursor

Type de retour: int

```zenscript
myMCImmutableStringReader.getCursor();
```

### getRead

Type de retour: chaîne de caractères

```zenscript
myMCImmutableStringReader.getRead();
```

### Rester en cours

Type de retour: chaîne de caractères

```zenscript
myMCImmutableStringReader.getRemaining();
```

### Obtenir la longueur restante

Type de retour: int

```zenscript
myMCImmutableStringReader.getRemainingLength();
```

### getString

Type de retour: chaîne de caractères

```zenscript
myMCImmutableStringReader.getString();
```

### Durée totale de lecture

Type de retour: int

```zenscript
monMCImmutableStringReader.getTotalLength();
```

### coup d'œil

Type de retour: caractère

```zenscript
myMCImmutableStringReader.peek();
```


Type de retour: caractère

```zenscript
myMCImmutableStringReader.peek(arg0 comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| arg0      | Indice        | Aucune description fournie |



