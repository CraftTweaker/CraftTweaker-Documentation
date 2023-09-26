# CollisionRule

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.scores.teams.CollisionRule;
```


## Enum Constants

CollisionRule is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:sdmcrt:team/collisionrule:always>
<constant:sdmcrt:team/collisionrule:never>
<constant:sdmcrt:team/collisionrule:push_other_teams>
<constant:sdmcrt:team/collisionrule:push_own_team>
```
## Methods

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// CollisionRule.getDisplayName() as Component

myCollisionRule.getDisplayName();
```

:::

:::group{name=getID}

Return Type: int

```zenscript
// CollisionRule.getID() as int

myCollisionRule.getID();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// CollisionRule.getName() as string

myCollisionRule.getName();
```

:::


