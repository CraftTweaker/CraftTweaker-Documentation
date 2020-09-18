# MCToolType

Un type d'outils est utilisé pour identifier le type de blocs qu'un outil peut miner, ou inversement, quel type d'outil est requis pour miner un bloc donné.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Interfaces implémentées
MCToolType implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructeurs
Construit un objet ToolType. Si un des noms avec le même nom existe déjà, il pointera en interne vers le même toolType. Sinon, un nouveau nom est créé (c'est également vrai pour les parenthèses!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Paramètre | Type de texte        | Libellé           |
| --------- | -------------------- | ----------------- |
| Nom       | Chaîne de caractères | Le nom à utiliser |



## Méthodes
### getName

Récupère le nom de ce toolType. Le nom est ce qui est utilisé dans l'expression entre parenthèses après le type d'outil `<:`

Type de retour: chaîne de caractères

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Retourne le code de hachage de l'objet

Type de retour: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Récupère la représentation de la chaîne de caractères de ce type. Est différent de la chaîne de commande !

Type de retour: chaîne de caractères

```zenscript
<tooltype:pickaxe>.toString();
```


## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |
| Nom                | Chaîne de caractères | vrai        | Faux        |

## Opérateurs
### EQUALES

Compare si deux objets MCToolType sont égaux

```zenscript
<tooltype:pickaxe> == o en tant qu'Objet
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| Paramètre | Type de texte | Libellé       |
| --------- | ------------- | ------------- |
| o         | Objet         | L'autre objet |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | Faux          |

