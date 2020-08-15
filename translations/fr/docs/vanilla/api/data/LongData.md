# LongData



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.LongData
```

## Interfaces implémentées
LongData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Constructeurs
```zenscript
new crafttweaker.api.data.LongData(internal as long);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| interne   | long          | Aucune description fournie |



## Méthodes
### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Retourne la liste<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
800000000.asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
800000000.asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Retourne une chaîne de caractères

```zenscript
800000000.asString();
```

### contient

Vérifie si cette IData contient un autre IData, principalement utilisé dans les sous-classes de [fabricant. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), est le même qu'une vérification égale sur d'autres types IData

Retourne un booléen

```zenscript
800000000.contains(données comme crafttweaker.api.data.IData);
800000000.contains("Affichage");
```

| Paramètre | Type de texte                                          | Libellé                                       |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données pour vérifier si elles sont contenues |


### Copie

Fait une copie de cet IData.

 IData est immuable par défaut, utilisez ceci pour créer une copie correcte de l'objet.

 Renvoie : `une copie de cet IData.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
800000000.copie();
```

### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Renvoie l'octet

```zenscript
800000000.getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Retourne une chaîne de caractères

```zenscript
800000000.getString();
```


