# MapData



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.MapData
```

## Interfaces implémentées
MapData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructeurs
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Paramètre | Type de texte                                                  | Libellé                    |
| --------- | -------------------------------------------------------------- | -------------------------- |
| carte     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Aucune description fournie |



## Méthodes
### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Retourne la liste<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
myMapData.asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Retourne une chaîne de caractères

```zenscript
myMapData.asString();
```

### contient

Vérifie si la carte contient la clé donnée.

Retourne un booléen

```zenscript
myMapData.contains(key as String);
myMapData.contains("Bonjour");
```

| Paramètre | Type de texte        | Libellé             |
| --------- | -------------------- | ------------------- |
| Touche    | Chaîne de caractères | La clé à rechercher |


### Copie

Fait une copie de cet IData.

 IData est immuable par défaut, utilisez ceci pour créer une copie correcte de l'objet.

 Renvoie : `une copie de cet IData.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.copy();
```

### obtenir

Récupère la valeur associée à la clé

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Bonjour");
```

| Paramètre | Type de texte        | Libellé             |
| --------- | -------------------- | ------------------- |
| Touche    | Chaîne de caractères | La clé à rechercher |


### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Renvoie l'octet

```zenscript
myMapData.getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Retourne une chaîne de caractères

```zenscript
myMapData.getString();
```

### fusionner

Fusionne cette carte et l'autre carte. Si les entrées de cette carte et l'autre carte partagent les valeurs sont essayées d'être fusionnées. Si cela ne fonctionne pas, alors la valeur de l'autre carte est utilisée.

Retourne [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(autre que crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Paramètre | Type de texte                                              | Libellé        |
| --------- | ---------------------------------------------------------- | -------------- |
| autres    | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | L'autre carte. |


### mettre

Ajoute la valeur de la clé donnée ou crée une nouvelle entrée si elle n'existait pas avant.

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Paramètre | Type de texte                                          | Libellé                                 |
| --------- | ------------------------------------------------------ | --------------------------------------- |
| Touche    | Chaîne de caractères                                   | La clé pour laquelle définir la valeur. |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à définir.                    |


### putAll

Ajoute toutes les entrées de la carte donnée à celle-ci. Peut remplacer les clés existantes.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Bonjour", Item: "Bedrock"});
```

| Paramètre | Type de texte                                                  | Libellé                                    |
| --------- | -------------------------------------------------------------- | ------------------------------------------ |
| carte     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Les autres entrées à ajouter à cette carte |


### Enlever

Supprime l'entrée avec la clé donnée de la carte

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Paramètre | Type de texte        | Libellé                        |
| --------- | -------------------- | ------------------------------ |
| Touche    | Chaîne de caractères | La clé de l'entrée à supprimer |



## Propriétés

| Nom     | Type de texte  | A un Getter | A un Setter |
| ------- | -------------- | ----------- | ----------- |
| isEmpty | boolean        | vrai        | Faux        |
| keySet  | Régler<String> | vrai        | Faux        |
| taille  | Indice         | vrai        | Faux        |

## Opérateurs
### AJOUTER

Ajoute toutes les entrées de l'IData donnée à cette entrée

```zenscript
myMapData + données comme crafttweaker.api.data.IData
```

| Paramètre | Type de texte                                          | Libellé                    |
| --------- | ------------------------------------------------------ | -------------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Aucune description fournie |

## Pistolet

| Type de résultat                                               | Est implicite |
| -------------------------------------------------------------- | ------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | vrai          |

