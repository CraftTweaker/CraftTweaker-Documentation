# CommandSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.command.CommandSource;
```


## Methods

:::group{name=acceptsFailure}

Return Type: boolean

```zenscript
// CommandSource.acceptsFailure() as boolean

myCommandSource.acceptsFailure();
```

:::

:::group{name=acceptsSuccess}

Return Type: boolean

```zenscript
// CommandSource.acceptsSuccess() as boolean

myCommandSource.acceptsSuccess();
```

:::

:::group{name=alwaysAccepts}

Return Type: boolean

```zenscript
// CommandSource.alwaysAccepts() as boolean

myCommandSource.alwaysAccepts();
```

:::

:::group{name=sendMessage}

```zenscript
CommandSource.sendMessage(component as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |


:::

:::group{name=shouldInformAdmins}

Return Type: boolean

```zenscript
// CommandSource.shouldInformAdmins() as boolean

myCommandSource.shouldInformAdmins();
```

:::


## Properties

|        Name        |  Type   | Has Getter | Has Setter |
|--------------------|---------|------------|------------|
| acceptsFailure     | boolean | true       | false      |
| acceptsSuccess     | boolean | true       | false      |
| alwaysAccepts      | boolean | true       | false      |
| shouldInformAdmins | boolean | true       | false      |

