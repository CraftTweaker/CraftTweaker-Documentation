# MCPotionEffect

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parameter  | Type | Beschreibung            |
| ---------- | ---- | ----------------------- |
| dauern     | int  | No description provided |
| verstärker | int  | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parameter  | Type | Beschreibung            | IsOptional | Standardwert |
| ---------- | ---- | ----------------------- | ---------- | ------------ |
| dauern     | int  | No description provided | false      | null         |
| verstärker | int  | No description provided | true       | 0            |



## Eigenschaften

| Name           | Type                                                                    | Has Getter | Has Setter |
| -------------- | ----------------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile  | String                                                                  | true       | false      |
| kurativeItems  | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true       | false      |
| displayName    | String                                                                  | true       | false      |
| isBeneficial   | boolean                                                                 | true       | false      |
| isInstant      | boolean                                                                 | true       | false      |
| flüssige Farbe | int                                                                     | true       | false      |
| name           | String                                                                  | true       | false      |

