# IData

L'interface IData est une interface générique pour gérer les données comme NBT. Vous pouvez lancer sur toutes les primitives (courte, double, string, int, ...) ainsi que sur certains tableaux vers IData. N'oubliez pas que, bien qu'ils offrent des fonctionnalités similaires, IData et leurs homologues ne sont PAS les mêmes, c'est pourquoi ils seront appelés types de données (e. . [crafttweaker.api.data.ByteData](/vanilla/api/data/ByteData)).

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.IData
```

## Méthodes
### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Type de retour : Liste&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myIData.asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myIData.asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Type de retour: chaîne de caractères

```zenscript
myIData.asString();
```

### contient

Vérifie si cette IData contient un autre IData, principalement utilisé dans les sous-classes de [fabricant. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), est le même qu'une vérification égale sur d'autres types IData

 Renvoie : `true si l'IData donné est contenu dans cet IData`

Type de retour: booléen

```zenscript
myIData.contains(données comme crafttweaker.api.data.IData);
myIData.contains("Affichage");
```

| Paramètre | Type de texte                                          | Libellé                                       |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données pour vérifier si elles sont contenues |


### Copie

Fait une copie de cet IData.

 IData est immuable par défaut, utilisez ceci pour créer une copie correcte de l'objet.

 Renvoie : `une copie de cet IData.`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myIData.copy();
```

### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Type de retour: octet

```zenscript
myIData.getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Type de retour: chaîne de caractères

```zenscript
myIData.getString();
```


