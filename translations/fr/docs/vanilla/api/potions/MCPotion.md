# MCPotion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotion
```

## Implemented Interfaces
MCPotion implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getNamePrefixed

Returns String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | No description provided |



## Propriétés

| Nom                | Type de texte                                                                                       | Has Getter | Has Setter |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Chaîne de commande | Chaîne de caractères                                                                                | vrai       | Faux       |
| effects            | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | vrai       | Faux       |
| hasInstantEffect   | boolean                                                                                             | vrai       | Faux       |

