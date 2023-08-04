# Reward

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.Reward;
```


## Methods

:::group{name=getIcon}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// Reward.getIcon() as IItemStack

myReward.getIcon();
```

:::

:::group{name=getQuest}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
// Reward.getQuest() as Quest

myReward.getQuest();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// Reward.getString() as string

myReward.getString();
```

:::

:::group{name=getTag}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// Reward.getTag() as stdlib.List<string>

myReward.getTag();
```

:::


