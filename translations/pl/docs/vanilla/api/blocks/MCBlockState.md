# MCBlockState

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Parametr | Typ         | Opis                    |
| -------- | ----------- | ----------------------- |
| Nazwa    | Ciąg znaków | No description provided |


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

| Parametr | Typ         | Opis                    |
| -------- | ----------- | ----------------------- |
| Nazwa    | Ciąg znaków | No description provided |


### hasProperty

Returns boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| Parametr | Typ         | Opis                    |
| -------- | ----------- | ----------------------- |
| Nazwa    | Ciąg znaków | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Parametr | Typ         | Opis                    |
| -------- | ----------- | ----------------------- |
| Nazwa    | Ciąg znaków | No description provided |
| wartość  | Ciąg znaków | No description provided |



## Właściwości

| Nazwisko        | Typ                                                           | Has Getter | Has Setter |
| --------------- | ------------------------------------------------------------- | ---------- | ---------- |
| blok            | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | prawda     | fałszywy   |
| Moc kanProvidea | boolean                                                       | prawda     | fałszywy   |
| polecenie       | Ciąg znaków                                                   | prawda     | fałszywy   |
| hasTileEntity   | boolean                                                       | prawda     | fałszywy   |
| isSolid         | boolean                                                       | prawda     | fałszywy   |
| isSticky        | boolean                                                       | prawda     | fałszywy   |
| Poziom światła  | odcień                                                        | prawda     | fałszywy   |
| ticksRandomly   | boolean                                                       | prawda     | fałszywy   |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| Ciąg znaków                                                   | fałszywy    |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | prawda      |

