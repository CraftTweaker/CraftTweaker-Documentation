# Expansion for Player

## Methods

:::group{name=addPMMOLevel}

Return Type: boolean

```zenscript
Player.addPMMOLevel(skill as string, levelChange as int) as boolean
```

|  Parameter  |  Type  |
|-------------|--------|
| skill       | string |
| levelChange | int    |


:::

:::group{name=addPMMOXp}

```zenscript
Player.addPMMOXp(skill as string, change as long)
```

| Parameter |  Type  |
|-----------|--------|
| skill     | string |
| change    | long   |


:::

:::group{name=getPMMOLevel}

Return Type: int

```zenscript
Player.getPMMOLevel(skill as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| skill     | string |


:::

:::group{name=getPMMOXp}

Return Type: long

```zenscript
Player.getPMMOXp(skill as string) as long
```

| Parameter |  Type  |
|-----------|--------|
| skill     | string |


:::

:::group{name=setPMMOLevel}

```zenscript
Player.setPMMOLevel(skill as string, level as int)
```

| Parameter |  Type  |
|-----------|--------|
| skill     | string |
| level     | int    |


:::

:::group{name=setPMMOXp}

```zenscript
Player.setPMMOXp(skill as string, xpRaw as long)
```

| Parameter |  Type  |
|-----------|--------|
| skill     | string |
| xpRaw     | long   |


:::


