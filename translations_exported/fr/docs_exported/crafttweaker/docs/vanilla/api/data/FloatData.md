# Données flottantes



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.FloatData
```

## Interfaces implémentées
FloatData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Constructeurs
```zenscript
new crafttweaker.api.data.FloatData(internal as float);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| interne   | flottant      | Aucune description fournie |



## Méthodes
### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Type de retour : Liste&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
8.5.asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
8.5.asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Type de retour: chaîne de caractères

```zenscript
8.5.asString();
```

### contient

Vérifie si cette IData contient un autre IData, principalement utilisé dans les sous-classes de [fabricant. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), est le même qu'une vérification égale sur d'autres types IData

 Renvoie : `true si l'IData donné est contenu dans cet IData`

Type de retour: booléen

```zenscript
8.5.contains(données comme crafttweaker.api.data.IData);
8.5.contains("Affichage");
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
8.5.copie();
```

### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Type de retour: octet

```zenscript
8.5.getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Type de retour: chaîne de caractères

```zenscript
8.5.getString();
```


