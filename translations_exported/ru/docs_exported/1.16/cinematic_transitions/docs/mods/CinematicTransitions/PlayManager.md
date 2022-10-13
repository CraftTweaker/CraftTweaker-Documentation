# PlayManager

This class was added by a mod with mod-id `cinematic_transitions`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.cinematic_transitions.PlayManager;
```


## Static Methods

:::group{name=playPopUp}



Return Type: void

```zenscript
PlayManager.playPopUp(registryName as string) as void
```

| Параметр     | Тип    | Описание                                                                           |
| ------------ | ------ | ---------------------------------------------------------------------------------- |
| registryName | string | take the registry name of a PopUp registered using Json, plays the popup provided. |


:::

:::group{name=playTransition}

Plays transition (black bars on the top and bottom of screen) with no children (popups)

Return Type: void

```zenscript
// PlayManager.playTransition() as void

PlayManager.playTransition();
```

:::

:::group{name=playTransition}



Return Type: void

```zenscript
PlayManager.playTransition(childName as string) as void
```

| Параметр  | Тип    | Описание                                                                                        |
| --------- | ------ | ----------------------------------------------------------------------------------------------- |
| childName | string | Plays transition with child. Syncs up the child wait duration and transition length to parent's |


:::

:::group{name=registerBiomePopUpListener}

Registers a listener that triggers given popup when player enters given biome

Return Type: void

```zenscript
PlayManager.registerBiomePopUpListener(biomeName as string, popUp as string, hasTransition as boolean) as void
```

| Параметр      | Тип     | Описание                               |
| ------------- | ------- | -------------------------------------- |
| biomeName     | string  | registry name of biome                 |
| popUp         | string  | registry name of popup                 |
| hasTransition | boolean | whether if transition should be played |


:::

:::group{name=registerDimensionPopUpListener}

Registers a listener that triggers given popup when player enters given dimension

Return Type: void

```zenscript
PlayManager.registerDimensionPopUpListener(dimensionName as string, popUp as string, hasTransition as boolean) as void
```

| Параметр      | Тип     | Описание                               |
| ------------- | ------- | -------------------------------------- |
| dimensionName | string  | registry name of dimension             |
| popUp         | string  | registry name of popup                 |
| hasTransition | boolean | whether if transition should be played |


:::

:::group{name=registerEntityPopUpListener}

Registers a listener that triggers given popup when given entity spawns

Return Type: void

```zenscript
PlayManager.registerEntityPopUpListener(entityName as string, popUp as string, hasTransition as boolean) as void
```

| Параметр      | Тип     | Описание                               |
| ------------- | ------- | -------------------------------------- |
| entityName    | string  | entity type                            |
| popUp         | string  | registry name of popup                 |
| hasTransition | boolean | whether if transition should be played |


:::

:::group{name=registerStructurePopUpListener}

Registers a listener that triggers given popup when player enters given structure

Return Type: void

```zenscript
PlayManager.registerStructurePopUpListener(structureName as string, popUp as string, hasTransition as boolean) as void
```

| Параметр      | Тип     | Описание                               |
| ------------- | ------- | -------------------------------------- |
| structureName | string  | registry name of structure             |
| popUp         | string  | registry name of popup                 |
| hasTransition | boolean | whether if transition should be played |


:::

:::group{name=setHideInventory}



Return Type: void

```zenscript
PlayManager.setHideInventory(hideInventory as boolean) as void
```

| Параметр      | Тип     | Описание                                                                    |
| ------------- | ------- | --------------------------------------------------------------------------- |
| hideInventory | boolean | whether if the hotbar, health, etc should be hidden during popup/transition |


:::

