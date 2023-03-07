# AlloyBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.AlloyBuilder;
```


## Methods

:::group{name=Add}

add a metal to the alloy

```zenscript
// AlloyBuilder.Add(metal as Metal, min as double, max as double)

myAlloyBuilder.Add(<metal:tfc:copper>, 0.88, 0.92);
```

| Parameter |                     Type                      | Description |
|-----------|-----------------------------------------------|-------------|
| metal     | [Metal](/mods/TFCTweaker/Api/Expansion/Metal) | metal       |
| min       | double                                        | min amount  |
| max       | double                                        | max amount  |


:::

:::group{name=Add}

add a metal to the alloy

```zenscript
// AlloyBuilder.Add(metalName as string, min as double, max as double)

myAlloyBuilder.Add("tfc:copper", 0.88, 0.92);
```

| Parameter |  Type  |    Description    |
|-----------|--------|-------------------|
| metalName | string | name of the metal |
| min       | double | min amount        |
| max       | double | max amount        |


:::

:::group{name=Output}

Add a metal as output

```zenscript
// AlloyBuilder.Output(metal as Metal)

myAlloyBuilder.Output(<metal:tfc:bronze>);
```

| Parameter |                     Type                      | Description |
|-----------|-----------------------------------------------|-------------|
| metal     | [Metal](/mods/TFCTweaker/Api/Expansion/Metal) | metal       |


:::

:::group{name=Output}

Add a metal as output

```zenscript
// AlloyBuilder.Output(name as string)

myAlloyBuilder.Output("bronze");
```

| Parameter |  Type  |    Description    |
|-----------|--------|-------------------|
| name      | string | name of the metal |


:::


