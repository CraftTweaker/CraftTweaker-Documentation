# Visibility

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.scores.teams.Visibility;
```


## Enum Constants

Visibility is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:sdmcrt:team/visibility:always>
<constant:sdmcrt:team/visibility:never>
<constant:sdmcrt:team/visibility:hide_for_other_teams>
<constant:sdmcrt:team/visibility:hide_for_own_team>
```
## Methods

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Visibility.getDisplayName() as Component

myVisibility.getDisplayName();
```

:::

:::group{name=getID}

Return Type: int

```zenscript
// Visibility.getID() as int

myVisibility.getID();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// Visibility.getName() as string

myVisibility.getName();
```

:::


