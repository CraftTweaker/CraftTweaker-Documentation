# Team

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.scores.Team;
```


## Methods

:::group{name=canSeeFriendlyInvisibles}

Return Type: boolean

```zenscript
// Team.canSeeFriendlyInvisibles() as boolean

myTeam.canSeeFriendlyInvisibles();
```

:::

:::group{name=getCollisionRule}

Return Type: [CollisionRule](/mods/sdmcrtplus/world/scores/teams/CollisionRule)

```zenscript
// Team.getCollisionRule() as CollisionRule

myTeam.getCollisionRule();
```

:::

:::group{name=getColor}

Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// Team.getColor() as ChatFormatting

myTeam.getColor();
```

:::

:::group{name=getDeathMessageVisibility}

Return Type: [Visibility](/mods/sdmcrtplus/world/scores/teams/Visibility)

```zenscript
// Team.getDeathMessageVisibility() as Visibility

myTeam.getDeathMessageVisibility();
```

:::

:::group{name=getFormattedName}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Team.getFormattedName(component as Component) as MutableComponent
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |


:::

:::group{name=getName}

Return Type: string

```zenscript
// Team.getName() as string

myTeam.getName();
```

:::

:::group{name=getNameTagVisibility}

Return Type: [Visibility](/mods/sdmcrtplus/world/scores/teams/Visibility)

```zenscript
// Team.getNameTagVisibility() as Visibility

myTeam.getNameTagVisibility();
```

:::

:::group{name=getPlayers}

Return Type: Collection&lt;string&gt;

```zenscript
// Team.getPlayers() as Collection<string>

myTeam.getPlayers();
```

:::

:::group{name=isAlliedTo}

Return Type: boolean

```zenscript
Team.isAlliedTo(team2 as Team) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| team2     | [Team](/mods/sdmcrtplus/world/scores/Team) |


:::

:::group{name=isAllowFriendlyFire}

Return Type: boolean

```zenscript
// Team.isAllowFriendlyFire() as boolean

myTeam.isAllowFriendlyFire();
```

:::


