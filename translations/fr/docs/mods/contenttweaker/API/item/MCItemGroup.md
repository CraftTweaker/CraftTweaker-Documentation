# MCItemGroup

Un groupe d'articles (p.ex. Creative Tab) est un regroupement d'articles basé sur la catégorie.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Interfaces implémentées
MCItemGroup implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.format@@0 CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getPath

Obtient le chemin du groupe d'éléments. Le chemin est ce que vous utilisez dans l'expression crochet après la partie `<itemgroup:`.

Type de retour: chaîne de caractères

```zenscript
<itemgroup:misc>.getPath();
```

### Définir le nom de l'image de fond

Définit le nom de l'image de l'arrière-plan qui est utilisé pour cet onglet dans le menu créatif Retours: `Cet objet pour l'enchaînement`

Type de retour : [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| texture   | Chaîne de caractères | La texture à utiliser |


### setNoScrollbar

Supprime la barre de défilement du groupe d'objet dans l'inventaire créatif

 Renvoie : `Cet objet pour l'enchaînement`

Type de retour : [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Supprime le titre du groupe d'objet dans l'inventaire créatif

 Renvoie : `Cet objet pour l'enchaînement`

Type de retour : [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |
| chemin d'accès     | Chaîne de caractères | vrai        | Faux        |

