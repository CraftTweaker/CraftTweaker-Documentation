# MeshWithChance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.MeshWithChance;
```


## Static Methods

:::group{name=of}

Return Type: [MeshWithChance](/mods/ExNihiloSequentia/ExpandMeshWithChance)

```zenscript
MeshWithChance.of(meshType as MeshType, chance as float) as MeshWithChance
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| meshType  | [MeshType](/mods/ExNihiloSequentia/ExpandMeshType) |
| chance    | float                                              |


:::

## Methods

:::group{name=getChance}

Return Type: float

```zenscript
// MeshWithChance.getChance() as float

myMeshWithChance.getChance();
```

:::

:::group{name=getMesh}

Return Type: [MeshType](/mods/ExNihiloSequentia/ExpandMeshType)

```zenscript
// MeshWithChance.getMesh() as MeshType

myMeshWithChance.getMesh();
```

:::


## Properties

|   Name   |                        Type                        | Has Getter | Has Setter |
|----------|----------------------------------------------------|------------|------------|
| chance   | float                                              | true       | false      |
| meshType | [MeshType](/mods/ExNihiloSequentia/ExpandMeshType) | true       | false      |

