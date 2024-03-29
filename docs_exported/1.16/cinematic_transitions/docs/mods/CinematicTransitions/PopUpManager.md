# PopUpManager

This class was added by a mod with mod-id `cinematic_transitions`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.cinematic_transitions.PopUpManager;
```


## Static Methods

:::group{name=disableColorModifier}

Return Type: void

```zenscript
// PopUpManager.disableColorModifier() as void

PopUpManager.disableColorModifier();
```

:::

:::group{name=disableScaleModifier}

Return Type: void

```zenscript
// PopUpManager.disableScaleModifier() as void

PopUpManager.disableScaleModifier();
```

:::

:::group{name=disableTranslateModifier}

Return Type: void

```zenscript
// PopUpManager.disableTranslateModifier() as void

PopUpManager.disableTranslateModifier();
```

:::

:::group{name=setColorModifier}

Return Type: void

```zenscript
PopUpManager.setColorModifier(red as float, green as float, blue as float, alpha as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| red | float | No Description Provided |
| green | float | No Description Provided |
| blue | float | No Description Provided |
| alpha | float | No Description Provided |


:::

:::group{name=setPopUpLength}

Return Type: void

```zenscript
PopUpManager.setPopUpLength(length as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| length | float | No Description Provided |


:::

:::group{name=setPopUpWaitDuration}

Return Type: void

```zenscript
PopUpManager.setPopUpWaitDuration(maxWait as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| maxWait | int | No Description Provided |


:::

:::group{name=setPostRenderModification}

Return Type: void

```zenscript
PopUpManager.setPostRenderModification(modification as Runnable) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modification | Runnable | No Description Provided |


:::

:::group{name=setPreRenderModification}

Return Type: void

```zenscript
PopUpManager.setPreRenderModification(modification as Runnable) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modification | Runnable | No Description Provided |


:::

:::group{name=setScaleModifier}

Return Type: void

```zenscript
PopUpManager.setScaleModifier(x as float, y as float, z as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | float | No Description Provided |
| y | float | No Description Provided |
| z | float | No Description Provided |


:::

:::group{name=setTranslateModifier}

Return Type: void

```zenscript
PopUpManager.setTranslateModifier(x as float, y as float, z as float) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | float | No Description Provided |
| y | float | No Description Provided |
| z | float | No Description Provided |


:::

