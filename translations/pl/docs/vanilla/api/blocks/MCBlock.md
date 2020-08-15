# MCBlock

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlock
```

## Metody
### canSpawnInBlock

Returns boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Właściwości

| Nazwisko       | Typ         | Has Getter | Has Setter |
| -------------- | ----------- | ---------- | ---------- |
| lootTable      | Ciąg znaków | prawda     | fałszywy   |
| translationKey | Ciąg znaków | prawda     | fałszywy   |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| Ciąg znaków | fałszywy    |

