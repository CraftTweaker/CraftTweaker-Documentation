# MCItemGroup

An item Group (a.k.a. Creative Tab) is a grouping of items based on category.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Implemented Interfaces
MCItemGroup implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getPath

Gets the path of the item group. The path is what you use in the Bracket Expression after the `<itemgroup:` part.

Return type: String

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

Sets the image name of the Background that is used for this tab in the creative menu Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| texture   | Chaîne de caractères | The texture to be used |


### setNoScrollbar

Removes the scrollbar of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Removes the title of the item Group in the creative inventory

 Returns: `This object for chaining`

Return type: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Propriétés

| Nom                | Type de texte        | Has Getter | Has Setter |
| ------------------ | -------------------- | ---------- | ---------- |
| Chaîne de commande | Chaîne de caractères | vrai       | Faux       |
| chemin d'accès     | Chaîne de caractères | vrai       | Faux       |

