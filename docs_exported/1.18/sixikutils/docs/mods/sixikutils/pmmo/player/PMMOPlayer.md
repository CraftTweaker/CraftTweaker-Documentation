# CTPMMOPlayer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.nevermine.api.entity.player.CTPMMOPlayer;
```


## Methods

:::group{name=addLevel}

```zenscript
CTPMMOPlayer.addLevel(skillName as string, amount as int)
```

| Parameter |  Type  |
|-----------|--------|
| skillName | string |
| amount    | int    |


:::

:::group{name=addXp}

```zenscript
CTPMMOPlayer.addXp(skillName as string, amount as int)
```

| Parameter |  Type  |
|-----------|--------|
| skillName | string |
| amount    | int    |


:::

:::group{name=getLevel}

Return Type: int

```zenscript
CTPMMOPlayer.getLevel(skillName as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| skillName | string |


:::

:::group{name=setLevel}

```zenscript
CTPMMOPlayer.setLevel(skillName as string, amount as int)
```

| Parameter |  Type  |
|-----------|--------|
| skillName | string |
| amount    | int    |


:::


