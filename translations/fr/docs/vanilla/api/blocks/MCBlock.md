# MCBlock

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlock
```

## Méthodes
### format@@0 canSpawnInBlock

Returns boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Propriétés

| Nom            | Type de texte        | Has Getter | Has Setter |
| -------------- | -------------------- | ---------- | ---------- |
| lootTable      | Chaîne de caractères | vrai       | Faux       |
| translationKey | Chaîne de caractères | vrai       | Faux       |

## Casters

| Result type          | Is Implicit |
| -------------------- | ----------- |
| Chaîne de caractères | Faux        |

