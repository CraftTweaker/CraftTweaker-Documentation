# MCBlockState

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | No description provided |


### getProperties

Returns String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Returns List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Returns String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | No description provided |


### hasProperty

Returns boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | No description provided |
| valeur    | Chaîne de caractères | No description provided |



## Propriétés

| Nom                | Type de texte                                                 | Has Getter | Has Setter |
| ------------------ | ------------------------------------------------------------- | ---------- | ---------- |
| Bloquer            | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vrai       | Faux       |
| canProvidePower    | boolean                                                       | vrai       | Faux       |
| Chaîne de commande | Chaîne de caractères                                          | vrai       | Faux       |
| hasTileEntity      | boolean                                                       | vrai       | Faux       |
| isSolid            | boolean                                                       | vrai       | Faux       |
| isSticky           | boolean                                                       | vrai       | Faux       |
| Niveau de lumière  | Indice                                                        | vrai       | Faux       |
| ticksRandomly      | boolean                                                       | vrai       | Faux       |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| Chaîne de caractères                                          | Faux        |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vrai        |

