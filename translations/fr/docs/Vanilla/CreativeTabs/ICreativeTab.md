# Onglet ICreative

Un ICreativeTabObject représente un onglet d'inventaire créatif.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.creativetabs.ICreativeTab;`

## Obtention d'un tel objet

Vous pouvez récupérer un ICreativeTab dans le [Gestionnaire de tranches de l'onglet Créatif](/Vanilla/Brackets/Bracket_CreativeTab/).

## ZenGetters et ZenMethods sans paramètres

| Méthode ZenGetter/Zen | Type de retour       |
| --------------------- | -------------------- |
| searchBarWidth        | Indice               |
| Libellé de la table   | chaîne de caractères |
| setNoScrollBar()      | null (rien)          |
| setNoTitle()          | null (rien)          |

## Méthode Zen

#### Définir le nom de l'image d'arrière-plan

Utilise une chaîne de caractères (par exemple `"item_search.png"`).  
Renvoie vide (rien).

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```